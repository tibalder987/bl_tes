<?php
declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslationInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslationTrait;

#[ORM\Entity]
class JobOfferTranslation implements TranslationInterface
{
    use TranslationTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255, nullable: false)]
    protected string $title;

    #[ORM\Column(type: 'text', nullable: false)]
    protected string $presentation;

    #[ORM\Column(type: 'text', nullable: true)]
    protected ?string $missions = null;

    #[ORM\Column(type: 'text', nullable: true)]
    protected ?string $competences = null;

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

    public function getPresentation(): string
    {
        return $this->presentation;
    }
    public function setPresentation(string $presentation): void
    {
        $this->presentation = $presentation;
    }

    public function getMissions(): ?string
    {
        return $this->missions;
    }
    public function setMissions(?string $missions): void
    {
        $this->missions = $missions;
    }

    public function getCompetences(): ?string
    {
        return $this->competences;
    }
    public function setCompetences(?string $competences): void
    {
        $this->competences = $competences;
    }
}
