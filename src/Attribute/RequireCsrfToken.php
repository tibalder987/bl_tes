<?php

declare(strict_types=1);

namespace App\Attribute;

use Attribute;

/**
 * Attribut pour indiquer qu'un contrôleur nécessite la validation du token CSRF
 * pour les méthodes POST, PUT, DELETE, PATCH
 */
#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_METHOD)]
class RequireCsrfToken
{
    public function __construct(
        public readonly string $tokenId = 'file_manager_api'
    ) {}
}
