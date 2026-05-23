<?php
namespace App\Controller\Admin;

use App\Entity\Job;
use App\Entity\JobOffer;
use App\Field\Admin\TranslationField;
use App\Repository\JobRepository;
use App\Repository\JobTypeRepository;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class JobOfferCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return JobOffer::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular("Offre d'emploi")
            ->setPageTitle('index', "Listing des offres d'emploi")
            ->setPageTitle('new', "Création d'une offre d'emploi")
            ->setPageTitle('edit', "Modification d'un offre d'emploi")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                    '@FOSCKEditor/Form/ckeditor_widget.html.twig'
                ]
            )
            ->setSearchFields(['translations.title'])
        ;
    }

    public function configureActions(Actions $actions): Actions{
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter un offre d'emploi");
            })
            ->remove(Crud::PAGE_INDEX, Action::BATCH_DELETE)
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        $fieldsconfig = [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => 'Libellé',
                'row_attr' => ['class' => 'mt-4 text-start']
            ],
            'presentation' => [
                'field_type' => CKEditorType::class,
                'required' => false,
                'label' => 'Description de l\'offre d\'emploi',
                'row_attr' => ['class' => 'mb-4 text-start']
            ],
            'missions' => [
                'field_type' => CKEditorType::class,
                'required' => false,
                'label' => 'Mission de l\'offre d\'emploi',
                'row_attr' => ['class' => 'mb-4 text-start']
            ],
            'competences' => [
                'field_type' => CKEditorType::class,
                'required' => false,
                'label' => 'Compétences demandées de l\'offre d\'emploi',
                'row_attr' => ['class' => 'text-start']
            ]
        ];


        return [
            FormField::addPanel('Configuration')->setIcon('fa fa-cogs')->addCssClass('col-12'),
                AssociationField::new('jobType', "Type de contrat")->onlyOnForms()->setColumns(5)->setRequired(true),
                AssociationField::new('job', "Métier")->onlyOnForms()->setColumns(5)->setRequired(true)
                    ->setFormTypeOptions(['query_builder' => function (JobRepository $em) {
                        return $em->createQueryBuilder('j')
                            ->where('j.active = TRUE');
                    }]),
                DateField::new('dateLimitOffer', 'Date limite des candidatures')->onlyOnForms()->setColumns(2),

            FormField::addPanel('Informations')->setIcon('fa fa-pencil-ruler')->addCssClass('col-12'),
                TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true),
                TranslationField::new('title', 'Libellé de l\'offre d\'emploi')->onlyOnIndex(),
            FormField::addPanel('Active')->setIcon('fa fa-lock')->addCssClass('col-12'),
                BooleanField::new('active', 'Active'),

            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex()
        ];
    }
}
