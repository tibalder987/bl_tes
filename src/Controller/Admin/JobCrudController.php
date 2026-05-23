<?php
namespace App\Controller\Admin;

use App\Entity\Job;
use App\Field\Admin\TranslationField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class JobCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Job::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Métier')
            ->setPageTitle('index', 'Listing des métiers')
            ->setPageTitle('new', "Création d'un métier")
            ->setPageTitle('edit', "Modification d'un métier")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                ]
            )
            ->setSearchFields(['translations.title'])
        ;
    }

    public function configureActions(Actions $actions): Actions{
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter un métier");
            })
            ->update(Crud::PAGE_INDEX, Action::DELETE, static function (Action $action) {
                return $action->displayIf(static function ($entity) {
                    return ($entity->getJobOffers()->isEmpty());
                });
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
            ]
        ];


        return [
            FormField::addPanel('Informations')->setIcon('fa fa-pencil-ruler')->addCssClass('col-12'),
                TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true),
                TranslationField::new('title', 'Libellé du métier')->onlyOnIndex(),
            FormField::addPanel('Active')->setIcon('fa fa-lock')->addCssClass('col-12'),
                BooleanField::new('active', 'Active'),

            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex()
        ];
    }
}
