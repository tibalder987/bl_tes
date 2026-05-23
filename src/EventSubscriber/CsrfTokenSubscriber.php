<?php

declare(strict_types=1);

namespace App\EventSubscriber;

use App\Attribute\RequireCsrfToken;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class CsrfTokenSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly CsrfTokenManagerInterface $csrfTokenManager
    ) {}

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::CONTROLLER => 'onKernelController',
        ];
    }

    public function onKernelController(ControllerEvent $event): void
    {
        $request = $event->getRequest();

        // Only check CSRF token for API routes that modify data (POST, PUT, DELETE, PATCH)
        if (!in_array($request->getMethod(), ['POST', 'PUT', 'DELETE', 'PATCH'])) {
            return;
        }

        // Check if the controller has the RequireCsrfToken attribute
        $controller = $event->getController();

        // Handle controller as array [ControllerInstance, 'methodName']
        if (is_array($controller)) {
            $controllerObject = $controller[0];
            $methodName = $controller[1];
        } else {
            return; // Not a standard controller, skip
        }

        // Check for attribute on the controller class
        $reflectionClass = new \ReflectionClass($controllerObject);
        $classAttributes = $reflectionClass->getAttributes(RequireCsrfToken::class);

        // Check for attribute on the controller method
        $reflectionMethod = $reflectionClass->getMethod($methodName);
        $methodAttributes = $reflectionMethod->getAttributes(RequireCsrfToken::class);

        // If neither class nor method has the attribute, skip CSRF validation
        if (empty($classAttributes) && empty($methodAttributes)) {
            return;
        }

        // Get the token ID from the attribute (method takes precedence over class)
        $tokenId = 'file_manager_api'; // default
        if (!empty($methodAttributes)) {
            $attribute = $methodAttributes[0]->newInstance();
            $tokenId = $attribute->tokenId;
        } elseif (!empty($classAttributes)) {
            $attribute = $classAttributes[0]->newInstance();
            $tokenId = $attribute->tokenId;
        }

        // Validate CSRF token
        $token = $request->headers->get('X-CSRF-Token');
        if (!$token) {
            $event->setController(function () {
                return new JsonResponse(
                    ['error' => 'Token CSRF manquant'],
                    Response::HTTP_FORBIDDEN
                );
            });
            return;
        }

        $csrfToken = new CsrfToken($tokenId, $token);
        if (!$this->csrfTokenManager->isTokenValid($csrfToken)) {
            $event->setController(function () {
                return new JsonResponse(
                    ['error' => 'Token CSRF invalide'],
                    Response::HTTP_FORBIDDEN
                );
            });
        }
    }
}
