<?php
namespace App\Controller\Admin;

use App\Entity\FaqTheme;
use App\Field\Admin\TranslationField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\SlugType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class FaqThemeCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return FaqTheme::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Thème')
            ->setPageTitle('index', 'Listing des thèmes de FAQ')
            ->setPageTitle(Crud::PAGE_NEW, "Création d'un thème")
            ->setPageTitle(Crud::PAGE_EDIT, "Modification d'un thème")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                ]
            )
            ->setSearchFields(['translations.title']);
    }

    public function configureActions(Actions $actions): Actions{
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter un thème");
            })
            ->update(Crud::PAGE_INDEX, Action::DELETE, static function (Action $action) {
                return $action->displayIf(static function ($entity) {
                    return $entity->getFaqs()->isEmpty();
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
                'label' => 'Libellé du thème',
                'row_attr' => ['class' => 'mt-4 text-start'],
            ],
            'path' => [
                'field_type' => SlugType::class,
                'target' => 'title',
                'required' => true,
                'label' => 'URL du thème',
                'row_attr' => ['class' => 'mt-2 text-start'],
                'attr' => [
                    'readonly' => true,
                ]
            ],
        ];

        return [
            TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true)->setLabel(false),
                TextField::new('title', 'Libellé du thème')->onlyOnIndex(),
                DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex()
        ];
    }
}
