<?php

namespace App\Entity;

use App\Repository\SurveyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: SurveyRepository::class)]
class Survey implements TranslatableInterface, TimestampableInterface
{
    use TranslatableTrait;
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\Valid]
    protected $translations;

    #[ORM\Column(type: 'boolean', options:  ["default" => true])]
    private bool $public = true;

    #[ORM\Column(type: 'boolean', options:  ["default" => true])]
    private bool $active = true;

    #[ORM\OneToMany(mappedBy: 'survey', targetEntity: SurveyAccess::class, cascade: ['persist', 'remove'])]
    private Collection $surveyAccesses;

    #[ORM\OneToMany(mappedBy: 'survey', targetEntity: SurveyQuestion::class, cascade: ['persist', 'remove'])]
    private Collection $surveyQuestions;

    public function __construct()
    {
        $this->surveyAccesses = new ArrayCollection();
        $this->surveyQuestions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isPublic(): bool
    {
        return $this->public;
    }
    public function setPublic(bool $public): void
    {
        $this->public = $public;
    }

    public function isActive(): bool
    {
        return $this->active;
    }
    public function setActive(bool $active): void
    {
        $this->active = $active;
    }

    /**
     * @return Collection<int, SurveyAccess>
     */
    public function getSurveyAccesses(): Collection
    {
        return $this->surveyAccesses;
    }
    public function addSurveyAccess(SurveyAccess $surveyAccess): static
    {
        if (!$this->surveyAccesses->contains($surveyAccess)) {
            $this->surveyAccesses->add($surveyAccess);
            $surveyAccess->setSurvey($this);
        }
        return $this;
    }
    public function removeSurveyAccess(SurveyAccess $surveyAccess): static
    {
        if ($this->surveyAccesses->removeElement($surveyAccess)) {
            // set the owning side to null (unless already changed)
            if ($surveyAccess->getSurvey() === $this) {
                $surveyAccess->setSurvey(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, SurveyQuestion>
     */
    public function getSurveyQuestions(): Collection
    {
        return $this->surveyQuestions;
    }
    public function addSurveyQuestion(SurveyQuestion $surveyQuestion): static
    {
        if (!$this->surveyQuestions->contains($surveyQuestion)) {
            $this->surveyQuestions->add($surveyQuestion);
            $surveyQuestion->setSurvey($this);
        }

        return $this;
    }
    public function removeSurveyQuestion(SurveyQuestion $surveyQuestion): static
    {
        if ($this->surveyQuestions->removeElement($surveyQuestion) && $surveyQuestion->getSurvey() === $this) {
            $surveyQuestion->setSurvey(null);
        }
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
        return (string)$this->translate()->getTitle();
    }
}
