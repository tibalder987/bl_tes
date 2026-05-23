<?php
namespace App\Form;

use App\Entity\Survey;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class SurveyAccessType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('survey', EntityType::class, [
                'class' => Survey::class,
                'required' => true,
                'label' => 'Enquête / Sondage',
                'query_builder' => function(EntityRepository $repository) {
                    return $repository->createQueryBuilder('s')
                        ->where('s.active = TRUE');
                },
                'attr' => [
                    'class' => 'form-control',
                    'placeholder' => "Veuillez sélectionner une enquête"
                ],
                'label_attr' => [
                    'class' => 'pb-2'
                ],
                'row_attr' => [
                    'class' => 'col-md-12 pt-3'
                ],
            ])
        ;
    }
}
