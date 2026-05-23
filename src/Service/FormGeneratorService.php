<?php

namespace App\Service;

use App\Entity\Form as FormEntity;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\Length;

class FormGeneratorService
{
    private FormFactoryInterface $formFactory;

    public function __construct(FormFactoryInterface $formFactory)
    {
        $this->formFactory = $formFactory;
    }

    /**
     * Create a Symfony Form from the JSON schema stored in FormEntity
     */
    public function createDynamicForm(FormEntity $formEntity, ?string $actionUrl = null): FormInterface
    {
        $schema = $formEntity->getSchemaData();

        $formOptions = [];
        if ($actionUrl) {
            $formOptions['action'] = $actionUrl;
            $formOptions['method'] = 'POST';
        }
        $builder = $this->formFactory->createBuilder(\Symfony\Component\Form\Extension\Core\Type\FormType::class, null, $formOptions);

        $steps = $schema['steps'] ?? [];

        foreach ($steps as $step) {
            $fields = $step['fields'] ?? [];
            foreach ($fields as $field) {

                // Skip paragraph fields as they are just HTML blocks and not inputs
                if ($field['type'] === 'paragraph') {
                    continue;
                }

                $options = [
                    'label' => $field['label'] ?? '',
                    'label_attr' => ['class' => 'form-label font-weight-bold'],
                    'attr'  => [],
                    'required' => $field['required'] ?? false,
                ];

                if (!empty($field['placeholder'])) {
                    $options['attr']['placeholder'] = $field['placeholder'];
                }

                // Add grid column classes if specified (for Twig rendering later)
                if (!empty($field['width'])) {
                    $options['attr']['class'] = ($options['attr']['class'] ?? '') . ' col-md-' . $field['width'];
                }

                if (isset($field['min']) && $field['min'] !== '') {
                    $options['attr']['min'] = $field['min'];
                }
                if (isset($field['max']) && $field['max'] !== '') {
                    $options['attr']['max'] = $field['max'];
                }
                if (isset($field['step']) && $field['step'] !== '') {
                    $options['attr']['step'] = $field['step'];
                }

                if (isset($field['minDate']) && $field['minDate'] !== '') {
                    $options['attr']['min'] = $field['minDate']; // For HTML5 date/time inputs
                }
                if (isset($field['maxDate']) && $field['maxDate'] !== '') {
                    $options['attr']['max'] = $field['maxDate']; // For HTML5 date/time inputs
                }

                $constraints = [];
                if ($options['required']) {
                    $constraints[] = new NotBlank(['message' => 'Ce champ est obligatoire']);
                }

                switch ($field['type']) {
                    case 'email':
                    case 'text':
                    case 'textarea':
                    case 'phone':
                        $options['attr']['class'] = ($options['attr']['class'] ?? '') . ' form-control';
                        if ($field['type'] === 'email' && $options['required']) {
                            $constraints[] = new Email(['message' => 'Email invalide']);
                        }

                        $lengthOptions = [];
                        if (isset($field['minLength']) && $field['minLength'] !== '') {
                            $lengthOptions['min'] = (int)$field['minLength'];
                            $lengthOptions['minMessage'] = "La longueur minimale est de {$field['minLength']} caractères";
                            $options['attr']['minlength'] = $field['minLength'];
                        }
                        if (isset($field['maxLength']) && $field['maxLength'] !== '') {
                            $lengthOptions['max'] = (int)$field['maxLength'];
                            $lengthOptions['maxMessage'] = "La longueur maximale est de {$field['maxLength']} caractères";
                            $options['attr']['maxlength'] = $field['maxLength'];
                        }
                        if (!empty($lengthOptions)) {
                            $constraints[] = new Length($lengthOptions);
                        }

                        $options['constraints'] = $constraints;

                        if ($field['type'] === 'email') {
                            $builder->add($field['id'], EmailType::class, $options);
                        } elseif ($field['type'] === 'textarea') {
                            $builder->add($field['id'], TextareaType::class, $options);
                        } elseif ($field['type'] === 'phone') {
                            $builder->add($field['id'], TelType::class, $options);
                        } else {
                            $builder->add($field['id'], TextType::class, $options);
                        }
                        break;
                    case 'number':
                        $options['attr']['class'] = ($options['attr']['class'] ?? '') . ' form-control';
                        $options['constraints'] = $constraints;
                        $builder->add($field['id'], NumberType::class, $options);
                        break;
                    case 'date':
                        $options['attr']['class'] = ($options['attr']['class'] ?? '') . ' form-control';
                        $options['constraints'] = $constraints;
                        $options['widget'] = 'single_text'; // Render as HTML5 date input
                        $builder->add($field['id'], DateType::class, $options);
                        break;
                    case 'time':
                        $options['attr']['class'] = ($options['attr']['class'] ?? '') . ' form-control';
                        $options['constraints'] = $constraints;
                        $options['widget'] = 'single_text'; // Render as HTML5 time input
                        $builder->add($field['id'], TimeType::class, $options);
                        break;
                    case 'file':
                        $options['attr']['class'] = ($options['attr']['class'] ?? '') . ' form-control';
                        $fileConstraints = [];
                        $maxSize = '5M'; // default

                        if (isset($field['maxSizeMb']) && $field['maxSizeMb'] !== '') {
                            $maxSize = $field['maxSizeMb'] . 'M';
                        }
                        $fileConstraints['maxSize'] = $maxSize;

                        // Parse allowed extensions and convert to common mimetypes roughly 
                        // Note: For a true robust system, mime types should be strictly mapped, but here we just check if it's set
                        if (isset($field['allowedExtensions']) && trim($field['allowedExtensions']) !== '') {
                            // User input might be ".pdf, .jpg" or "pdf,jpg"
                            // A real implementation would parse and map .ext to MIME or trust the Validator
                            // For simplicity, we just add the message constraint here or potentially map them.
                            // The File constraint can take extensions in newer Symfony versions, or validate mime types.
                            // Assuming basic validation logic here if needed.
                        }

                        $fileConstraints['mimeTypesMessage'] = 'Veuillez uploader un type de fichier valide';

                        // ONLY add the constraint if required OR if a file is actually uploaded (Symfony handles this if not required but constraint exists)
                        $constraints[] = new File($fileConstraints);

                        $options['constraints'] = $constraints;
                        $builder->add($field['id'], FileType::class, $options);
                        break;
                    case 'select':
                    case 'radio':
                    case 'checkbox':
                        $choices = [];
                        if (isset($field['options']) && is_array($field['options'])) {
                            foreach ($field['options'] as $opt) {
                                // Symfony expects ['Label shown' => 'value1'] for forms
                                if (isset($opt['label']) && isset($opt['value'])) {
                                    $choices[$opt['label']] = $opt['value'];
                                }
                            }
                        }
                        $options['choices'] = $choices;
                        $options['constraints'] = $constraints;

                        if ($field['type'] === 'radio') {
                            $options['expanded'] = true;
                            $options['multiple'] = false;
                            $options['label_attr']['class'] = 'form-label font-weight-bold d-block';
                            // Custom form-check layout for radio/checkboxes are usually better handled via form themes, but let's try injecting basic classes here via label_attr / attr for the children
                        } elseif ($field['type'] === 'checkbox') {
                            $options['expanded'] = true;
                            $options['multiple'] = true;
                            $options['label_attr']['class'] = 'form-label font-weight-bold d-block';
                        } else {
                            // Select box
                            $options['expanded'] = false;
                            $options['multiple'] = false;
                            $options['attr']['class'] = ($options['attr']['class'] ?? '') . ' form-select';
                        }

                        $builder->add($field['id'], ChoiceType::class, $options);
                        break;
                }
            }
        }

        $builder->add('submit', SubmitType::class, ['label' => 'Envoyer']);
        return $builder->getForm();
    }
}
