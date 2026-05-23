<?php

declare(strict_types=1);

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Propose un code pays ISO 3166-1 alpha-2 pour pré-remplir le formulaire newsletter.
 * Ordre : CF-IPCountry (Cloudflare), chaîne explicite fr-PF / en-PF, sinon **PF**.
 * (On n’utilise pas la région générique type fr-FR : sinon « France » remplace la Polynésie par défaut.)
 */
final class NewsletterCountrySuggestion
{
    public function __construct(
        private readonly RequestStack $requestStack,
    ) {}

    public function suggestAlpha2Code(): string
    {
        $request = $this->requestStack->getCurrentRequest();

        return $request instanceof Request ? $this->suggestFromRequest($request) : 'PF';
    }

    public function suggestFromRequest(Request $request): string
    {
        $cf = $request->headers->get('CF-IPCountry');
        if (is_string($cf) && 2 === \strlen($cf) && ctype_alpha($cf)) {
            return strtoupper($cf);
        }

        $accept = $request->headers->get('Accept-Language') ?? '';

        // Chaîne explicite Polynésie (fr-PF, en-PF…)
        if (preg_match('/\b[a-z]{2}-PF\b/i', $accept)) {
            return 'PF';
        }

        return 'PF';
    }
}
