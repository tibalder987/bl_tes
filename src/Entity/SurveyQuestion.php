<?php

namespace App\Entity;

use App\Repository\SurveyQuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: SurveyQuestionRepository::class)]
class SurveyQuestion  implements TranslatableInterface
{
    use TranslatableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'surveyQuestions')]
    private Survey $survey;

    #[ORM\Column(length: 255)]
    private string $type = 'etoile';

    #[ORM\Column(type: 'boolean', options:  ["default" => true])]
    private bool $active = true;

    #[ORM\OneToMany(mappedBy: 'surveyQuestion', targetEntity: SurveyQuestionAnswer::class, cascade: ["persist", "remove"])]
    private Collection $surveyQuestionAnswers;

    #[Assert\Valid]
    protected $translations;

    #[ORM\OneToMany(mappedBy: 'surveyQuestion', targetEntity: SurveyParticipationDetail::class, cascade: ['persist', 'remove'])]
    private Collection $surveyParticipationDetails;

    public function __construct()
    {
        $this->surveyQuestionAnswers = new ArrayCollection();
        $this->surveyParticipationDetails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSurvey(): ?Survey
    {
        return $this->survey;
    }
    public function setSurvey(?Survey $survey): static
    {
        $this->survey = $survey;
        return $this;
    }

    public function getType(): string
    {
        return $this->type;
    }
    public function getTypeTexte($type): ?string
    {
        return match ($type) {
            "etoile" => "Étoile",
            "text" => "Champs texte",
            "radio" => "Liste de réponse",
            default => null,
        };
    }
    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
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
     * @return Collection<int, SurveyQuestionAnswer>
     */
    public function getSurveyQuestionAnswers(): Collection
    {
        return $this->surveyQuestionAnswers;
    }
    public function addSurveyQuestionAnswer(SurveyQuestionAnswer $surveyQuestionAnswer): static
    {
        if (!$this->surveyQuestionAnswers->contains($surveyQuestionAnswer)) {
            $this->surveyQuestionAnswers->add($surveyQuestionAnswer);
            $surveyQuestionAnswer->setSurveyQuestion($this);
        }
        return $this;
    }
    public function removeSurveyQuestionAnswer(SurveyQuestionAnswer $surveyQuestionAnswer): static
    {
        if ($this->surveyQuestionAnswers->removeElement($surveyQuestionAnswer) && $surveyQuestionAnswer->getSurveyQuestion() === $this) {
            $surveyQuestionAnswer->setSurveyQuestion(null);
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
        return (string)$this->translate()->getTitle()." (Type : ".$this->getTypeTexte($this->type).")";
    }

    /**
     * @return Collection<int, SurveyParticipationDetail>
     */
    public function getSurveyParticipationDetails(): Collection
    {
        return $this->surveyParticipationDetails;
    }

    public function addSurveyParticipationDetail(SurveyParticipationDetail $surveyParticipationDetail): static
    {
        if (!$this->surveyParticipationDetails->contains($surveyParticipationDetail)) {
            $this->surveyParticipationDetails->add($surveyParticipationDetail);
            $surveyParticipationDetail->setSurveyQuestion($this);
        }

        return $this;
    }

    public function removeSurveyParticipationDetail(SurveyParticipationDetail $surveyParticipationDetail): static
    {
        if ($this->surveyParticipationDetails->removeElement($surveyParticipationDetail)) {
            // set the owning side to null (unless already changed)
            if ($surveyParticipationDetail->getSurveyQuestion() === $this) {
                $surveyParticipationDetail->setSurveyQuestion(null);
            }
        }

        return $this;
    }
}
