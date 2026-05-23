<?php
namespace App\Entity;

use App\Repository\FaqRepository;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
class Faq implements TranslatableInterface, TimestampableInterface
{
    use TranslatableTrait;
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: FaqTheme::class, inversedBy: 'faqs')]
    #[ORM\JoinColumn(nullable: false)]
    private FaqTheme $theme;

    #[ORM\Column(type: 'boolean')]
    private bool $ahead;

    #[ORM\Column(type: 'boolean')]
    private bool $active;

    #[Assert\Valid]
    protected $translations;


    public function __construct()
    {
        $this->active = true;
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTheme(): FaqTheme
    {
        return $this->theme;
    }
    public function setTheme(FaqTheme $theme): void
    {
        $this->theme = $theme;
    }

    public function isAhead(): ?bool
    {
        return $this->ahead;
    }
    public function setAhead(bool $ahead): self
    {
        $this->ahead = $ahead;
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







    /*******************************************************************************************************************
     * MAGIC METHODS TRANSLATION
     *******************************************************************************************************************/
    public function __call($method, $arguments)
    {
        $method = (str_starts_with($method, 'get') || str_starts_with($method, 'set')) ? $method : 'get'. ucfirst($method);

        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }

    public function __get($name)
    {
        $method = 'get'. ucfirst($name);
        $arguments = [];
        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }

    public function __toString(): string
    {
        return (string)$this->translate()->getQuestion();
    }
}
