<?php

namespace App\Controller\Admin;

use App\Entity\Form;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;

class FormCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Form::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Formulaire')
            ->setEntityLabelInPlural('Formulaires')
            ->setDefaultSort(['createdAt' => 'DESC'])
            // Custom form template to inject our Vue builder
            ->overrideTemplate('crud/new', 'admin/form_builder.html.twig')
            ->overrideTemplate('crud/edit', 'admin/form_builder.html.twig');
    }

    public function configureActions(Actions $actions): Actions
    {
        $viewSubmissions = Action::new('viewSubmissions', 'Voir les soumissions', 'fa fa-list')
            ->linkToCrudAction('viewSubmissions');

        return $actions
            ->add(Crud::PAGE_INDEX, $viewSubmissions)
            ->add(Crud::PAGE_EDIT, $viewSubmissions);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield TextField::new('name', 'Nom du formulaire');

        // schemaData and configuration are intentionally omitted from configureFields.
        // They are completely handled by the Vue App and custom entity hooks to bypass Symfony Form Type constraints.
        yield DateTimeField::new('createdAt', 'Créé le')->hideOnForm();
        yield DateTimeField::new('updatedAt', 'Mis à jour le')->hideOnForm();
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $this->handleVueData($entityInstance);
        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $this->handleVueData($entityInstance);
        parent::updateEntity($entityManager, $entityInstance);
    }

    private function handleVueData(Form $form): void
    {
        $request = $this->getContext()->getRequest();
        $schemaData = $request->request->get('schemaData');
        if ($schemaData) {
            $form->setSchemaData(json_decode($schemaData, true));
        }

        $configuration = $request->request->get('configuration');
        if ($configuration) {
            $form->setConfiguration(json_decode($configuration, true));
        }
    }

    public function viewSubmissions(AdminContext $context, AdminUrlGenerator $adminUrlGenerator)
    {
        $form = $context->getEntity()->getInstance();
        $url = $adminUrlGenerator
            ->setController(FormSubmissionCrudController::class)
            ->setAction(Action::INDEX)
            // Use the form name as a default search query so only submissions for this form appear
            ->set('query', $form->getName())
            ->generateUrl();

        return $this->redirect($url);
    }
}
