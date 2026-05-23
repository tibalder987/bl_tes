<?php

declare(strict_types=1);

namespace App\Twig;

use App\Service\NewsletterCountrySuggestion;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Twig\TwigTest;

class AppExtension extends AbstractExtension
{
    public function __construct(
        private readonly NewsletterCountrySuggestion $newsletterCountrySuggestion,
    ) {}

    public function getTests(): array
    {
        return [
            new TwigTest('instanceof', [$this, 'isInstanceOf']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('newsletter_suggested_country', [$this->newsletterCountrySuggestion, 'suggestAlpha2Code']),
        ];
    }

    public function isInstanceOf($var, $instance): bool
    {
        return $var instanceof $instance;
    }
}
