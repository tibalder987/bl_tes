<?php
declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslationInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslationTrait;

#[ORM\Entity]
#[ORM\HasLifecycleCallbacks]
class PageTranslation implements TranslationInterface, HasBuilderElements
{
    use TranslationTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    protected ?string $title = null;

    #[ORM\Column(type: 'string', length: 255)]
    protected ?string $path = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $description;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $elements = [];

    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaTitle = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaDescription = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle()
    {
        return $this->title;
    }
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }
    public function setPath(string $path): void
    {
        $this->path = $path;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }
    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }

    public function getElements(): ?array
    {
        return $this->elements;
    }
    public function setElements(?array $elements): self
    {
        $this->elements = $elements;
        return $this;
    }

    public function getMetaTitle(): ?string
    {
        return $this->metaTitle;
    }
    public function setMetaTitle(?string $metaTitle): void
    {
        $this->metaTitle = $metaTitle;
    }

    public function getMetaDescription(): ?string
    {
        return $this->metaDescription;
    }
    public function setMetaDescription(?string $metaDescription): void
    {
        $this->metaDescription = $metaDescription;
    }





    public function getBuilderElementsFields(): array
    {
        return ['elements'];
    }
}
