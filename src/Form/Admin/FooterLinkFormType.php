<?php

namespace App\Form\Admin;

use A2lix\TranslationFormBundle\Form\Type\TranslationsType;
use App\Entity\FooterLink;
use App\Entity\Page;
use App\Utilities\GlobalConstants;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FooterLinkFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $fieldsconfig = [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => 'Libellé',
                'row_attr' => ['class' => 'text-start'],
            ],
            'pageSystem' => [
                'field_type' => ChoiceType::class,
                'label' => 'Redirection vers une page système',
                'choices' => GlobalConstants::A_SYSTEM_PAGE,
                'required' => false
            ],
            'page' => [
                'field_type' => EntityType::class,
                'label' => '(ou) Redirection vers une page de contenu',
                'class' => Page::class,
                'required' => false,
                'data_class' => null
            ],
            'externalPath' => [
                'field_type' => TextType::class,
                'required' => false,
                'label' => '(ou) redirection vers une URL',
                'row_attr' => ['class' => 'text-start']
            ]
        ];


        $builder
            ->add('position', ChoiceType::class, [
                'label' => 'Position',
                'required' => true,
                'choices' => [
                    1 => 1,
                    2 => 2,
                    3 => 3,
                    4 => 4,
                    5 => 5,
                    6 => 6,
                    7 => 7,
                    8 => 8,
                    9 => 9,
                    10 => 10,
                    11 => 11,
                    12 => 12,
                ]
            ])
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
            'data_class' => FooterLink::class,
        ]);
    }
}
