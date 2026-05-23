<?php
namespace App\Entity;

use App\Repository\ArticleRepository;
use App\Utilities\GlobalConstants;
use DateTime;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
#[Vich\Uploadable]
class Article implements TranslatableInterface, TimestampableInterface
{
    use TranslatableTrait;
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[Vich\UploadableField(mapping: 'footer', fileNameProperty: 'imageName')]
    private ?File $image = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $imageName = null;

    #[ORM\Column(type: 'integer', options:  ["default" => GlobalConstants::ARTICLE_ACTUALITE])]
    private int $typeArticle;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private User $author;

    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'articles')]
    private Collection $categories;

    #[ORM\Column(type: 'boolean')]
    private bool $active = true;

    #[ORM\Column(type: 'boolean', options:  ["default" => false])]
    private bool $ahead = false;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?DateTime $dateSchedule;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?DateTime $dateEndSchedule;

    #[Assert\Valid]
    #[Groups(['article:item'])]
    protected $translations;


    public function __construct()
    {
        $this->dateSchedule = new DateTime();
        $this->categories = new ArrayCollection();
        $this->setDateSchedule(null);
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeArticle(): int
    {
        return $this->typeArticle;
    }
    public function setTypeArticle($typeArticle): void
    {
        $this->typeArticle = $typeArticle;
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

    /**
     * @return Collection<int, Category>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        $this->categories->removeElement($category);

        return $this;
    }

    public function isActive(): bool
    {
        return $this->active;
    }
    public function setActive(bool $active): self
    {
        $this->active = $active;
        return $this;
    }

    public function getDateSchedule(): ?DateTime
    {
        return $this->dateSchedule;
    }
    public function setDateSchedule(?DateTime $dateSchedule): void
    {
        $this->dateSchedule = $dateSchedule;
    }

    public function getDateEndSchedule(): ?DateTime
    {
        return $this->dateEndSchedule;
    }
    public function setDateEndSchedule(?DateTime $dateEndSchedule): void
    {
        $this->dateEndSchedule = $dateEndSchedule;
    }

    public function getImage(): ?File
    {
        return $this->image;
    }
    public function setImage(?File $file = null): void
    {
        $this->image = $file;
        if (null !== $file) {
            $this->updatedAt = new DateTimeImmutable();
        }
    }

    public function setImageName(?string $fileName): void
    {
        $this->imageName = $fileName;
    }
    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function isAhead(): bool
    {
        return $this->ahead;
    }
    public function setAhead(bool $ahead): void
    {
        $this->ahead = $ahead;
    }


    public function adminObject(): Article
    {
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
        if(!str_contains($name, "ea_form_panel") && !str_contains($name, "ea_form_tab")) {
            $method = 'get'. ucfirst($name);
            $arguments = [];
            return $this->proxyCurrentLocaleTranslation($method, $arguments);
        }
        return null;
    }

    public function __toString(): string
    {
        return (string)$this->translate()->getTitle();
    }
}
