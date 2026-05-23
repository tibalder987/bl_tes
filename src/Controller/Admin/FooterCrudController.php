<?php
namespace App\Controller\Admin;

use App\Entity\Footer;
use App\Form\Admin\FooterLinkFormType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Vich\UploaderBundle\Form\Type\VichImageType;

class FooterCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Footer::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('edit', "Modification du footer")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                    '@FOSCKEditor/Form/ckeditor_widget.html.twig'
                ]
            )
            ->setSearchFields(['translations.title']);
    }

    public function configureActions(Actions $actions): Actions{
        return $actions
            ->disable(Crud::PAGE_INDEX)
            ->disable(Action::DELETE)
            ->disable(Action::SAVE_AND_RETURN)
        ;
    }

    public function configureFields(string $pageName): iterable
    {

        return [
            FormField::addPanel('Logo')->setIcon('fa fa-image')->addCssClass('col-12'),
                Field::new('logo', 'Logo')->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', false),

            FormField::addPanel('Liens')->setIcon('fa fa-link')->addCssClass('col-12'),
                CollectionField::new('footerLinks', 'Liens')->setEntryType(FooterLinkFormType::class)->setColumns(12)->onlyOnForms()->setRequired(true),
        ];
    }
}
