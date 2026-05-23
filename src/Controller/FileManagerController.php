<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class FileManagerController extends AbstractController
{
    public function __construct(
        private readonly CsrfTokenManagerInterface $csrfTokenManager
    ) {}

    /**
     * File manager for regular users (with locale prefix)
     * The locale prefix is automatically added by config/routes.yaml
     */
    #[Route('/fichiers', name: 'file_manager_user_')]
    #[IsGranted('ROLE_USER')]
    public function user(): Response
    {
        // Generate CSRF token for API requests
        $csrfToken = $this->csrfTokenManager->getToken('file_manager_api')->getValue();

        return $this->render('file_manager/user.html.twig', [
            'csrf_token' => $csrfToken,
        ]);
    }

    /**
     * File manager for admins (EasyAdmin integration)
     * Route accessible via EasyAdmin menu
     * The locale prefix is automatically added by config/routes.yaml
     */
    #[Route('/admin/files', name: 'file_manager_index')]
    #[IsGranted('ROLE_ADMIN')]
    public function index(): Response
    {
        // Generate CSRF token for API requests
        $csrfToken = $this->csrfTokenManager->getToken('file_manager_api')->getValue();

        return $this->render('file_manager/index.html.twig', [
            'csrf_token' => $csrfToken,
        ]);
    }
    
    /**
     * File selector for builder integration (standalone widget)
     * Simplified interface for image selection only
     */
    #[Route('/admin/file-selector', name: 'file_selector')]
    #[IsGranted('ROLE_ADMIN')]
    public function selector(): Response
    {
        // Generate CSRF token for API requests
        $csrfToken = $this->csrfTokenManager->getToken('file_manager_api')->getValue();

        return $this->render('file_manager/selector.html.twig', [
            'csrf_token' => $csrfToken,
        ]);
    }
}
