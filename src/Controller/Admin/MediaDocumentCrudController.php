<?php
namespace App\Controller\Admin;

use App\Entity\Media;
use App\Field\Admin\TranslationField;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\QueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FilterCollection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\SearchDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Orm\EntityRepository;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Vich\UploaderBundle\Form\Type\VichImageType;

class MediaDocumentCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Media::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Document')
            ->setPageTitle('index', 'Listing des documents')
            ->setPageTitle(Crud::PAGE_NEW, "Création d'un document")
            ->setPageTitle(Crud::PAGE_EDIT, "Modification d'un document")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                    '@FOSCKEditor/Form/ckeditor_widget.html.twig'
                ]
            )
            ->setSearchFields(['translations.title'])
            ->setDefaultSort(['id' => 'DESC'])
        ;
    }

    public function configureActions(Actions $actions): Actions{
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter un document");
            })
        ;
    }

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function createIndexQueryBuilder(SearchDto $searchDto, EntityDto $entityDto, FieldCollection $fields, FilterCollection $filters): QueryBuilder{
        $response = $this->container->get(EntityRepository::class)->createQueryBuilder($searchDto, $entityDto, $fields, $filters);
        $response->andWhere("entity.mediaType = :mediaType");
        $response->setParameter("mediaType", GlobalConstants::MEDIA_TYPE_DOCUMENT);

        return $response;
    }

    public function createEntity(string $entityFqcn): object
    {
        $media = new Media();
        $media->setMediaType(GlobalConstants::MEDIA_TYPE_DOCUMENT);

        return $media;
    }


    public function configureFields(string $pageName): iterable
    {
        $fieldsconfig = [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => 'Libellé du document',
                'row_attr' => ['class' => 'text-start']
            ],
            'description' => [
                'field_type' => CKEditorType::class,
                'required' => false,
                'label' => 'Description du document',
                'row_attr' => ['class' => 'text-start']
            ]
        ];


        return [
            FormField::addPanel('Fichier')->setIcon('fa fa-photo-video')->addCssClass('col-6'),
                Field::new('file', 'Fichier')->setFormType(VichFileType::class)->onlyOnForms()->setFormTypeOption('allow_delete', false)->setRequired($pageName === Crud::PAGE_NEW),
            FormField::addPanel('Type du document')->setIcon('fa fa-file-pdf')->addCssClass('col-6'),
                AssociationField::new('mediaDocumentType', "Type du document")->setRequired(true)->setColumns(12)->onlyOnForms(),
                TextField::new('mediaDocumentType.title', 'Type du document')->onlyOnIndex(),
            FormField::addPanel('Informations')->setIcon('fa fa-pencil-ruler')->addCssClass('col-12'),
                TranslationField::new('translations', null, $fieldsconfig)->hideOnIndex()->setLabel(false)->setRequired(true),
                TextField::new('title', 'Libellé du document')->onlyOnIndex(),
            FormField::addPanel('Active')->setIcon('fa fa-lock')->addCssClass('col-12'),
                BooleanField::new('active', 'Média accessible'),
            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex(),
        ];
    }
}
