<?php
namespace App\Form\Admin;

use A2lix\TranslationFormBundle\Form\Type\TranslationsType;
use App\Entity\SurveyQuestion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SurveyQuestionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $fieldsconfig = [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => 'Libellé de la question',
                'row_attr' => ['class' => 'text-start'],
            ],
        ];

        $builder
            ->add('type', ChoiceType::class, [
                'label' => 'Format de la question',
                'required' => true,
                'choices' => [
                    'Étoile' => 'etoile',
                    "Champs texte" => 'text',
                    "Liste de réponse" => 'radio'
                ],
                'attr' => [
                    'class' => 'form-survey-question-type'
                ]
            ])
            ->add('translations', TranslationsType::class,[
                'label' => false, 'required' => true, 'fields' => $fieldsconfig,
                'locale_labels' => [
                    'fr' => 'Français',
                ]
            ])
            ->add('surveyQuestionAnswers', CollectionType::class, [
                    'by_reference' => false,
                    'label' => "Liste des réponses",
                    'required' => false,
                    'entry_type' => SurveyQuestionAnswerType::class,
                    "allow_add" => true, "allow_delete" => true,
                    'row_attr' => [
                        'class' => 'form-survey-question-answer-type'
                    ]
                ]
            )
            ->add('active', CheckboxType::class, [
                'required' => false,
                'label' => "Question active",
                'row_attr' => [
                    'class' => 'form-check'
                ],
                'label_attr' => [
                    'class' => 'form-check-label'
                ],
                'attr' => [
                    'class' => 'form-check-input form-survey-question-active'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SurveyQuestion::class,
        ]);
    }
}
