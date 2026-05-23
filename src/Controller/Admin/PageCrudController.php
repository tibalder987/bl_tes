<?php

namespace App\Controller\Admin;

use App\Entity\Page;
use App\Entity\PageTranslation;
use App\Entity\User;
use App\Field\Admin\AdditionalTranslationField;
use App\Field\Admin\InitialTranslationsField;
use App\Form\Admin\BuilderType;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\SlugType;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;

class PageCrudController extends AbstractCrudController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly TokenStorageInterface $tokenStorageInterface,
        private readonly AdminUrlGenerator $adminUrlGenerator,
        private readonly RequestStack $requestStack
    ) {}

    /**
     * @return string
     */
    public static function getEntityFqcn(): string
    {
        return Page::class;
    }


    public function configureCrud(Crud $crud): Crud
    {
        $pageSingular = "Page de contenu";
        $newTitle = "Ajout d'une page de contenu";
        $editTitle = "Modification d'une page de contenu";
        $listTitle = "Listing des pages de contenu";

        $crud
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

    public function createEntity(string $entityFqcn): object
    {
        $page = new Page();

        /***************************************************************************************************************
         * Clone Action ?
         ***************************************************************************************************************/
        if ($this->requestStack->getCurrentRequest()->query->has('clone')) {
            $pageClone = $this->em->getRepository(Page::class)->find($this->requestStack->getCurrentRequest()->query->get('clone'));
            if ($pageClone instanceof Page) {
                $page->setActive($pageClone->isActive());
                $page->setMetaTitle($pageClone->getMetaTitle());
                $page->setMetaDescription($pageClone->getMetaDescription());

                foreach ($pageClone->getTranslations() as $translation) {
                    $pageTranslation = new PageTranslation();
                    $pageTranslation->setLocale($translation->getLocale());
                    $pageTranslation->setTitle($translation->getTitle());
                    $pageTranslation->setDescription($translation->getDescription());
                    $pageTranslation->setElements($translation->getElements());
                    $page->addTranslation($pageTranslation);
                }
            }
        }

        if ($this->tokenStorageInterface->getToken() && $this->tokenStorageInterface->getToken()->getUser()) {
            /** @var User $author */
            $author =  $this->tokenStorageInterface->getToken()->getUser();
            $page->setAuthor($author);
        }

        return $page;
    }

    public function configureActions(Actions $actions): Actions
    {

        $linkPage = Action::new('linkPage', 'Voir le rendu')
            ->linkToUrl(function (Page $entity) {
                return $_ENV['ABSOLUTE_URL'] . '/fr/p/' . $entity->getPath();
            })
            ->setHtmlAttributes(['target' => '_Blank']);

        $cloneAction = Action::new('cloneAction', "Cloner")
            ->linkToUrl(
                function (Page $entity) {
                    return $this->adminUrlGenerator->setController($this->requestStack->getCurrentRequest()->query->get('crudControllerFqcn'))->setAction(Action::NEW)->set('clone', $entity->getId())->generateUrl();
                }
            );

        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter une page")->linkToUrl(
                    $this->adminUrlGenerator->setController(PageCrudController::class)->setAction(Action::NEW)
                        ->set('menuIndex', $this->requestStack->getCurrentRequest()->query->get('menuIndex'))
                        ->set('submenuIndex', $this->requestStack->getCurrentRequest()->query->get('submenuIndex'))
                        ->generateUrl()
                );
            })
            ->add(Crud::PAGE_INDEX, $linkPage)
            ->add(Crud::PAGE_INDEX, $cloneAction)
            ->reorder(Crud::PAGE_INDEX, ['linkPage', Action::EDIT, Action::DELETE, 'cloneAction'])
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        $fieldsconfig = [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => 'Libellé de la page',
                'row_attr' => ['class' => 'mt-2 text-start'],
            ],
            'path' => [
                'field_type' => SlugType::class,
                'target' => 'title',
                'required' => true,
                'label' => 'URL de la page',
                'row_attr' => ['class' => 'mt-2 text-start'],
                'attr' => [
                    'readonly' => true,
                ]
            ],
            'description' => [
                'field_type' => CKEditorType::class,
                'required' => false,
                'label' => 'Description de la page',
                'row_attr' => ['class' => 'mb-4 text-start']
            ],
            'elements' => [
                'field_type' => BuilderType::class,
                'required' => false,
                'label' => 'Builder',
                'row_attr' => ['class' => 'mt-3 text-start']
            ],
            'metaTitle' => [
                'label' => 'Meta title',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaDescription' => [
                'label' => 'Meta description',
                'field_type' => TextType::class,
                'required' => false,
            ],
        ];

        return [
            FormField::addTab('Informations')->setIcon('fa fa-address-book')->addCssClass('col-12'),
            FormField::addPanel('Informations & Builder')->setIcon('fa fa-pencil-ruler')->addCssClass('col-12'),
            InitialTranslationsField::new('translations', '', $fieldsconfig, [], ['title', 'path', 'description', 'elements'])->hideOnIndex()->setRequired(true)->setLabel(false),
            TextField::new('title', 'Libellé de la page')->onlyOnIndex(),
            TextField::new('author', 'Auteur')->onlyOnIndex(),

            FormField::addPanel('Active')->setIcon('fa fa-toggle')->addCssClass('col-12'),
            BooleanField::new('active', 'Page accessible'),
            DateTimeField::new('updatedAt', 'Dernière mise à jour')->setFormat(DateTimeField::FORMAT_SHORT, DateTimeField::FORMAT_SHORT)->onlyOnIndex(),

            FormField::addTab('SEO')->setIcon('fa fa-magnifying-glass')->addCssClass('col-12'),
            FormField::addPanel("SEO")->setIcon('fa fa-magnifying-glass')->addCssClass('col-12'),
            AdditionalTranslationField::new('translationsSeo', '', ['metaTitle', 'metaDescription'])->setLabel(false),
            Field::new('metaImage', 'MetaImage')->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', true),
        ];
    }

    /**
     * @param EntityManagerInterface $entityManager
     * @param $entityInstance
     */
    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($this->tokenStorageInterface->getToken()) {
            /** @var User $userAuthor */
            $userAuthor = $this->tokenStorageInterface->getToken()->getUser();
            $entityInstance->setAuthor($userAuthor);
        }
        parent::persistEntity($entityManager, $entityInstance);
    }
}
