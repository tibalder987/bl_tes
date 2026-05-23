<?php

namespace App\Entity;

use App\Repository\SurveyQuestionAnswerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: SurveyQuestionAnswerRepository::class)]
class SurveyQuestionAnswer  implements TranslatableInterface
{
    use TranslatableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'surveyQuestionAnswers')]
    private SurveyQuestion $surveyQuestion;

    #[Assert\Valid]
    protected $translations;

    #[ORM\OneToMany(mappedBy: 'surveyQuestionAnswer', targetEntity: SurveyParticipationDetail::class)]
    private Collection $surveyParticipationDetails;

    public function __construct()
    {
        $this->surveyParticipationDetails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSurveyQuestion(): ?SurveyQuestion
    {
        return $this->surveyQuestion;
    }
    public function setSurveyQuestion(?SurveyQuestion $surveyQuestion): static
    {
        $this->surveyQuestion = $surveyQuestion;

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
            $surveyParticipationDetail->setSurveyQuestionAnswer($this);
        }

        return $this;
    }

    public function removeSurveyParticipationDetail(SurveyParticipationDetail $surveyParticipationDetail): static
    {
        if ($this->surveyParticipationDetails->removeElement($surveyParticipationDetail)) {
            // set the owning side to null (unless already changed)
            if ($surveyParticipationDetail->getSurveyQuestionAnswer() === $this) {
                $surveyParticipationDetail->setSurveyQuestionAnswer(null);
            }
        }

        return $this;
    }
}
