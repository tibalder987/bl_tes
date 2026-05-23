<?php

namespace App\Controller;

use App\Entity\Form;
use App\Entity\FormSubmission;
use App\Service\FormGeneratorService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class FormController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly FormGeneratorService $formGeneratorService,
        private readonly MailerInterface $mailer
    ) {}

    public function renderForm(int $formId): Response
    {
        $formEntity = $this->em->getRepository(Form::class)->find($formId);

        if (!$formEntity instanceof Form) {
            return new Response('<div class="alert alert-warning">Formulaire introuvable.</div>');
        }

        $actionUrl = $this->generateUrl('app_form_submit', ['id' => $formId]);
        $form = $this->formGeneratorService->createDynamicForm($formEntity, $actionUrl);

        return $this->render('form/render.html.twig', [
            'form' => $form->createView(),
            'formEntity' => $formEntity,
        ]);
    }

    #[Route('/form/submit/{id}', name: 'app_form_submit', methods: ['POST'])]
    public function submitForm(Request $request, int $id): Response
    {
        $formEntity = $this->em->getRepository(Form::class)->find($id);
        if (!$formEntity) {
            throw $this->createNotFoundException('Formulaire non trouvé');
        }

        $form = $this->formGeneratorService->createDynamicForm($formEntity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $submission = new FormSubmission();
            $submission->setForm($formEntity);
            $submission->setData($data);

            $this->em->persist($submission);
            $this->em->flush();

            $config = $formEntity->getConfiguration();
            $successMessage = $config['successMessage'] ?? 'Votre message a bien été envoyé.';

            // Handle Email Notifications
            if (isset($config['sendEmail']) && $config['sendEmail']) {
                $recipient = $config['emailRecipient'] ?? null;
                $subject = $config['emailSubject'] ?? 'Nouvelle soumission de formulaire : ' . $formEntity->getName();

                if ($recipient) {
                    $emailContent = "<h1>Nouvelle soumission : " . $formEntity->getName() . "</h1>";
                    $emailContent .= "<ul>";
                    foreach ($data as $key => $value) {
                        // Find label from schema if possible, else use key
                        $label = $key;
                        foreach ($formEntity->getSchemaData()['steps'] ?? [] as $step) {
                            foreach ($step['fields'] ?? [] as $field) {
                                if ($field['id'] === $key) {
                                    $label = $field['label'] ?? $key;
                                    break 2;
                                }
                            }
                        }

                        $displayValue = is_array($value) ? implode(', ', $value) : $value;
                        $emailContent .= "<li><strong>{$label} :</strong> " . nl2br(htmlspecialchars((string)$displayValue)) . "</li>";
                    }
                    $emailContent .= "</ul>";

                    try {
                        $email = (new Email())
                            ->from('noreply@' . $request->getHost())
                            ->to($recipient)
                            ->subject($subject)
                            ->html($emailContent);

                        $this->mailer->send($email);
                    } catch (\Exception $e) {
                        // Log error or ignore
                        // $this->addFlash('error', 'Le formulaire a été enregistré, mais l\'email n\'a pas pu être envoyé.');
                    }
                }
            }

            $this->addFlash('success', $successMessage);

            $referer = $request->headers->get('referer');
            if ($referer) {
                return $this->redirect($referer);
            }
            return $this->redirectToRoute('app_home_page'); // Fallback
        }

        $this->addFlash('error', 'Il y a eu une erreur lors de l\'envoi de votre message. Veuillez vérifier les champs.');

        $referer = $request->headers->get('referer');
        if ($referer) {
            return $this->redirect($referer);
        }
        return $this->redirectToRoute('app_home_page');
    }
}
