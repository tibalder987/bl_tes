<?php
namespace App\Controller\Admin;

use App\Entity\Job;
use App\Entity\JobType;
use App\Field\Admin\TranslationField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class JobTypeCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return JobType::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Type de contrat')
            ->setPageTitle('index', 'Listing des types de contrat')
            ->setPageTitle('new', "Création d'un type de contrat")
            ->setPageTitle('edit', "Modification d'un type de contrat")
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
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter un type de contrat");
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

            TranslationField::new('title', 'Libellé du type de contrat')->onlyOnIndex(),
            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex()
        ];
    }
}
