<?php
namespace App\Controller\Admin;

use App\Entity\Survey;
use App\Entity\SurveyQuestion;
use App\Field\Admin\TranslationField;
use App\Form\Admin\SurveyQuestionType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class SurveyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Survey::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Enquête')
            ->setPageTitle('index', 'Listing des enquêtes / sondages')
            ->setPageTitle(Crud::PAGE_NEW, "Création d'une enquête")
            ->setPageTitle(Crud::PAGE_EDIT, "Modification d'une enquête")
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
                return $action->setIcon('fa fa-plus me-2')->setLabel("Ajouter une enquête");
            })
//            ->update(Crud::PAGE_INDEX, Action::DELETE, static function (Action $action) {
//                return $action->displayIf(static function ($entity) {
//                    return $entity->getFaqs()->isEmpty();
//                });
//            })
            ->remove(Crud::PAGE_INDEX, Action::BATCH_DELETE)
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        $fieldsconfig = [
            'intro' => [
                'field_type' => TextType::class,
                'required' => false,
                'label' => "Introduction de l'enquête",
                'row_attr' => ['class' => 'mt-2 text-start'],
            ],
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
                'label' => "Libellé de l'enquête",
                'row_attr' => ['class' => 'mt-2 text-start'],
            ],
        ];

        return [
            FormField::addPanel("Dénomination de l'enquête")->setIcon('fa fa-info-circle')->addCssClass('col-12'),
                TranslationField::new('translations', '', $fieldsconfig)->hideOnIndex()->setRequired(true)->setLabel(false),
                TextField::new('title', "Libellé de l'enquête")->onlyOnIndex(),

            FormField::addPanel("Listing des questions")->setIcon('fa fa-circle-question')->addCssClass('col-12'),
                CollectionField::new('surveyQuestions')->setLabel(false)->setEntryType(SurveyQuestionType::class)->setColumns(12)->onlyOnForms()->addCssClass('container-survey-questions'),

            FormField::addPanel('Active')->setIcon('fa fa-toggle-on')->addCssClass('col-12'),
                BooleanField::new('public', "Enquête publique")->setColumns(3),
                BooleanField::new('active', 'Enquête active')->setColumns(3),

            DateTimeField::new('updatedAt', 'Dernière modification')->onlyOnIndex(),
        ];
    }
}
