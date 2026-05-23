<?php

namespace App\Controller;

use App\Entity\Survey;
use App\Entity\SurveyAccess;
use App\Entity\SurveyParticipation;
use App\Entity\SurveyParticipationDetail;
use App\Entity\SurveyQuestionAnswer;
use App\Form\SurveyAccessType;
use App\Form\SurveyType;
use App\Service\RandomService;
use App\Utilities\GlobalConstants;
use Cocur\Slugify\Slugify;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Contracts\Translation\TranslatorInterface;

class SurveyController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $em, private readonly RandomService $randomService, private readonly TranslatorInterface $translator) {
    }

    /**
     * @throws \Exception
     */
    #[Route('/survey/access', name: 'app_survey_access')]
    #[IsGranted('ROLE_TECHNICIEN')]
    public function index(Request $request): Response
    {
        $form = $this->createForm(SurveyAccessType::class);

        $form->handleRequest($request);
        $surveyAccess = null;
        if ($form->isSubmitted() && $form->isValid()) {
            $survey = $form->getData()['survey'];

            if($survey instanceof Survey && $survey->isActive()) {
                if($survey->isPublic()) {
                    $slugify = new Slugify();

                    /***************************************************************************************************
                     * Slug alreay generated ?
                     **************************************************************************************************/
                    $surveyAccess = $survey->getSurveyAccesses()->first();
                    if(!$surveyAccess) {
                        $surveyAccess = new SurveyAccess();
                        $surveyAccess->setSurvey($survey);
                        $surveyAccess->setLink($survey->getId()."-".$slugify->slugify($survey->translate("fr")->getTitle()));
                        $this->em->persist($surveyAccess);
                        $this->em->flush();
                    }
                } else {
                    $surveyAccess = new SurveyAccess();
                    $surveyAccess->setSurvey($survey);
                    $surveyAccess->setLink($this->randomService->uniqueRandomCode(50, SurveyAccess::class, 'link', 'alphanumeric'));
                    $this->em->persist($surveyAccess);
                    $this->em->flush();
                }
            }
        }

        return $this->render('survey/index.html.twig', [
            'form' => $form->createView(),
            'surveyAccess' => $surveyAccess,
        ]);
    }


    #[Route('/forms/success', name: 'app_survey_success')]
    public function success(): Response
    {
        return $this->render('survey/success.html.twig');
    }

    #[Route('/forms/{link}', name: 'app_survey')]
    public function survey(string $link, Request $request): Response
    {
        $surveyAccess = $this->em->getRepository(SurveyAccess::class)->findOneBy(['link' => $link]);

        /***************************************************************************************************************
         * Link Valid ?
         **************************************************************************************************************/
        if(!$surveyAccess instanceof SurveyAccess) {
            $this->addFlash('danger', $this->translator->trans('notFound',[], 'survey'));
        }

        /***************************************************************************************************************
         * Survey access ?
         **************************************************************************************************************/
        if($surveyAccess instanceof SurveyAccess && !$surveyAccess->getSurvey()->isPublic() && !$surveyAccess->getSurveyParticipations()->isEmpty()) {
            $this->addFlash('danger', $this->translator->trans('answered',[], 'survey'));
            $surveyAccess = null;
        }

        /***************************************************************************************************************
         * POST ?
         **************************************************************************************************************/
        $form = $this->createForm(SurveyType::class, $surveyAccess);

        $form->handleRequest($request);
        if ($surveyAccess instanceof SurveyAccess && $form->isSubmitted() && $form->isValid()) {
            $datas = $form->all();

            $participation = new SurveyParticipation();
            $participation->setSurveyAccess($surveyAccess);

            foreach ($surveyAccess->getSurvey()->getSurveyQuestions() as $question) {

                $participationDetail = new SurveyParticipationDetail();
                $participationDetail->setSurveyQuestion($question);
                if($question->getType() === GlobalConstants::SURVEY_QUESTION_TYPE_ETOILE) {

                    /***************************************************************************************************
                     * Little Hack - IF value === 0 => Error Submission
                     **************************************************************************************************/
                    if($datas["question-".$question->getId()]->getData() === 0) {
                        $this->addFlash('danger', $this->translator->trans('errorEmpty',[], 'survey')." ".$question->getTitle());
                        return $this->render('survey/survey.html.twig', [
                            'surveyAccess' => $surveyAccess,
                            'form' => $form->createView(),
                        ]);
                    }

                    $participationDetail->setValueInt((int)$datas["question-".$question->getId()]->getData()    );
                } elseif($question->getType() === GlobalConstants::SURVEY_QUESTION_TYPE_TEXT) {

                    /***************************************************************************************************
                     * Little Hack - IF value empty => Error Submission
                     **************************************************************************************************/
                    if(empty($datas["question-".$question->getId()]->getData())) {
                        $this->addFlash('danger', $this->translator->trans('errorEmpty',[], 'survey')." ".$question->getTitle());
                        return $this->render('survey/survey.html.twig', [
                            'surveyAccess' => $surveyAccess,
                            'form' => $form->createView(),
                        ]);
                    }

                    $participationDetail->setValueTxt((string)strip_tags($datas["question-".$question->getId()]->getData()));
                } elseif($question->getType() === GlobalConstants::SURVEY_QUESTION_TYPE_RADIO) {

                    /***************************************************************************************************
                     * Little Hack - IF not checked => Error Submission
                     **************************************************************************************************/
                    if(!$datas["question-".$question->getId()]->getData()) {
                        $this->addFlash('danger', $this->translator->trans('errorEmpty',[], 'survey')." ".$question->getTitle());
                        return $this->render('survey/survey.html.twig', [
                            'surveyAccess' => $surveyAccess,
                            'form' => $form->createView(),
                        ]);
                    }
                    /** @var SurveyQuestionAnswer $surveyQuestionAnswer */
                    $surveyQuestionAnswer = $this->em->getRepository(SurveyQuestionAnswer::class)->find((int)$datas["question-".$question->getId()]->getData());
                    $participationDetail->setSurveyQuestionAnswer($surveyQuestionAnswer);
                }
                $participation->addSurveyParticipationDetail($participationDetail);
            }

            $this->em->persist($participation);
            $this->em->flush();

            return $this->redirectToRoute('app_survey_success');
        }


        return $this->render('survey/survey.html.twig', [
            'form' => $form->createView(),
            'surveyAccess' => $surveyAccess,
        ]);
    }
}
