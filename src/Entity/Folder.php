<?php
declare(strict_types=1);

namespace App\Entity;

use App\Repository\FolderRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: FolderRepository::class)]
#[ORM\Table(name: 'file_manager_folder')]
#[ORM\Index(columns: ['parent_folder_id'], name: 'idx_folder_parent')]
#[ORM\Index(columns: ['owner_id'], name: 'idx_folder_owner')]
#[ORM\Index(columns: ['is_trashed'], name: 'idx_folder_trashed')]
class Folder implements TimestampableInterface
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank]
    private string $name;

    #[ORM\Column(type: 'string', length: 255, unique: true)]
    private string $slug;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'children')]
    #[ORM\JoinColumn(name: 'parent_folder_id', referencedColumnName: 'id', nullable: true, onDelete: 'CASCADE')]
    private ?Folder $parentFolder = null;

    #[ORM\OneToMany(targetEntity: self::class, mappedBy: 'parentFolder')]
    private Collection $children;

    #[ORM\OneToMany(targetEntity: File::class, mappedBy: 'parentFolder')]
    private Collection $files;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'owner_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private User $owner;

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private bool $isTrashed = false;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?DateTimeImmutable $deletedAt = null;

    #[ORM\OneToMany(targetEntity: FilePermission::class, mappedBy: 'folder', cascade: ['remove'])]
    private Collection $permissions;

    public function __construct()
    {
        $this->children = new ArrayCollection();
        $this->files = new ArrayCollection();
        $this->permissions = new ArrayCollection();
    }

    /**
     * @return Collection<int, FilePermission>
     */
    public function getPermissions(): Collection
    {
        return $this->permissions;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;
        return $this;
    }

    public function getParentFolder(): ?self
    {
        return $this->parentFolder;
    }

    public function setParentFolder(?self $parentFolder): self
    {
        $this->parentFolder = $parentFolder;
        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getChildren(): Collection
    {
        return $this->children;
    }

    public function addChild(self $child): self
    {
        if (!$this->children->contains($child)) {
            $this->children->add($child);
            $child->setParentFolder($this);
        }
        return $this;
    }

    public function removeChild(self $child): self
    {
        if ($this->children->removeElement($child)) {
            if ($child->getParentFolder() === $this) {
                $child->setParentFolder(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, File>
     */
    public function getFiles(): Collection
    {
        return $this->files;
    }

    public function addFile(File $file): self
    {
        if (!$this->files->contains($file)) {
            $this->files->add($file);
            $file->setParentFolder($this);
        }
        return $this;
    }

    public function removeFile(File $file): self
    {
        if ($this->files->removeElement($file)) {
            if ($file->getParentFolder() === $this) {
                $file->setParentFolder(null);
            }
        }
        return $this;
    }

    public function getOwner(): User
    {
        return $this->owner;
    }

    public function setOwner(User $owner): self
    {
        $this->owner = $owner;
        return $this;
    }

    public function isTrashed(): bool
    {
        return $this->isTrashed;
    }

    public function setIsTrashed(bool $isTrashed): self
    {
        $this->isTrashed = $isTrashed;
        if ($isTrashed && $this->deletedAt === null) {
            $this->deletedAt = new DateTimeImmutable();
        } elseif (!$isTrashed) {
            $this->deletedAt = null;
        }
        return $this;
    }

    public function getDeletedAt(): ?DateTimeImmutable
    {
        return $this->deletedAt;
    }

    public function setDeletedAt(?DateTimeImmutable $deletedAt): self
    {
        $this->deletedAt = $deletedAt;
        return $this;
    }

    /**
     * Get the full path of the folder (breadcrumb)
     */
    public function getFullPath(): array
    {
        $path = [];
        $folder = $this;
        
        while ($folder !== null) {
            array_unshift($path, $folder);
            $folder = $folder->getParentFolder();
        }
        
        return $path;
    }

    /**
     * Check if folder is empty (no files and no subfolders)
     */
    public function isEmpty(): bool
    {
        return $this->files->isEmpty() && $this->children->isEmpty();
    }

    public function __toString(): string
    {
        return $this->name;
    }
}

