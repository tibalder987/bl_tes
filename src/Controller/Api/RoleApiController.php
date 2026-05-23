<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/roles', name: 'api_roles_')]
#[IsGranted('ROLE_ADMIN')]
class RoleApiController extends AbstractController
{
    public function __construct(
        private readonly UserRepository $userRepository
    ) {}

    /**
     * Get all available roles
     */
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(): JsonResponse
    {
        // Get all unique roles from users in the database
        $roles = $this->userRepository->findAllUniqueRoles();

        // Format roles as array of objects with value and label
        $formattedRoles = array_map(function ($role) {
            return [
                'value' => $role,
                'label' => $this->formatRoleLabel($role),
            ];
        }, $roles);

        return $this->json([
            'roles' => $formattedRoles,
        ]);
    }

    /**
     * Format role name for display
     */
    private function formatRoleLabel(string $role): string
    {
        // Remove ROLE_ prefix and format
        $label = str_replace('ROLE_', '', $role);
        // Convert to readable format (e.g., ROLE_TECHNICIEN -> Technicien)
        return ucfirst(strtolower($label));
    }
}
