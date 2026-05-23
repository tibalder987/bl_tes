<?php

namespace App\Controller\Admin;

use App\Entity\PageOnglet;
use App\Field\Admin\TranslationField;
use App\Form\Admin\BuilderType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class PageOngletCrudController extends AbstractCrudController
{
    /**
     * @return string
     */
    public static function getEntityFqcn(): string
    {
        return PageOnglet::class;
    }


    public function configureCrud(Crud $crud): Crud
    {
        $pageSingular = "Onglet";
        $newTitle = "Ajout d'un onglet";
        $editTitle = "Modification d'un onglet";
        $listTitle = "Listing des onglets";

        $crud
            ->setEntityPermission('ROLE_ADMIN')
            ->setEntityLabelInSingular($pageSingular)
            ->setPageTitle(Crud::PAGE_INDEX, $listTitle)
            ->setPageTitle(Crud::PAGE_NEW, $newTitle)
            ->setPageTitle(Crud::PAGE_EDIT, $editTitle)
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                    '@FOSCKEditor/Form/ckeditor_widget.html.twig',
                    'admin/builder_type.html.twig',
                ]
            )
            ->setSearchFields(['translations.title'])
            ->setDefaultSort(['id' => 'DESC'])
        ;

        return $crud;
    }

    public function configureActions(Actions $actions): Actions
    {

        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter un onglet");
            })
            ->disable(Action::BATCH_DELETE)
            ->disable(Action::DETAIL)

            ->setPermission(Action::NEW, 'ROLE_ADMIN')
            ->setPermission(Action::EDIT, 'ROLE_ADMIN')
            ->setPermission(Action::DELETE, 'ROLE_ADMIN')
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        $fieldsconfig = [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => "Libellé de l'onglet",
                'row_attr' => ['class' => 'mt-2 text-start'],
            ],
            'elements' => [
                'field_type' => BuilderType::class,
                'required' => false,
                'label' => 'Builder',
                'row_attr' => ['class' => 'mt-3 text-start']
            ],
        ];

        return [

            FormField::addTab('Informations')->setIcon('fa fa-address-book')->addCssClass('col-12'),
            FormField::addPanel('Informations & Builder')->setIcon('fa fa-pencil-ruler')->addCssClass('col-12'),
            TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true)->setLabel(false),
            TextField::new('title', "Libellé de l'onglet")->onlyOnIndex(),
            TextEditorField::new('hideField', "Description")->hideOnIndex()->setFormType(CKEditorType::class)->setFormTypeOptions(['mapped' => false])->addCssClass('d-none'),
            FormField::addPanel('Active')->setIcon('fa fa-toggle')->addCssClass('col-12'),
            DateTimeField::new('updatedAt', 'Dernière mise à jour')->setFormat(DateTimeField::FORMAT_SHORT, DateTimeField::FORMAT_SHORT)->onlyOnIndex(),
        ];
    }
}
