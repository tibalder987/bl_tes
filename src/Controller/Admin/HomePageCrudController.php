<?php

namespace App\Controller\Admin;

use App\Entity\HomePage;
use App\Field\Admin\TranslationField;
use App\Form\Admin\BuilderType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use FOS\CKEditorBundle\Form\Type\CKEditorType;

class HomePageCrudController extends AbstractCrudController
{
    /**
     * @return string
     */
    public static function getEntityFqcn(): string
    {
        return HomePage::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        $editTitle = "Modification de la page d'accueil";

        return $crud
            ->setPageTitle(Crud::PAGE_EDIT, $editTitle)
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                    '@FOSCKEditor/Form/ckeditor_widget.html.twig',
                    'admin/builder_type.html.twig',
                ]
            )
            ->showEntityActionsInlined()
        ;
    }

    public function configureActions(Actions $actions): Actions
    {

        return $actions
            ->disable(Crud::PAGE_INDEX)
            ->disable(Action::DELETE)
            ->disable(Action::SAVE_AND_RETURN)
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        $fieldsconfig = [
            'elements' => [
                'field_type' => BuilderType::class,
                'required' => false,
                'label' => 'Builder',
                'row_attr' => ['class' => 'mt-3 text-start']
            ],
            'description' => [
                'field_type' => CKEditorType::class,
                'required' => false,
                'mapped' => false,
                'label' => 'Fake field',
                'row_attr' => ['class' => 'd-none']
            ],
        ];

        return [
            FormField::addPanel('Builder')->setIcon('fa fa-pencil-ruler')->addCssClass('col-12'),
            TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true)->setLabel(false),
        ];
    }
}
