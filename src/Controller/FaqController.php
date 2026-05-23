<?php

namespace App\Controller;

use App\Entity\Faq;
use App\Entity\FaqTheme;
use App\Entity\FaqThemeTranslation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FaqController extends AbstractController
{
    /** @var EntityManagerInterface  */
    private EntityManagerInterface $em;

    /** @var RequestStack  */
    private RequestStack $requestStack;

    /**
     * @param EntityManagerInterface $em
     * @param RequestStack $requestStack
     */
    public function __construct(EntityManagerInterface $em, RequestStack $requestStack)
    {
        $this->em = $em;
        $this->requestStack = $requestStack;
    }


    #[Route('/faq', name: 'app_faq')]
    public function index(): Response
    {
        $themes = $this->em->getRepository(FaqTheme::class)->findAll();

        return $this->render('faq/themes.html.twig', [
            'themes' => $themes,
        ]);
    }


    #[Route('/faq/{slug}', name: 'app_faq_theme')]
    public function theme(string $slug): Response
    {
        $themeTranslation = $this->em->getRepository(FaqThemeTranslation::class)->findOneBy(['locale' => $this->requestStack->getCurrentRequest()->getLocale(), 'path' => $slug]);
        if(!$themeTranslation instanceof FaqThemeTranslation) {
            $themeTranslation = $this->em->getRepository(FaqThemeTranslation::class)->findOneBy(['locale' => 'fr', 'path' => $slug]);
        }

        return $this->render('faq/theme.html.twig', [
            'theme' => $themeTranslation->getTranslatable(),
        ]);
    }
}
