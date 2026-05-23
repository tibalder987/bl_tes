<?php

namespace App\Entity;

use App\Repository\PageRepository;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: PageRepository::class)]
#[Vich\Uploadable]
class Page implements TranslatableInterface, TimestampableInterface
{
    use TranslatableTrait;
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private User $author;

    #[ORM\Column(type: 'boolean')]
    private bool $active = true;

    #[Vich\UploadableField(mapping: 'medias', fileNameProperty: 'metaImageName')]
    private ?File $metaImage = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaImageName = null;

    #[Assert\Valid]
    protected $translations;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }
    public function setAuthor(?User $author): self
    {
        $this->author = $author;
        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }
    public function setActive(bool $active): self
    {
        $this->active = $active;
        return $this;
    }

    public function adminObject(): Page
    {
        return $this;
    }

    public function getMetaImage(): ?File
    {
        return $this->metaImage;
    }
    public function setMetaImage(?File $metaImage): void
    {
        $this->metaImage = $metaImage;
        if (null !== $metaImage) {
            $this->updatedAt = new DateTimeImmutable();
        }
    }
    public function getMetaImageName(): ?string
    {
        return $this->metaImageName;
    }
    public function setMetaImageName(?string $metaImageName): void
    {
        $this->metaImageName = $metaImageName;
    }

    public function getTitle(): ?string
    {
        return $this->translate()->getTitle();
    }



    /*******************************************************************************************************************
     * MAGIC METHODS TRANSLATION
     *******************************************************************************************************************/
    public function __call($method, $arguments)
    {
        $method = (str_starts_with($method, 'get') || str_starts_with($method, 'set')) ? $method : 'get' . ucfirst($method);

        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }

    public function __get($name)
    {
        if (($name !== "translationsSeo") && !str_contains($name, "ea_form_panel")) {
            $method = 'get' . ucfirst($name);
            $arguments = [];
            return $this->proxyCurrentLocaleTranslation($method, $arguments);
        }
        return null;
    }
    public function __toString(): string
    {
        return $this->translate()->getTitle();
    }
}
