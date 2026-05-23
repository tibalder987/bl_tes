<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\FileRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: FileRepository::class)]
#[ORM\Table(name: 'file_manager_file')]
#[ORM\Index(columns: ['parent_folder_id'], name: 'idx_file_parent_folder')]
#[ORM\Index(columns: ['owner_id'], name: 'idx_file_owner')]
#[ORM\Index(columns: ['is_trashed'], name: 'idx_file_trashed')]
class File implements TimestampableInterface
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank]
    private string $name;

    #[ORM\Column(type: 'string', length: 255)]
    private string $originalName;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private ?string $mimeType = null;

    #[ORM\Column(type: 'bigint')]
    private int $size = 0;

    #[ORM\Column(type: 'string', length: 500)]
    private string $path;

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    private ?string $extension = null;

    #[ORM\ManyToOne(targetEntity: Folder::class, inversedBy: 'files')]
    #[ORM\JoinColumn(name: 'parent_folder_id', referencedColumnName: 'id', nullable: true, onDelete: 'CASCADE')]
    private ?Folder $parentFolder = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'owner_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private User $owner;

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private bool $isTrashed = false;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?DateTimeImmutable $deletedAt = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $metadata = null;

    #[ORM\OneToMany(targetEntity: FilePermission::class, mappedBy: 'file', cascade: ['remove'])]
    private Collection $permissions;

    public function __construct()
    {
        $this->permissions = new ArrayCollection();
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

    public function getOriginalName(): string
    {
        return $this->originalName;
    }

    public function setOriginalName(string $originalName): self
    {
        $this->originalName = $originalName;
        return $this;
    }

    public function getMimeType(): ?string
    {
        return $this->mimeType;
    }

    public function setMimeType(?string $mimeType): self
    {
        $this->mimeType = $mimeType;
        return $this;
    }

    public function getSize(): int
    {
        return $this->size;
    }

    public function setSize(int $size): self
    {
        $this->size = $size;
        return $this;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;
        return $this;
    }

    public function getExtension(): ?string
    {
        return $this->extension;
    }

    public function setExtension(?string $extension): self
    {
        $this->extension = $extension;
        return $this;
    }

    public function getParentFolder(): ?Folder
    {
        return $this->parentFolder;
    }

    public function setParentFolder(?Folder $parentFolder): self
    {
        $this->parentFolder = $parentFolder;
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

    public function getMetadata(): ?array
    {
        return $this->metadata;
    }

    public function setMetadata(?array $metadata): self
    {
        $this->metadata = $metadata;
        return $this;
    }

    public function getFormattedSize(): string
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];
        $size = $this->size;
        $unit = 0;

        while ($size >= 1024 && $unit < count($units) - 1) {
            $size /= 1024;
            $unit++;
        }

        return round($size, 2) . ' ' . $units[$unit];
    }

    public function isImage(): bool
    {
        return $this->mimeType !== null && str_starts_with($this->mimeType, 'image/');
    }

    public function isVideo(): bool
    {
        return $this->mimeType !== null && str_starts_with($this->mimeType, 'video/');
    }

    public function isPdf(): bool
    {
        return $this->mimeType === 'application/pdf';
    }

    public function isText(): bool
    {
        return $this->mimeType !== null && (
            str_starts_with($this->mimeType, 'text/') ||
            in_array($this->mimeType, ['application/json', 'application/xml'])
        );
    }

    public function __toString(): string
    {
        return $this->name;
    }
}
