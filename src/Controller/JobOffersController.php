<?php

namespace App\Controller;

use App\Entity\JobOffer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JobOffersController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $em)
    {
    }

    #[Route('/offres-emploi', name: 'app_job_offers', options: ['sitemap' => ['priority' => 0.9]])]
    public function index(): Response
    {
        $offers = $this->em->getRepository(JobOffer::class)->findBy(['active' => true], ['createdAt' =>'DESC']);

        return $this->render('offers/index.html.twig', [
            'offers' => $offers,
        ]);
    }

    #[Route('/offres-emploi/{offer}', name: 'app_job_offer')]
    public function detail(JobOffer $offer): Response
    {
        if(!$offer->isActive()) {
            return $this->redirectToRoute('app_home_page', [], Response::HTTP_MOVED_PERMANENTLY);
        }

        return $this->render('offers/detail.html.twig', [
            'offer' => $offer,
        ]);
    }
}
