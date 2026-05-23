<?php

namespace App\Entity;

use App\Repository\SurveyParticipationDetailRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SurveyParticipationDetailRepository::class)]
class SurveyParticipationDetail
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'surveyParticipationDetails')]
    #[ORM\JoinColumn(nullable: false)]
    private ?SurveyParticipation $surveyParticipation = null;

    #[ORM\ManyToOne(inversedBy: 'surveyParticipationDetails')]
    #[ORM\JoinColumn(nullable: false)]
    private ?SurveyQuestion $surveyQuestion = null;

    #[ORM\ManyToOne(inversedBy: 'surveyParticipationDetails')]
    private ?SurveyQuestionAnswer $surveyQuestionAnswer = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $valueTxt = null;

    #[ORM\Column(nullable: true)]
    private ?int $valueInt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSurveyParticipation(): ?SurveyParticipation
    {
        return $this->surveyParticipation;
    }

    public function setSurveyParticipation(?SurveyParticipation $surveyParticipation): static
    {
        $this->surveyParticipation = $surveyParticipation;

        return $this;
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

    public function getSurveyQuestionAnswer(): ?SurveyQuestionAnswer
    {
        return $this->surveyQuestionAnswer;
    }

    public function setSurveyQuestionAnswer(?SurveyQuestionAnswer $surveyQuestionAnswer): static
    {
        $this->surveyQuestionAnswer = $surveyQuestionAnswer;

        return $this;
    }

    public function getValueTxt(): ?string
    {
        return $this->valueTxt;
    }

    public function setValueTxt(?string $valueTxt): static
    {
        $this->valueTxt = $valueTxt;

        return $this;
    }

    public function getValueInt(): ?int
    {
        return $this->valueInt;
    }

    public function setValueInt(?int $valueInt): static
    {
        $this->valueInt = $valueInt;

        return $this;
    }
}
