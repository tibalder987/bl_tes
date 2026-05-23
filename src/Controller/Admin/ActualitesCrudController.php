<?php

namespace App\Controller\Admin;

use App\Entity\Article;
use App\Entity\ArticleTranslation;
use App\Entity\User;
use App\Field\Admin\TranslationField;
use App\Form\Admin\BuilderType;
use App\Repository\CategoryRepository;
use App\Utilities\GlobalConstants;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FilterCollection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\SearchDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\EntityFilter;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\SlugType;
use EasyCorp\Bundle\EasyAdminBundle\Orm\EntityRepository;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ActualitesCrudController extends AbstractCrudController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly TokenStorageInterface $tokenStorageInterface,
        private readonly AdminUrlGenerator $adminUrlGenerator,
        private readonly RequestStack $requestStack
    ) {}

    public static function getEntityFqcn(): string
    {
        return Article::class;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(EntityFilter::new('categories'));
    }

    public function configureCrud(Crud $crud): Crud
    {
        $crud
            ->setEntityLabelInSingular('Actualité')
            ->setPageTitle(Crud::PAGE_INDEX, 'Listing des actualités')
            ->setPageTitle(Crud::PAGE_NEW, "Création d'une actualité")
            ->setPageTitle(Crud::PAGE_EDIT, "Modification d'une actualité")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                    'admin/builder_type.html.twig',
                    '@FOSCKEditor/Form/ckeditor_widget.html.twig'
                ]
            )
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['translations.title'])
        ;

        return $crud;
    }


    public function configureActions(Actions $actions): Actions
    {

        $linkPage = Action::new('linkPage', 'Voir le rendu')
            ->linkToUrl(function (Article $entity) {
                return $_ENV['ABSOLUTE_URL'] . '/fr/actualites/' . $entity->getPath();
            })
            ->setHtmlAttributes(['target' => '_Blank']);

        $cloneAction = Action::new('cloneAction', "Cloner")
            ->linkToUrl(
                function (Article $entity) {
                    return $this->adminUrlGenerator->setController($this->requestStack->getCurrentRequest()->query->get('crudControllerFqcn'))->setAction(Action::NEW)->set('clone', $entity->getId())->generateUrl();
                }
            );

        $revisionsAction = Action::new('revisions', 'Historique', 'fa fa-history')
            ->linkToUrl(function (Article $entity) {
                return $this->adminUrlGenerator
                    ->setRoute('admin_builder_revisions', [
                        'entityClass' => ArticleTranslation::class,
                        'entityId' => $entity->getTranslations()->first() ? $entity->getTranslations()->first()->getId() : null,
                        'crudControllerFqcn' => ActualitesCrudController::class
                    ])
                    ->generateUrl();
            });

        $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter une actualité");
            })
            ->add(Crud::PAGE_INDEX, $linkPage)
            ->add(Crud::PAGE_INDEX, $cloneAction)
            ->add(Crud::PAGE_INDEX, $revisionsAction)
            ->reorder(Crud::PAGE_INDEX, ['linkPage', 'revisions', Action::EDIT, Action::DELETE, 'cloneAction'])
            ->remove(Crud::PAGE_INDEX, Action::BATCH_DELETE);;
        return $actions;
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function createIndexQueryBuilder(SearchDto $searchDto, EntityDto $entityDto, FieldCollection $fields, FilterCollection $filters): QueryBuilder
    {
        $response = $this->container->get(EntityRepository::class)->createQueryBuilder($searchDto, $entityDto, $fields, $filters);
        $response->andWhere("entity.typeArticle = :typeArticle");
        $response->setParameter("typeArticle", GlobalConstants::ARTICLE_ACTUALITE);

        return $response;
    }

    public function createEntity(string $entityFqcn): object
    {
        $article = new Article();

        /***************************************************************************************************************
         * Clone Action ?
         ***************************************************************************************************************/
        if ($this->requestStack->getCurrentRequest()->query->has('clone')) {
            $articleClone = $this->em->getRepository(Article::class)->find($this->requestStack->getCurrentRequest()->query->get('clone'));
            if ($articleClone instanceof Article) {
                $article->setDateSchedule($articleClone->getDateSchedule());
                $article->setActive($articleClone->isActive());
                $article->setAhead($articleClone->isAhead());
                foreach ($articleClone->getCategories() as $category) {
                    $article->addCategory($category);
                }
                foreach ($articleClone->getTranslations() as $translation) {
                    $articleTranslation = new ArticleTranslation();
                    $articleTranslation->setLocale($translation->getLocale());
                    $articleTranslation->setTitle($translation->getTitle());
                    $articleTranslation->setDescription($translation->getDescription());
                    $articleTranslation->setElements($translation->getElements());
                    $article->addTranslation($articleTranslation);
                }
            }
        } else {
            $article->setDateSchedule(new DateTime());
        }


        if ($this->tokenStorageInterface->getToken() && $this->tokenStorageInterface->getToken()->getUser()) {
            /** @var User $author */
            $author =  $this->tokenStorageInterface->getToken()->getUser();
            $article->setAuthor($author);
            $article->setTypeArticle(GlobalConstants::ARTICLE_ACTUALITE);
        }

        return $article;
    }

    public function configureFields(string $pageName): iterable
    {
        $fieldsconfig = [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => 'Libellé de l\'actualité',
                'row_attr' => ['class' => 'mt-4 text-start'],
            ],
            'path' => [
                'field_type' => SlugType::class,
                'target' => 'title',
                'required' => true,
                'label' => 'URL de l\'actualité',
                'row_attr' => ['class' => 'mt-2 text-start'],
            ],
            'description' => [
                'field_type' => CKEditorType::class,
                'required' => false,
                'label' => 'Description de l\'actualité',
                'row_attr' => ['class' => 'mb-4 text-start']
            ],
            'elements' => [
                'field_type' => BuilderType::class,
                'required' => false,
                'label' => 'Builder',
                'row_attr' => ['class' => 'mb-4 text-start']
            ]
        ];

        return [
            FormField::addPanel('Configuration')->setIcon('fa fa-cogs')->addCssClass('col-12'),
            AssociationField::new('categories', 'Catégories')->onlyOnForms()->setColumns(6)->setRequired(true)
                ->setFormTypeOptions(['query_builder' => function (CategoryRepository $em) {
                    return $em->createQueryBuilder('c')
                        ->join('c.translations', 'ct')
                        ->where('c.active = TRUE')
                        ->andWhere("ct.locale = 'fr'")
                        ->orderBy('ct.title', 'ASC')
                    ;
                }]),
            DateTimeField::new('dateSchedule', 'Date de mise en ligne')->onlyOnForms()->setColumns(2),

            FormField::addPanel('Image')->setIcon('fa fa-image')->addCssClass('col-12'),
            Field::new('image', 'Image vignette/couverture')->setFormType(VichImageType::class)->onlyOnForms(),

            FormField::addPanel('Informations & Builder')->setIcon('fa fa-pencil-ruler')->addCssClass('col-12'),
            TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true)->setLabel(false),
            TextField::new('title', 'Libellé de l\'actualité')->onlyOnIndex(),
            TextField::new('author', 'Auteur')->onlyOnIndex(),

            FormField::addPanel('Active')->setIcon('fa fa-lock')->addCssClass('col-12'),
            BooleanField::new('active', 'Actualité accessible')->setColumns(3),
            //                BooleanField::new('ahead', 'Actualité à la une')->setColumns(3),

            DateTimeField::new('updatedAt', 'Dernière mise à jour')->setFormat(DateTimeField::FORMAT_SHORT, DateTimeField::FORMAT_SHORT)->onlyOnIndex()
        ];
    }
}
