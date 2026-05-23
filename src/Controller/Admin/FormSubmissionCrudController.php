<?php

namespace App\Controller\Admin;

use App\Entity\FormSubmission;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;

class FormSubmissionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return FormSubmission::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Soumission')
            ->setEntityLabelInPlural('Soumissions')
            ->setDefaultSort(['createdAt' => 'DESC'])
            ->setSearchFields(['id', 'form.name']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW, Action::EDIT)
            ->add(Crud::PAGE_INDEX, Action::DETAIL);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield AssociationField::new('form', 'Formulaire');

        if (Crud::PAGE_DETAIL === $pageName) {
            yield ArrayField::new('data', 'Données soumises')
                ->setTemplatePath('admin/fields/submission_data.html.twig');
        }

        yield DateTimeField::new('createdAt', 'Reçu le')->setFormat('dd/MM/yyyy HH:mm');
    }
}
