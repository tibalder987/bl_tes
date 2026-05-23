<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\Group;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;

class GroupCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Group::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Groupe')
            ->setEntityLabelInPlural('Groupes')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des groupes')
            ->setPageTitle(Crud::PAGE_NEW, 'Créer un groupe')
            ->setPageTitle(Crud::PAGE_EDIT, 'Modifier un groupe')
            ->setPageTitle(Crud::PAGE_DETAIL, 'Détails du groupe');
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::BATCH_DELETE);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            FormField::addPanel('Informations du groupe')->setIcon('fa fa-users')->addCssClass('col-12'),
            TextField::new('label', 'Label')
                ->setRequired(true)
                ->setColumns(12)
                ->setHelp('Nom du groupe (ex: Développeurs, Marketing, etc.)'),

            AssociationField::new('users', 'Utilisateurs')
                ->onlyOnDetail()
                ->formatValue(function ($value, $entity) {
                    if ($entity->getUsers()->isEmpty()) {
                        return 'Aucun utilisateur';
                    }
                    return implode(', ', $entity->getUsers()->map(fn($user) => $user->getFullName())->toArray());
                }),

            DateTimeField::new('createdAt', 'Date de création')->onlyOnIndex(),
            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex(),
        ];
    }
}
