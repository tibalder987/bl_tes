<?php
declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslationInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslationTrait;

#[ORM\Entity]
#[ORM\HasLifecycleCallbacks]
class HomePageTranslation implements TranslationInterface, HasBuilderElements
{
    use TranslationTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $elements = [];


    public function getId(): ?int
    {
        return $this->id;
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

    public function getBuilderElementsFields(): array
    {
        return ['elements'];
    }
}
