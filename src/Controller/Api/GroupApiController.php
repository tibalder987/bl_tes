<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Repository\GroupRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/groups', name: 'api_groups_')]
#[IsGranted('ROLE_ADMIN')]
class GroupApiController extends AbstractController
{
    public function __construct(
        private readonly GroupRepository $groupRepository
    ) {}

    /**
     * Get all available groups
     */
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $groups = $this->groupRepository->findAllOrderedByLabel();

        // Format groups as array of objects with value and label
        $formattedGroups = array_map(function ($group) {
            return [
                'value' => $group->getId(),
                'label' => $group->getLabel(),
            ];
        }, $groups);

        return $this->json([
            'groups' => $formattedGroups,
        ]);
    }
}
