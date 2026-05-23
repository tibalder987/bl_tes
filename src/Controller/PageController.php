<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Configuration;
use App\Entity\Page;
use App\Entity\PageOnglet;
use App\Repository\PageRepository;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class PageController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $em, private readonly RequestStack $requestStack, private readonly AuthorizationCheckerInterface $authorizationChecker) {}

    #[Route('/maintenance', name: 'app_page_maintenance')]
    public function maintenance(): Response
    {
        $configuration = $this->em->getRepository(Configuration::class)->find(GlobalConstants::CONFIGURATION_ID);
        if ($configuration instanceof Configuration && !$configuration->isMaintenance()) {
            return $this->redirectToRoute('app_home_page', [], Response::HTTP_MOVED_PERMANENTLY);
        }
        return $this->render('page/maintenance.html.twig');
    }

    #[Route('/p/{slug}', name: 'app_content_page')]
    public function index(string $slug): Response
    {
        $request = $this->requestStack->getCurrentRequest();
        $locale = $request !== null ? $request->getLocale() : 'fr';

        /** @var PageRepository $pageRepo */
        $pageRepo = $this->em->getRepository(Page::class);
        $page = $pageRepo->searchBySlugLocale($slug, $locale);

        if (!$page instanceof Page) {
            $candidate = $pageRepo->findOneByAnyTranslationPath($slug);
            if ($candidate instanceof Page) {
                $canonicalPath = $pageRepo->getTranslationPathForLocale($candidate, $locale);
                if ($canonicalPath !== null && $canonicalPath !== $slug) {
                    return $this->redirectToRoute(
                        'app_content_page',
                        ['slug' => $canonicalPath],
                        Response::HTTP_MOVED_PERMANENTLY,
                    );
                }
                if ($canonicalPath === $slug) {
                    $page = $candidate;
                }
            }
        }

        if (!$page instanceof Page || (!$page->isActive() && !$this->authorizationChecker->isGranted('ROLE_ADMIN'))) {
            return new Response(null, 404);
        }

        return $this->render('page/index.html.twig', [
            'page' => $page,
        ]);
    }

    #[Route('/__onglet/{onglet}', name: 'app_page_onglet')]
    public function pageOnglet(PageOnglet $onglet): Response
    {
        return $this->render('page/onglet.html.twig', [
            'onglet' => $onglet,
        ]);
    }
}
