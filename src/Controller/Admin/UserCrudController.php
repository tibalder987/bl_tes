<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Service\MailService;
use App\Service\RandomService;
use App\Utilities\GlobalConstants;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use App\Entity\Group;
use App\Repository\GroupRepository;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\SearchDto;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FilterCollection;
use Doctrine\ORM\QueryBuilder;
use Exception;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class UserCrudController extends AbstractCrudController
{
    public function __construct(
        private readonly UserPasswordHasherInterface $passwordEncoder,
        private readonly RandomService $randomService,
        private readonly MailService $mailService,
        private readonly EntityManagerInterface $em
    ) {}

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular("Utilisateur")
            ->setPageTitle(Crud::PAGE_INDEX, "Listing des utilisateurs")
            ->setFormThemes(
                [
                    '@EasyAdmin/crud/form_theme.html.twig',
                ]
            );
    }

    public function createIndexQueryBuilder(SearchDto $searchDto, EntityDto $entityDto, FieldCollection $fields, FilterCollection $filters): QueryBuilder
    {
        $response = parent::createIndexQueryBuilder($searchDto, $entityDto, $fields, $filters);
        $response->andWhere('entity.roles LIKE :role');
        $response->setParameter('role', "%ROLE_USER%");

        return $response;
    }


    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::BATCH_DELETE);
    }

    public function configureFields(string $pageName): iterable
    {
        $A_roles = [
            'Rôle technicien' => 'ROLE_TECHNICIEN',
            'Rôle utilisateur' => 'ROLE_USER',
        ];

        return [
            FormField::addPanel('Informations')->setIcon('fa fa-id-card')->addCssClass('col-6'),
            TextField::new('firstname', "Prénom")->setColumns(4),
            TextField::new('lastname', "Nom")->setColumns(4),
            EmailField::new('email')->setRequired(true)->setColumns(4),

            FormField::addPanel('Configuration accès')->setIcon('fa fa-user-tag')->addCssClass('col-6'),
            ChoiceField::new('roles', "Rôles")->setRequired(true)->allowMultipleChoices(true)->setChoices($A_roles)->setColumns(12),
            AssociationField::new('groups', 'Groupes')
                ->setFormTypeOptions([
                    'query_builder' => function (GroupRepository $repository) {
                        return $repository->createQueryBuilder('g')
                            ->orderBy('g.label', 'ASC');
                    },
                ])
                ->formatValue(function ($value, $entity) {
                    $labels = [];
                    foreach ($entity->getGroups() as $group) {
                        $labels[] = $group->getLabel();
                    }
                    return implode(', ', $labels);
                })
                ->setRequired(false)
                ->setHelp('Sélectionnez un ou plusieurs groupes pour cet utilisateur')
                ->setColumns(12),
            BooleanField::new('active', 'Utilisateur autorisé à se connecter'),

            DateTimeField::new('lastLogin', 'Dernière connexion')->onlyOnIndex(),
            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex(),
        ];
    }

    /**
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     * @throws RuntimeError
     * @throws LoaderError
     * @throws Exception
     */
    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $dateExpireToken = new DateTime();
        $dateExpireToken->modify("+" . GlobalConstants::LIFETIME_TOKEN_INIT_PASSWORD_IN_HOURS . " hours");

        $entityInstance->setPlainPassword($this->randomService->randomCode(20));
        $entityInstance->setPassword($this->passwordEncoder->hashPassword($entityInstance, $entityInstance->getPlainPassword()));
        $entityInstance->setTokenInitPassword($this->randomService->randomCode(45, 'alphanumeric'));
        $entityInstance->setTokenPasswordExpiredAt($dateExpireToken);
        $this->mailService->sendMailInitPassword($entityInstance);
        parent::persistEntity($entityManager, $entityInstance);
    }
}
