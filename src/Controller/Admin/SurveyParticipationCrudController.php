<?php
namespace App\Controller\Admin;

use App\Controller\Admin\Filter\SurveyFilter;
use App\Entity\Survey;
use App\Entity\SurveyParticipation;
use App\Utilities\GlobalConstants;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FilterFactory;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\EntityFilter;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Goodby\CSV\Export\Standard\Exporter;
use Goodby\CSV\Export\Standard\ExporterConfig;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class SurveyParticipationCrudController extends AbstractCrudController
{
    public function __construct(private readonly AdminUrlGenerator $adminUrlGenerator, private readonly RequestStack $requestStack, private readonly EntityManagerInterface $em)
    {
    }

    public static function getEntityFqcn(): string
    {
        return SurveyParticipation::class;
    }



    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Participation')
            ->setPageTitle('index', 'Listing des participations')
            ->overrideTemplate('crud/index', 'admin/survey_participation/index.html.twig')
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                ]
            );
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(SurveyFilter::new('survey', "Enquête de satisfaction / Sondage")->setFormTypeOption('mapped', false))
        ;
    }

    public function configureActions(Actions $actions): Actions{

        $exportAction = Action::new('export')
            ->linkToUrl(function() {
                /** @var Request $request */
                $request = $this->requestStack->getCurrentRequest();

                return $this->adminUrlGenerator->setAll($request->query->all())
                    ->setAction('export')
                    ->generateUrl();
            })
            ->addCssClass('btn btn-success')
            ->setLabel("Exporter les participations")
            ->setIcon('fa fa-download')
            ->createAsGlobalAction()
        ;

        return $actions
            ->remove(Crud::PAGE_INDEX, Action::BATCH_DELETE)
            ->disable(Action::NEW)
            ->disable(Action::EDIT)
            ->disable(Action::DELETE)
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->add(Crud::PAGE_INDEX, $exportAction)
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            DateTimeField::new('createdAt', 'Date de la participation')->onlyOnIndex(),
                TextField::new('surveyAccess.survey.title', "Enquête / Sondage"),
                CollectionField::new('surveyParticipationDetails', "Résultats")->onlyOnDetail()->setTemplatePath('admin/survey_participation/detail.html.twig')
        ];
    }

    public function export(AdminContext $context)
    {
        $survey = null;
        if($context->getRequest()->get('filters') && array_key_exists('survey',$context->getRequest()->get('filters') )) {
            $survey = $this->em->getRepository(Survey::class)->find((int)$context->getRequest()->get('filters')['survey']['value']);
        }

        if(!$survey instanceof Survey) {
            $this->addFlash("warning", "Vous devez filter une enquête de satisfaction avant de procéder à l'export des participations !");

            $url = $this->adminUrlGenerator
                ->setController(SurveyParticipationCrudController::class)
                ->setAction(Action::INDEX)
                ->generateUrl();
            return $this->redirect($url);
        }


        $fields = FieldCollection::new($this->configureFields(Crud::PAGE_INDEX));
        $filters = $this->container->get(FilterFactory::class)->create($context->getCrud()->getFiltersConfig(), $fields, $context->getEntity());
        $queryBuilder = $this->createIndexQueryBuilder($context->getSearch(), $context->getEntity(), $fields, $filters);

        $result = $queryBuilder->getQuery()->getArrayResult();
        $headers = ["Date de la participation"];

        foreach ($survey->getSurveyQuestions() as $question) {
            if($question->isActive()) {
                $headers[] = utf8_decode($question->getTitle());
            }
        }

        $data = [];
        foreach ($result as $index => $row) {
            /** @var SurveyParticipation $surveyParticipation */
            $surveyParticipation = $this->em->getRepository(SurveyParticipation::class)->find($row['id']);
            $data[$index][0] = $surveyParticipation->getCreatedAt()->format('d/m/Y H:i');

            $i = 1;
            foreach ($survey->getSurveyQuestions() as $question) {

                if($question->isActive()) {

                    $surveyParticipationDetail = $surveyParticipation->getSurveyParticipationDetails()->filter(
                        function($entry) use ($question) {
                            return  $entry->getSurveyQuestion() === $question;
                        }
                    )->first();

                    if($question->getType() === GlobalConstants::SURVEY_QUESTION_TYPE_ETOILE) {
                        $data[$index][$i] = $surveyParticipationDetail->getValueInt();
                    } elseif($question->getType() === GlobalConstants::SURVEY_QUESTION_TYPE_TEXT) {
                        $data[$index][$i] = utf8_decode(strip_tags($surveyParticipationDetail->getValueTxt()));
                    } elseif($question->getType() === GlobalConstants::SURVEY_QUESTION_TYPE_RADIO) {
                        $data[$index][$i] = utf8_decode($surveyParticipationDetail->getSurveyQuestionAnswer()->getTitle());
                    } else {
                        $data[$index][$i] = "";
                    }

                    $i++;
                }
            }
        }
        array_unshift($data, $headers);

        $response = new StreamedResponse(function () use ($data) {
            $config = new ExporterConfig();
            $exporter = new Exporter($config);
            $exporter->export('php://output', $data);
        });
        $date = new DateTime();
        $dispositionHeader = $response->headers->makeDisposition(HeaderUtils::DISPOSITION_ATTACHMENT, $date->format('Ymd_His')."_participations.csv");
        $response->headers->set('Content-Disposition', $dispositionHeader);
        $response->headers->set('Content-Type', 'text/csv; charset=utf-8');
        return $response;
    }
}
