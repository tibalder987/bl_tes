<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\FolderStarRepository;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;

#[ORM\Entity(repositoryClass: FolderStarRepository::class)]
#[ORM\Table(name: 'file_manager_folder_star')]
#[ORM\UniqueConstraint(name: 'unique_folder_user_star', columns: ['folder_id', 'user_id'])]
#[ORM\Index(columns: ['folder_id'], name: 'idx_folder_star_folder')]
#[ORM\Index(columns: ['user_id'], name: 'idx_folder_star_user')]
class FolderStar implements TimestampableInterface
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Folder::class)]
    #[ORM\JoinColumn(name: 'folder_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private Folder $folder;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private User $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFolder(): Folder
    {
        return $this->folder;
    }

    public function setFolder(Folder $folder): self
    {
        $this->folder = $folder;
        return $this;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;
        return $this;
    }
}
