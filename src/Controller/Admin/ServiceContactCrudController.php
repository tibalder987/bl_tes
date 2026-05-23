<?php

namespace App\Controller\Admin;

use App\Entity\ServiceContact;
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

class ServiceContactCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ServiceContact::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Service de contact')
            ->setPageTitle('index', 'Listing des services de contact (Formulaire de contact)')
            ->setPageTitle('new', "Création d'un service de contact")
            ->setPageTitle('edit', "Modification d'un service de contact")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                ]
            )
            ->setSearchFields(['translations.title', 'slug'])
        ;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter un service de contact");
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
            FormField::addPanel('Dénomination')->setIcon('fa fa-info-circle')->addCssClass('col-12'),
            TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true),
            TranslationField::new('title', 'Libellé du service')->onlyOnIndex(),
            FormField::addPanel('Contact')->setIcon('fa fa-at')->addCssClass('col-12'),
            TextField::new('slug', 'Identifiant (préfixe URL)')
                ->setHelp('Valeur utilisée dans les liens : <code>?service=…</code> (ex. <code>dine</code>, <code>stay</code>). Minuscules, sans espaces. Doit être unique.')
                ->setColumns(6),
            TextField::new('email', "E-mail de contact")->setColumns(6),
            FormField::addPanel('Active')->setIcon('fa fa-lock')->addCssClass('col-12'),
            BooleanField::new('active', 'Activé'),
            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex()
        ];
    }
}
