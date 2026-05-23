<?php
namespace App\Controller\Admin;

use App\Entity\Faq;
use App\Field\Admin\TranslationField;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Config\KeyValueStore;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\EntityFilter;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\NotBlank;

class FaqCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Faq::class;
    }

    public function configureActions(Actions $actions): Actions{
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter une question");
            });
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Question')
            ->setPageTitle('index', 'Listing des questions')
            ->setPageTitle(Crud::PAGE_NEW, "Création d'une question")
            ->setPageTitle(Crud::PAGE_EDIT, "Modification d'une question")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                    '@FOSCKEditor/Form/ckeditor_widget.html.twig'
                ]
            )
            ->setSearchFields(['translations.question']);
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(EntityFilter::new('theme', "Thème"))
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        $fieldsconfig = [
            'question' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => 'Question',
                'row_attr' => ['class' => 'mt-4 text-start'],
            ],
            'answer' => [
                'field_type' => CKEditorType::class,
                'required' => true,
                'label' => 'Réponse',
                'row_attr' => ['class' => 'mb-4 text-start'],
            ]
        ];

        return [
            FormField::addPanel('Thème')->setIcon('fa fa-tags')->addCssClass('col-12'),
                AssociationField::new('theme', 'Thème')->setRequired(true)->onlyOnForms()->setColumns(12),
                TextField::new('theme', 'Thème')->onlyOnIndex(),
            FormField::addPanel('Question/Réponse')->setIcon('fa fa-question')->addCssClass('col-12'),
                TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true),
                TextField::new('question', 'Question')->onlyOnIndex(),
            FormField::addPanel('Active')->setIcon('fa fa-toggle')->addCssClass('col-12'),
                BooleanField::new('ahead', 'Question mise en avant')->setColumns(4),
                BooleanField::new('active', 'Active')->setColumns(4),
        ];
    }
}
