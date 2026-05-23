<?php

namespace App\Controller;

use App\Entity\HomePage;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomePageController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $em) {}

    #[Route('/', name: 'app_home_page', options: ['sitemap' => ['priority' => 1]])]
    public function index(): Response
    {
        $page = $this->em->getRepository(HomePage::class)->find(GlobalConstants::HOMEPAGE_ID);
        return $this->render('home_page/index.html.twig', [
            'page' => $page
        ]);
    }
    #[Route(
        path: [
            'en' => '/flow',
            'fr' => '/vivre',
        ],
        name: 'app_flow',
        options: ['sitemap' => ['priority' => 1]],
    )]
    public function flow(): Response
    {
        return $this->render('flow/index.html.twig');
    }

    #[Route(
        path: [
            'en' => '/know',
            'fr' => '/a-savoir',
        ],
        name: 'app_know',
        options: ['sitemap' => ['priority' => 1]],
    )]
    public function know(): Response
    {
        return $this->render('know/index.html.twig');
    }

    #[Route(
        path: [
            'en' => '/stay',
            'fr' => '/sejour',
        ],
        name: 'app_stay',
        options: ['sitemap' => ['priority' => 1]],
    )]
    public function stay(): Response
    {
        return $this->render('stay/index.html.twig');
    }

    #[Route(
        path: [
            'en' => '/dine',
            'fr' => '/savourer',
        ],
        name: 'app_dine',
        options: ['sitemap' => ['priority' => 1]],
    )]
    public function dine(): Response
    {
        return $this->render('dine/index.html.twig');
    }

    #[Route(
        path: [
            'en' => '/our-story',
            'fr' => '/notre-histoire',
        ],
        name: 'app_our_story',
        options: ['sitemap' => ['priority' => 1]],
    )]
    public function ourStory(): Response
    {
        return $this->render('our_story/index.html.twig');
    }
}
