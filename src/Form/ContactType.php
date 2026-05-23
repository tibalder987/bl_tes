<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\ServiceContact;
use Doctrine\ORM\EntityRepository;
use Karser\Recaptcha3Bundle\Form\Recaptcha3Type;
use Karser\Recaptcha3Bundle\Validator\Constraints\Recaptcha3;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Translation\TranslatableMessage;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\Translation\TranslatorInterface;

class ContactType extends AbstractType
{
    public function __construct(
        private readonly TranslatorInterface $translator,
    ) {}

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('service', EntityType::class, [
                'class' => ServiceContact::class,
                'required' => true,
                'label' => 'contact.form.label.service',
                'query_builder' => function (EntityRepository $repository) {
                    return $repository->createQueryBuilder('s')
                        ->join('s.translations', 'st')
                        ->where('s.active = TRUE')
                        ->andWhere('st.locale = :locale')->setParameter('locale', 'fr')
                        ->orderBy("st.title", "ASC");
                },
                'attr' => [
                    'class' => 'contact-page__input',
                    'placeholder' => $this->translator->trans('contact.form.placeholder.service', [], 'contact'),
                ],
                'label_attr' => [
                    'class' => 'contact-page__label',
                ],
                'row_attr' => [
                    'class' => 'contact-page__field',
                ],
            ])
            ->add('firstname', TextType::class, [
                'required' => true,
                'label' => 'contact.form.label.firstname',
                'attr' => [
                    'class' => 'contact-page__input',
                    'placeholder' => '',
                ],
                'label_attr' => [
                    'class' => 'contact-page__label',
                ],
                'row_attr' => [
                    'class' => 'contact-page__field',
                ],
            ])
            ->add('lastname', TextType::class, [
                'required' => false,
                'label' => 'contact.form.label.lastname',
                'label_attr' => [
                    'class' => 'contact-page__label',
                ],
                'attr' => [
                    'class' => 'contact-page__input',
                    'placeholder' => '',
                ],
                'row_attr' => [
                    'class' => 'contact-page__field',
                ],
            ])
            ->add('email', EmailType::class, [
                'required' => true,
                'label' => 'contact.form.label.email',
                'constraints' => [
                    new NotBlank([
                        'message' => new TranslatableMessage('contact.form.validation.email_required', [], 'contact'),
                    ]),
                ],
                'attr' => [
                    'class' => 'contact-page__input',
                    'placeholder' => '',
                ],
                'label_attr' => [
                    'class' => 'contact-page__label',
                ],
                'row_attr' => [
                    'class' => 'contact-page__field',
                ],
            ])
            ->add('phone', TextType::class, [
                'required' => true,
                'label' => 'contact.form.label.phone',
                'row_attr' => [
                    'class' => 'contact-page__field',
                ],
                'attr' => [
                    'class' => 'contact-page__input',
                    'placeholder' => '',
                ],
                'label_attr' => [
                    'class' => 'contact-page__label',
                ],
            ])
            ->add('message', TextareaType::class, [
                'required' => true,
                'label' => 'contact.form.label.message',
                'attr' => [
                    'class' => 'contact-page__input contact-page__input--textarea',
                    'placeholder' => '',
                    'rows' => 6,
                ],
                'label_attr' => [
                    'class' => 'contact-page__label',
                ],
                'row_attr' => [
                    'class' => 'contact-page__field',
                ],
            ])
            ->add('captcha', Recaptcha3Type::class, [
                'constraints' => new Recaptcha3(),
                'action_name' => 'contact',
                'row_attr' => [
                    'class' => 'contact-page__captcha',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'translation_domain' => 'contact',
        ]);
    }
}
