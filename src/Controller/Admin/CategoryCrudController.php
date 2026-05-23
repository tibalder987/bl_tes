<?php
namespace App\Controller\Admin;

use App\Entity\Category;
use App\Field\Admin\TranslationField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\SlugType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class CategoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Catégorie')
            ->setPageTitle('index', 'Listing des catégories')
            ->setPageTitle('new', "Création d'une catégorie")
            ->setPageTitle('edit', "Modification d'une catégorie")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                ]
            )
            ->setSearchFields(['translations.title'])
        ;
    }

    public function configureActions(Actions $actions): Actions{
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter une catégorie");
            })
            ->update(Crud::PAGE_INDEX, Action::DELETE, static function (Action $action) {
                return $action->displayIf(static function ($entity) {
                    return ($entity->getArticles()->isEmpty());
                });
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
            ],
            'path' => [
                'field_type' => SlugType::class,
                'target' => 'title',
                'required' => true,
                'label' => 'URL de la catégorie',
                'row_attr' => ['class' => 'mt-2 text-start'],
                'attr' => [
                    'readonly' => true,
                ]
            ],
        ];


        return [
            TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true),

            TranslationField::new('title', 'Libellé de la catégorie')->onlyOnIndex(),
            BooleanField::new('active', 'Activée'),
            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex()
        ];
    }
}
