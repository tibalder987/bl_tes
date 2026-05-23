<?php

declare(strict_types=1);

namespace App\EventSubscriber;

use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\RouterInterface;

/**
 * Première visite (par session) : aligne la locale de l’URL sur Accept-Language (fr/en),
 * puis mémorise pour ne plus rediriger automatiquement.
 */
final class BrowserLocaleRedirectSubscriber implements EventSubscriberInterface
{
    public const SESSION_KEY = 'locale_auto_redirect_done';

    /** @var list<string> */
    private const SUPPORTED = ['fr', 'en'];

    public function __construct(
        private readonly RouterInterface $router,
        #[Autowire('%locale%')]
        private readonly string $defaultLocale,
    ) {}

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => ['onKernelRequest', 4],
        ];
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        return;
        if (!$event->isMainRequest()) {
            return;
        }

        $request = $event->getRequest();

        if (!$request->isMethodSafe()) {
            return;
        }

        $route = $request->attributes->get('_route');
        if (!\is_string($route) || str_starts_with($route, '_')) {
            return;
        }

        if (str_starts_with($route, 'admin') || str_starts_with($route, 'api_')) {
            return;
        }

        if (!$request->attributes->has('_locale')) {
            return;
        }

        $session = $request->getSession();
        if ($session->get(self::SESSION_KEY)) {
            return;
        }

        $preferred = $request->getPreferredLanguage(self::SUPPORTED);
        if ($preferred === null || !\in_array($preferred, self::SUPPORTED, true)) {
            $preferred = $this->defaultLocale;
        }

        $session->set(self::SESSION_KEY, true);

        if ($preferred === $request->getLocale()) {
            return;
        }

        $routeParams = $request->attributes->get('_route_params');
        if (!\is_array($routeParams)) {
            $routeParams = [];
        }

        $routeParams['_locale'] = $preferred;

        $url = $this->router->generate($route, $routeParams);
        $qs = $request->getQueryString();
        if ($qs !== null && $qs !== '') {
            $url .= '?' . $qs;
        }

        $event->setResponse(new RedirectResponse($url, RedirectResponse::HTTP_FOUND));
    }
}
