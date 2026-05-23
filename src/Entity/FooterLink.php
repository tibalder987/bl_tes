<?php
namespace App\Entity;

use App\Repository\FooterLinkRepository;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: FooterLinkRepository::class)]
class FooterLink implements TranslatableInterface
{
    use TranslatableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'integer')]
    private int $position;

    #[ORM\ManyToOne(targetEntity: Footer::class, inversedBy: 'footerLinks')]
    private ?Footer $footer;

    #[Groups(['footer:list'])]
    protected $translations;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPosition(): int
    {
        return $this->position;
    }
    public function setPosition(int $position): void
    {
        $this->position = $position;
    }

    public function getFooter(): Footer
    {
        return $this->footer;
    }
    public function setFooter(?Footer $footer): void
    {
        $this->footer = $footer;
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
        return (string) $this->translate()->getTitle();
    }
}
