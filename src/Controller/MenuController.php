<?php

namespace App\Controller;

use App\Entity\Configuration;
use App\Entity\Menu;
use App\Entity\Page;
use App\Repository\PageRepository;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

class MenuController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly UploaderHelper $uploaderHelper,
        private readonly RequestStack $requestStack,
    ) {}

    #[Route(path: '/__menu/{homepage}', name: 'app_menu', defaults: ['homepage' => false])]
    public function index(?bool $homepage): Response
    {
        $menus = $this->em->getRepository(Menu::class)->findBy(['parent' => null, 'active' => true], ['position' => 'ASC']);

        /***********************************************************************************************************
         * LOGO PATH
         ***********************************************************************************************************/
        $configurationID = GlobalConstants::CONFIGURATION_ID;
        /** @var Configuration $configuration */
        $configuration = $this->em->getRepository(Configuration::class)->find($configurationID);

        $logo = null;

        if ($configuration->getLogoPageName()) {
            $logo = $this->uploaderHelper->asset($configuration, 'logoPage');
        }
        if ($homepage && $configuration->getLogoName()) {
            $logo = $this->uploaderHelper->asset($configuration, 'logo');
        }

        $main = $this->requestStack->getMainRequest() ?? $this->requestStack->getParentRequest();
        $currentLocale = $main?->getLocale() ?? 'fr';
        $targetLocale = $currentLocale === 'fr' ? 'en' : 'fr';
        $localeSwitchUrl = $this->generateUrl('app_home_page', ['_locale' => $targetLocale]);

        $fragmentRequest = $this->requestStack->getCurrentRequest();

        if ($main !== null) {
            $qs = $main->getQueryString();
            $querySuffix = ($qs !== null && $qs !== '') ? '?' . $qs : '';

            $fromBuilder = $this->tryLocaleSwitchUrlForBuilderPage($main, $targetLocale, $fragmentRequest);
            if ($fromBuilder !== null) {
                $localeSwitchUrl = $fromBuilder . $querySuffix;
            } else {
                $route = $main->attributes->get('_route');
                $routeParams = $main->attributes->get('_route_params');
                if (!\is_array($routeParams)) {
                    $routeParams = [];
                }
                if ($route === 'app_content_page' && !isset($routeParams['slug']) && $main->attributes->has('slug')) {
                    $routeParams['slug'] = (string) $main->attributes->get('slug');
                }
                if (
                    \is_string($route)
                    && !str_starts_with($route, '_')
                    && $route !== 'app_menu' && $route !== 'app_footer'
                    && !str_starts_with($route, 'admin') && !str_starts_with($route, 'api_')
                ) {
                    try {
                        $params = array_merge($routeParams, ['_locale' => $targetLocale]);
                        $localeSwitchUrl = $this->generateUrl($route, $params) . $querySuffix;
                    } catch (\Throwable) {
                    }
                }
            }
        }

        return $this->render('menu/menu.html.twig', [
            'menus' => $menus,
            'logo' => $logo,
            'locale_switch_url' => $localeSwitchUrl,
            'locale_switch_target' => $targetLocale,
        ]);
    }

    /**
     * Bascule FR/EN pour les pages builder : slug traduit via la base.
     * Priorité aux query `page_slug` / `page_route` (passées depuis base.html.twig pour le render fragment).
     */
    private function tryLocaleSwitchUrlForBuilderPage(Request $main, string $targetLocale, ?Request $fragmentRequest): ?string
    {
        $slug = null;
        if ($fragmentRequest !== null) {
            $pageRoute = $fragmentRequest->query->get('page_route');
            $pageSlug = $fragmentRequest->query->get('page_slug');
            $routeOk = $pageRoute === null || $pageRoute === '' || $pageRoute === 'app_content_page';
            if ($routeOk && \is_string($pageSlug) && $pageSlug !== '') {
                $slug = $pageSlug;
            }
        }

        if ($slug === null) {
            $pathInfo = $main->getPathInfo();
            if (preg_match('#^/[a-z]{2}/p/([^/]+)/?$#i', $pathInfo, $m)) {
                $slug = rawurldecode($m[1]);
            } elseif (preg_match('#^/p/([^/]+)/?$#i', $pathInfo, $m)) {
                $slug = rawurldecode($m[1]);
            } elseif ((string) $main->attributes->get('_route') === 'app_content_page') {
                $attrSlug = $main->attributes->get('slug');
                if (\is_string($attrSlug) && $attrSlug !== '') {
                    $slug = $attrSlug;
                }
            }
        }

        if ($slug === null || $slug === '') {
            return null;
        }

        /** @var PageRepository $repo */
        $repo = $this->em->getRepository(Page::class);
        $page = $repo->findOneByAnyTranslationPath($slug);
        if (!$page instanceof Page) {
            return null;
        }

        $targetPath = $repo->getTranslationPathForLocale($page, $targetLocale);
        if (!\is_string($targetPath) || $targetPath === '') {
            try {
                return $this->generateUrl('app_home_page', ['_locale' => $targetLocale]);
            } catch (\Throwable) {
                return '/' . $targetLocale . '/';
            }
        }

        try {
            return $this->generateUrl('app_content_page', [
                '_locale' => $targetLocale,
                'slug' => $targetPath,
            ]);
        } catch (\Throwable) {
            return '/' . $targetLocale . '/p/' . rawurlencode($targetPath);
        }
    }
}
