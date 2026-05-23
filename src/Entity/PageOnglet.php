<?php

namespace App\Entity;

use App\Repository\PageOngletRepository;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: PageOngletRepository::class)]
class PageOnglet implements TranslatableInterface, TimestampableInterface
{
    use TranslatableTrait;
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\Valid]
    protected $translations;

    protected $hide_field;

    public function getId(): ?int
    {
        return $this->id;
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
        return $this->translate()->getTitle();
    }

    public function getTitle(): ?string
    {
        return $this->translate(null, false)?->getTitle();
    }

    public function setTitle(?string $title): self
    {
        $this->translate(null, false)?->setTitle($title);
        return $this;
    }

    /**
     * @return mixed
     */
    public function getHideField(): mixed
    {
        return $this->hide_field;
    }

    /**
     * @param mixed $hide_field
     */
    public function setHideField($hide_field): void
    {
        $this->hide_field = $hide_field;
    }

}
