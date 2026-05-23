<?php

namespace App\Controller\Admin;

use App\Entity\MailLog;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class MailLogCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return MailLog::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Log Email')
            ->setEntityLabelInPlural('Historique des Emails')
            ->setDefaultSort(['createdAt' => 'DESC'])
            ->setPageTitle('index', 'Historique des Emails')
            ->setPageTitle('detail', 'Détails de l\'email envoyé');
    }

    public function configureActions(Actions $actions): Actions
    {
        $actions->disable(Action::NEW, Action::EDIT, Action::DELETE);

        // Allow looking at the detail of an email
        $actions->add(Crud::PAGE_INDEX, Action::DETAIL);

        return $actions;
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm()->hideOnDetail();
        yield DateTimeField::new('createdAt', 'Date d\'envoi')->setFormat('dd/MM/yyyy HH:mm:ss');
        yield TextField::new('sender', 'Expéditeur');
        yield TextField::new('recipient', 'Destinataire(s)');
        yield TextField::new('subject', 'Sujet');

        if (Crud::PAGE_DETAIL === $pageName) {
            yield TextareaField::new('content', 'Contenu')
                ->setTemplatePath('admin/field/mail_content.html.twig');
        }
    }
}
