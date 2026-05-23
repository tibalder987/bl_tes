<?php
declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslationInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslationTrait;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity]
class FooterLinkTranslation implements TranslationInterface
{
    use TranslationTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['footer:list'])]
    protected string $title;

    #[ORM\ManyToOne(targetEntity: Page::class)]
    private ?page $page = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    protected ?string $pageSystem = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    protected ?string $externalPath = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getPage(): ?page
    {
        return $this->page;
    }
    public function setPage(?page $page): void
    {
        $this->page = $page;
    }

    public function getPageSystem(): ?string
    {
        return $this->pageSystem;
    }
    public function setPageSystem(?string $pageSystem): void
    {
        $this->pageSystem = $pageSystem;
    }

    public function getExternalPath(): ?string
    {
        return $this->externalPath;
    }
    public function setExternalPath(?string $externalPath): void
    {
        $this->externalPath = $externalPath;
    }
}
