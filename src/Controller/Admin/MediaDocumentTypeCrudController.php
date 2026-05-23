<?php
namespace App\Controller\Admin;

use App\Entity\MediaDocumentType;
use App\Field\Admin\TranslationField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class MediaDocumentTypeCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return MediaDocumentType::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Type de document')
            ->setPageTitle('index', 'Listing des types de documents')
            ->setPageTitle(Crud::PAGE_NEW, "Création d'un type de document")
            ->setPageTitle(Crud::PAGE_EDIT, "Modification d'un type de document")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                ]
            )
            ->setSearchFields(['translations.title']);
    }

    public function configureActions(Actions $actions): Actions{
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter un type de document");
            })
            ->update(Crud::PAGE_INDEX, Action::DELETE, static function (Action $action) {
                return $action->displayIf(static function ($entity) {
                    return $entity->getMedias()->isEmpty();
                });
            })
            ->disable(Action::BATCH_DELETE)
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
                TextField::new('title', 'Libellé du type de document')->onlyOnIndex(),
            FormField::addPanel('Active')->setIcon('fa fa-lock')->addCssClass('col-12'),
                BooleanField::new('active', 'Type de document accessible'),

            DateTimeField::new('updatedAt', 'Dernière mise à jour')->setFormat(DateTimeField::FORMAT_SHORT, DateTimeField::FORMAT_SHORT)->onlyOnIndex()
        ];
    }
}
