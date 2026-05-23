<?php
namespace App\Form\Admin;

use A2lix\TranslationFormBundle\Form\Type\TranslationsType;
use App\Entity\SurveyQuestionAnswer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SurveyQuestionAnswerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $fieldsconfig = [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => 'Libellé de la réponse',
                'row_attr' => ['class' => 'text-start'],
            ],
        ];

        $builder
            ->add('translations', TranslationsType::class,[
                'label' => false, 'required' => true, 'fields' => $fieldsconfig,
                'locale_labels' => [
                    'fr' => 'Français',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SurveyQuestionAnswer::class,
        ]);
    }
}
