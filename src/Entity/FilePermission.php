<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\FilePermissionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FilePermissionRepository::class)]
#[ORM\Table(name: 'file_manager_permission')]
#[ORM\UniqueConstraint(name: 'unique_file_permission', columns: ['file_id', 'user_id', 'role', 'group_id'])]
#[ORM\UniqueConstraint(name: 'unique_folder_permission', columns: ['folder_id', 'user_id', 'role', 'group_id'])]
#[ORM\Index(columns: ['file_id'], name: 'idx_permission_file')]
#[ORM\Index(columns: ['folder_id'], name: 'idx_permission_folder')]
#[ORM\Index(columns: ['user_id'], name: 'idx_permission_user')]
#[ORM\Index(columns: ['group_id'], name: 'idx_permission_group')]
class FilePermission
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: File::class, inversedBy: 'permissions')]
    #[ORM\JoinColumn(name: 'file_id', referencedColumnName: 'id', nullable: true, onDelete: 'CASCADE')]
    private ?File $file = null;

    #[ORM\ManyToOne(targetEntity: Folder::class, inversedBy: 'permissions')]
    #[ORM\JoinColumn(name: 'folder_id', referencedColumnName: 'id', nullable: true, onDelete: 'CASCADE')]
    private ?Folder $folder = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id', nullable: true, onDelete: 'CASCADE')]
    private ?User $user = null;

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    private ?string $role = null;

    #[ORM\ManyToOne(targetEntity: Group::class)]
    #[ORM\JoinColumn(name: 'group_id', referencedColumnName: 'id', nullable: true, onDelete: 'CASCADE')]
    private ?Group $group = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'granted_by_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private User $grantedBy;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFile(): ?File
    {
        return $this->file;
    }

    public function setFile(?File $file): self
    {
        $this->file = $file;
        // Ensure folder is null if file is set
        if ($file !== null) {
            $this->folder = null;
        }
        return $this;
    }

    public function getFolder(): ?Folder
    {
        return $this->folder;
    }

    public function setFolder(?Folder $folder): self
    {
        $this->folder = $folder;
        // Ensure file is null if folder is set
        if ($folder !== null) {
            $this->file = null;
        }
        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;
        // Ensure role and group are null if user is set
        if ($user !== null) {
            $this->role = null;
            $this->group = null;
        }
        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(?string $role): self
    {
        $this->role = $role;
        // Ensure user and group are null if role is set
        if ($role !== null) {
            $this->user = null;
            $this->group = null;
        }
        return $this;
    }

    public function getGroup(): ?Group
    {
        return $this->group;
    }

    public function setGroup(?Group $group): self
    {
        $this->group = $group;
        // Ensure user and role are null if group is set
        if ($group !== null) {
            $this->user = null;
            $this->role = null;
        }
        return $this;
    }

    public function getGrantedBy(): User
    {
        return $this->grantedBy;
    }

    public function setGrantedBy(User $grantedBy): self
    {
        $this->grantedBy = $grantedBy;
        return $this;
    }

    /**
     * Check if this permission applies to a specific resource
     */
    public function appliesTo($resource): bool
    {
        if ($resource instanceof File) {
            return $this->file !== null && $this->file->getId() === $resource->getId();
        }
        if ($resource instanceof Folder) {
            return $this->folder !== null && $this->folder->getId() === $resource->getId();
        }
        return false;
    }

    /**
     * Check if this permission applies to a user, role or group
     */
    public function appliesToUserOrRole(User $user, ?string $role = null, ?Group $group = null): bool
    {
        if ($this->user !== null) {
            return $this->user->getId() === $user->getId();
        }
        if ($this->role !== null && $role !== null) {
            return $this->role === $role;
        }
        if ($this->group !== null && $group !== null) {
            return $this->group->getId() === $group->getId();
        }
        return false;
    }
}
