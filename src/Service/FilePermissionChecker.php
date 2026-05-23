<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\File;
use App\Entity\FilePermission;
use App\Entity\Folder;
use App\Entity\User;
use App\Repository\FilePermissionRepository;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;

class FilePermissionChecker
{
    public function __construct(
        private readonly FilePermissionRepository $permissionRepository,
        private readonly EntityManagerInterface $em
    ) {}

    /**
     * Check if user can view a resource
     * Logic: 
     * - Admin has access to everything
     * - Owner has access to everything
     * - If no permission exists, only admin has access
     * - If permission exists for user/role, user has read + download access
     */
    public function canView(User $user, File|Folder $resource): bool
    {
        // 1. Admin has all permissions
        if ($this->isAdmin($user)) {
            return true;
        }

        // 2. Owner has all permissions
        if ($this->isOwner($user, $resource)) {
            return true;
        }

        // 3. Check if user has any permission (user-specific or role-based)
        if ($this->hasPermission($user, $resource)) {
            return true;
        }

        // 4. Check if permission inheritance is enabled and the resource has a parent folder
        if (GlobalConstants::FILE_MANAGER_AUTO_PERMISSION_INHERITANCE && $resource->getParentFolder() !== null) {
            return $this->canView($user, $resource->getParentFolder());
        }

        // 5. No permission = only admin has access (already checked above)
        return false;
    }

    /**
     * Check if user can download a file
     * Same logic as canView: if user has permission, they can download
     */
    public function canDownload(User $user, File $file): bool
    {
        return $this->canView($user, $file);
    }

    /**
     * Check if user can edit (rename, move) a resource
     * Logic:
     * - Admin can edit everything
     * - Owner can edit their own resources
     * - Other users cannot edit (even with permissions)
     */
    public function canEdit(User $user, File|Folder $resource): bool
    {
        // Admin has all permissions
        if ($this->isAdmin($user)) {
            return true;
        }

        // Owner can edit their own resources
        return $this->isOwner($user, $resource);
    }

    /**
     * Check if user can delete a resource
     * Logic:
     * - Admin can delete everything
     * - Owner can delete their own resources
     * - Other users cannot delete (even with permissions)
     */
    public function canDelete(User $user, File|Folder $resource): bool
    {
        // Admin has all permissions
        if ($this->isAdmin($user)) {
            return true;
        }

        // Owner can delete their own resources
        return $this->isOwner($user, $resource);
    }

    /**
     * Check if user has any permission on a resource
     */
    private function hasPermission(User $user, File|Folder $resource): bool
    {
        // Check user-specific permissions
        $userPermission = $this->permissionRepository->findUserPermission($user, $resource);
        if ($userPermission !== null) {
            return true;
        }

        // Check role-based permissions
        foreach ($user->getRoles() as $role) {
            $rolePermission = $this->permissionRepository->findRolePermission($role, $resource);
            if ($rolePermission !== null) {
                return true;
            }
        }

        // Check group-based permissions
        foreach ($user->getGroups() as $group) {
            $groupPermission = $this->permissionRepository->findGroupPermission($group, $resource);
            if ($groupPermission !== null) {
                return true;
            }
        }

        return false;
    }

    /**
     * Filter resources user can access
     */
    public function filterAccessible(User $user, array $resources): array
    {
        return array_filter($resources, function ($resource) use ($user) {
            return $this->canView($user, $resource);
        });
    }

    /**
     * Check if user is admin
     */
    private function isAdmin(User $user): bool
    {
        return in_array('ROLE_ADMIN', $user->getRoles(), true);
    }

    /**
     * Check if user is owner
     */
    public function isOwner(User $user, File|Folder $resource): bool
    {
        return $resource->getOwner()->getId() === $user->getId();
    }
}
