<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\File;
use App\Entity\FilePermission;
use App\Entity\Folder;
use App\Entity\Group;
use App\Entity\User;
use App\Repository\FilePermissionRepository;
use App\Repository\GroupRepository;
use App\Repository\UserRepository;
use App\Service\LogService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Attribute\RequireCsrfToken;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/files/{id<\d+>}/permissions', name: 'api_files_permissions_')]
#[IsGranted('ROLE_USER')]
#[RequireCsrfToken] // Protection CSRF automatique pour toutes les méthodes POST/PUT/DELETE/PATCH
class FilePermissionApiController extends AbstractController
{
    public function __construct(
        private readonly FilePermissionRepository $permissionRepository,
        private readonly UserRepository $userRepository,
        private readonly GroupRepository $groupRepository,
        private readonly EntityManagerInterface $em,
        private readonly LogService $logService
    ) {}

    /**
     * Get permissions for a file or folder
     */
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        $type = $request->query->get('type', 'file');

        if ($type === 'folder') {
            $resource = $this->em->getRepository(Folder::class)->find($id);
        } else {
            $resource = $this->em->getRepository(File::class)->find($id);
        }

        if (!$resource) {
            return $this->json(['error' => 'Resource not found'], Response::HTTP_NOT_FOUND);
        }

        // Only owner or admin can view permissions
        if ($resource->getOwner()->getId() !== $user->getId() && !in_array('ROLE_ADMIN', $user->getRoles(), true)) {
            return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
        }

        $permissions = $resource instanceof File
            ? $this->permissionRepository->findByFile($resource)
            : $this->permissionRepository->findByFolder($resource);

        return $this->json([
            'permissions' => array_map(fn($p) => $this->serializePermission($p), $permissions),
        ]);
    }

    /**
     * Add a permission
     */
    #[Route('', name: 'create', methods: ['POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function create(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);

        $type = $data['type'] ?? 'file';
        $userId = $data['userId'] ?? null;
        $role = $data['role'] ?? null;
        $groupId = $data['groupId'] ?? null;

        if (!$userId && !$role && !$groupId) {
            return $this->json(['error' => 'Either userId, role or groupId must be provided'], Response::HTTP_BAD_REQUEST);
        }

        if ($type === 'folder') {
            $resource = $this->em->getRepository(Folder::class)->find($id);
        } else {
            $resource = $this->em->getRepository(File::class)->find($id);
        }

        if (!$resource) {
            return $this->json(['error' => 'Resource not found'], Response::HTTP_NOT_FOUND);
        }

        // Only owner or admin can add permissions
        if ($resource->getOwner()->getId() !== $user->getId() && !in_array('ROLE_ADMIN', $user->getRoles(), true)) {
            return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
        }

        // Check if permission already exists
        $existingPermission = null;
        if ($userId) {
            $targetUser = $this->userRepository->find($userId);
            if (!$targetUser) {
                return $this->json(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
            }
            $existingPermission = $this->permissionRepository->findUserPermission($targetUser, $resource);
        } elseif ($role) {
            $existingPermission = $this->permissionRepository->findRolePermission($role, $resource);
        } elseif ($groupId) {
            $targetGroup = $this->groupRepository->find($groupId);
            if (!$targetGroup) {
                return $this->json(['error' => 'Group not found'], Response::HTTP_NOT_FOUND);
            }
            $existingPermission = $this->permissionRepository->findGroupPermission($targetGroup, $resource);
        }

        if ($existingPermission) {
            // Permission already exists, return it
            return $this->json([
                'success' => true,
                'permission' => $this->serializePermission($existingPermission),
            ]);
        }

        // Create new permission
        $permission = new FilePermission();
        // Permission field is optional now - having a permission record means read + download access
        $permission->setGrantedBy($user);

        if ($resource instanceof File) {
            $permission->setFile($resource);
        } else {
            $permission->setFolder($resource);
        }

        if ($userId) {
            $targetUser = $this->userRepository->find($userId);
            if (!$targetUser) {
                return $this->json(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
            }
            $permission->setUser($targetUser);
        } elseif ($role) {
            $permission->setRole($role);
        } elseif ($groupId) {
            $targetGroup = $this->groupRepository->find($groupId);
            if (!$targetGroup) {
                return $this->json(['error' => 'Group not found'], Response::HTTP_NOT_FOUND);
            }
            $permission->setGroup($targetGroup);
        }

        $this->em->persist($permission);
        $this->em->flush();

        // Log l'ajout de permission
        $resourceType = $resource instanceof File ? 'Fichier' : 'Dossier';
        $permissionTarget = '';
        if ($permission->getUser()) {
            $permissionTarget = sprintf('utilisateur "%s"', $permission->getUser()->getFullName());
        } elseif ($permission->getRole()) {
            $permissionTarget = sprintf('rôle "%s"', $permission->getRole());
        } elseif ($permission->getGroup()) {
            $permissionTarget = sprintf('groupe "%s"', $permission->getGroup()->getLabel());
        }

        $this->logService->write(
            'File Manager',
            'Permission',
            sprintf('%s "%s" : permission ajoutée pour %s', $resourceType, $resource->getName(), $permissionTarget),
            $user
        );

        return $this->json([
            'success' => true,
            'permission' => $this->serializePermission($permission),
        ], Response::HTTP_CREATED);
    }

    /**
     * Update a permission
     */
    #[Route('/{permissionId<\d+>}', name: 'update', methods: ['PUT'])]
    #[IsGranted('ROLE_ADMIN')]
    public function update(int $id, int $permissionId, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $permission = $this->permissionRepository->find($permissionId);
        if (!$permission) {
            return $this->json(['error' => 'Permission not found'], Response::HTTP_NOT_FOUND);
        }

        $resource = $permission->getFile() ?? $permission->getFolder();
        if (!$resource || $resource->getId() !== $id) {
            return $this->json(['error' => 'Permission does not belong to this resource'], Response::HTTP_BAD_REQUEST);
        }

        // Only owner or admin can update permissions
        if ($resource->getOwner()->getId() !== $user->getId() && !in_array('ROLE_ADMIN', $user->getRoles(), true)) {
            return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
        }

        // No update needed, permission is just a flag now
        $this->em->flush();

        return $this->json([
            'success' => true,
            'permission' => $this->serializePermission($permission),
        ]);
    }

    /**
     * Delete a permission
     */
    #[Route('/{permissionId<\d+>}', name: 'delete', methods: ['DELETE'])]
    #[IsGranted('ROLE_ADMIN')]
    public function delete(int $id, int $permissionId, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $permission = $this->permissionRepository->find($permissionId);
        if (!$permission) {
            return $this->json(['error' => 'Permission not found'], Response::HTTP_NOT_FOUND);
        }

        $resource = $permission->getFile() ?? $permission->getFolder();
        if (!$resource || $resource->getId() !== $id) {
            return $this->json(['error' => 'Permission does not belong to this resource'], Response::HTTP_BAD_REQUEST);
        }

        // Only owner or admin can delete permissions
        if ($resource->getOwner()->getId() !== $user->getId() && !in_array('ROLE_ADMIN', $user->getRoles(), true)) {
            return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
        }

        // Log avant suppression
        $resourceType = $resource instanceof File ? 'Fichier' : 'Dossier';
        $permissionTarget = '';
        if ($permission->getUser()) {
            $permissionTarget = sprintf('utilisateur "%s"', $permission->getUser()->getFullName());
        } elseif ($permission->getRole()) {
            $permissionTarget = sprintf('rôle "%s"', $permission->getRole());
        } elseif ($permission->getGroup()) {
            $permissionTarget = sprintf('groupe "%s"', $permission->getGroup()->getLabel());
        }

        $this->em->remove($permission);
        $this->em->flush();

        $this->logService->write(
            'File Manager',
            'Permission',
            sprintf('%s "%s" : permission supprimée pour %s', $resourceType, $resource->getName(), $permissionTarget),
            $user
        );

        return $this->json(['success' => true]);
    }

    /**
     * Serialize permission for JSON response
     */
    private function serializePermission(FilePermission $permission): array
    {
        $data = [
            'id' => $permission->getId(),
            'grantedBy' => [
                'id' => $permission->getGrantedBy()->getId(),
                'name' => $permission->getGrantedBy()->getFullName(),
            ],
        ];

        if ($permission->getUser()) {
            $data['user'] = [
                'id' => $permission->getUser()->getId(),
                'name' => $permission->getUser()->getFullName(),
                'email' => $permission->getUser()->getEmail(),
            ];
        }

        if ($permission->getRole()) {
            $data['role'] = $permission->getRole();
        }

        if ($permission->getGroup()) {
            $data['group'] = [
                'id' => $permission->getGroup()->getId(),
                'label' => $permission->getGroup()->getLabel(),
            ];
        }

        return $data;
    }
}
