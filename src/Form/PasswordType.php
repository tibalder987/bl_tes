<?php
namespace App\Form;

use App\Entity\User;
use App\Validator\Constraints\PasswordRequirement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class PasswordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $required = false;
        if($options['required']) {
            $required = $options['required'];
        }

        $builder
            ->add('plainPassword', RepeatedType::class, [
                'type' => \Symfony\Component\Form\Extension\Core\Type\PasswordType::class,
                'required' => $required,
                'first_options' => [
                    'label' => "Votre mot de passe",
                    'label_attr' => [
                        'class' => 'fs-14 text-dark pb-1'
                    ],
                    'attr' => [
                        'class' => 'form-control'
                    ],
                    'constraints' => [
                        new PasswordRequirement()
                    ]
                ],
                'second_options' => ['label' => "Confirmer votre mot de passe",
                    'label_attr' => [
                        'class' => 'fs-14 text-dark pb-1'
                    ],
                    'attr' => [
                        'class' => 'form-control'
                    ],
                    'row_attr' => [
                        'class' => 'pt-2'
                    ]
                ],
                'attr' => ['autocomplete' => 'new-password'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'allow_extra_fields' => true,
        ]);
    }
}
