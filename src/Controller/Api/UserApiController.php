<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/users', name: 'api_users_')]
#[IsGranted('ROLE_ADMIN')]
class UserApiController extends AbstractController
{
    public function __construct(
        private readonly UserRepository $userRepository
    ) {}

    /**
     * Search users
     */
    #[Route('/search', name: 'search', methods: ['GET'])]
    public function search(Request $request): JsonResponse
    {
        $query = $request->query->get('q', '');
        $limit = (int) $request->query->get('limit', 10);

        if (strlen($query) < 2) {
            return $this->json(['users' => []]);
        }

        $users = $this->userRepository->search($query, $limit);

        return $this->json([
            'users' => array_map(fn($u) => [
                'id' => $u->getId(),
                'name' => $u->getFullName(),
                'email' => $u->getEmail(),
            ], $users),
        ]);
    }
}
