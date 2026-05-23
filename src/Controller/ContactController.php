<?php

declare(strict_types=1);

namespace App\Controller;

use App\Form\ContactType;
use App\Repository\ServiceContactRepository;
use App\Service\MailService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class ContactController extends AbstractController
{
    public function __construct(
        private readonly MailService $mailService,
        private readonly TranslatorInterface $translator,
        private readonly ServiceContactRepository $serviceContactRepository,
    ) {}

    #[Route('/contact', name: 'app_contact', options: ['sitemap' => ['priority' => 0.5]])]
    public function index(Request $request): Response
    {
        $initialData = [];
        $serviceParam = $request->query->get('service');
        if (is_string($serviceParam) && $serviceParam !== '') {
            $prefilled = $this->serviceContactRepository->findOneActiveBySlug($serviceParam);
            if ($prefilled !== null) {
                $initialData['service'] = $prefilled;
            }
        }

        $form = $this->createForm(ContactType::class, $initialData === [] ? null : $initialData);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $contact = $form->getData();
            $this->mailService->sendMailContact($contact);
            $this->addFlash('success', $this->translator->trans('contact.form.success', [], 'contact'));
        }

        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
