<?php
namespace App\Entity;

use Doctrine\Common\Collections\Collection;
use App\Repository\MenuRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MenuRepository::class)]
class Menu implements TranslatableInterface, TimestampableInterface
{
    use TranslatableTrait;
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['menu:list'])]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'children')]
    private ?Menu $parent = null;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: self::class)]
    #[ORM\OrderBy(["position" => "ASC"])]
    private Collection $children;

    #[ORM\ManyToOne(targetEntity: Page::class)]
    private ?page $page = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    protected ?string $pageSystem = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    protected ?string $externalPath = null;

    #[ORM\Column(type: 'boolean')]
    private bool $active = true;

    protected $translations;

    #[ORM\Column(type: 'integer', nullable: true)]
    private ?int $position;


    public function __construct()
    {
        $this->children = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }
    public function setActive(bool $active): self
    {
        $this->active = $active;
        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }
    public function setParent(?self $parent): self
    {
        $this->parent = $parent;
        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getChildren(): Collection
    {
        return $this->children;
    }
    public function addChild(self $child): self
    {
        if (!$this->children->contains($child)) {
            $this->children[] = $child;
            $child->setParent($this);
        }
        return $this;
    }
    public function removeChild(self $child): self
    {
        if ($this->children->removeElement($child) && $child->getParent() === $this) {
            $child->setParent(null);
        }
        return $this;
    }

    public function getPage(): ?page
    {
        return $this->page;
    }
    public function setPage($page): void
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

    public function getActiveChildren(): Collection
    {
        return $this->children->filter(function(Menu $menu) {
            return $menu->getActive();
        });
    }

    public function getMasterMenu() {
        $menu = $this;
        while ($menu->getParent()) {
            $menu = $menu->getParent();
        }

        return $menu;
    }

    public function getExternalPath(): ?string
    {
        return $this->externalPath;
    }
    public function setExternalPath(?string $externalPath): void
    {
        $this->externalPath = $externalPath;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }
    public function setPosition(?int $position): self
    {
        $this->position = $position;
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
        if(!str_contains($name, "ea_form_panel")) {
            $method = 'get'. ucfirst($name);
            $arguments = [];
            return $this->proxyCurrentLocaleTranslation($method, $arguments);
        }
        return null;
    }

    public function __toString(): string
    {
        $menu = $this;
        $libelleString = $this->translate()->getTitle();

        while($menu->getParent()) {
            if($libelleString !== null) {
                $libelleString = " - ".$libelleString;
            }
            $libelleString = $menu->getParent()->translate()->getTitle().$libelleString;
            $menu = $menu->getParent();
        }
        return (string)$libelleString;
    }
}
