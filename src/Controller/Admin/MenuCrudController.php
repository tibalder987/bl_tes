<?php
namespace App\Controller\Admin;

use App\Entity\Menu;
use App\Field\Admin\TranslationField;
use App\Repository\MenuRepository;
use App\Utilities\GlobalConstants;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class MenuCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Menu::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular("Menu")
            ->setPageTitle('index', "Listing des menus")
            ->setPageTitle('new', "Création d'un menu")
            ->setPageTitle('edit', "Modification d'un menu")
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
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter un menu");
            })
            ->remove(Crud::PAGE_INDEX, Action::BATCH_DELETE);
    }

    public function configureFields(string $pageName): iterable
    {
        $fieldsconfig = [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => "Titre",
                'row_attr' => ['class' => 'mt-2 text-start'],
            ]
        ];

        return [
            FormField::addPanel("Titre")->setIcon('fa fa-circle-info')->addCssClass('col-12'),
                AssociationField::new('parent', 'Menu parent')
                ->setFormTypeOptions(['query_builder' => function (MenuRepository $em) {
                    return $em->createQueryBuilder('m')
                        ->where('m.parent IS NULL')
                    ;
                }])->setRequired(false)->onlyOnForms()->setColumns(6),
                TextField::new('parent', "Libellé du menu parent")->onlyOnIndex(),
                IntegerField::new('position', "Position")->setColumns(6),
                TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true)->setLabel(false),
                TextField::new('title', "Libellé")->onlyOnIndex(),

            FormField::addPanel('Redirection')->setIcon('fa fa-link')->addCssClass('col-12'),
                ChoiceField::new('pageSystem', 'Page système')->setColumns(4)->onlyOnForms()->setRequired(false)->setChoices(GlobalConstants::A_SYSTEM_PAGE)->renderAsNativeWidget(),
                AssociationField::new('page', 'Ou Page de contenu')->setColumns(4)->onlyOnForms()->setRequired(false)->renderAsNativeWidget(),
                TextField::new('externalPath', "Ou redirection vers une URL")->setColumns(4)->onlyOnForms(),

            FormField::addPanel("Accessibilité")->setIcon('fa fa-lock')->addCssClass('col-12'),
                BooleanField::new('active', 'Menu actif')->setColumns(4)->addCssClass('pt-4 mt-3'),

            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex()
        ];
    }
}
