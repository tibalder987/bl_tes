<?php

namespace App\Entity;

use App\Repository\SurveyAccessRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SurveyAccessRepository::class)]
class SurveyAccess
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'surveyAccesses')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Survey $survey = null;

    #[ORM\Column(length: 255)]
    private ?string $link = null;

    #[ORM\OneToMany(mappedBy: 'surveyAccess', targetEntity: SurveyParticipation::class, cascade: ['persist', 'remove'])]
    private Collection $surveyParticipations;

    public function __construct()
    {
        $this->surveyParticipations = new ArrayCollection();
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

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): static
    {
        $this->link = $link;

        return $this;
    }

    /**
     * @return Collection<int, SurveyParticipation>
     */
    public function getSurveyParticipations(): Collection
    {
        return $this->surveyParticipations;
    }

    public function addSurveyParticipation(SurveyParticipation $surveyParticipation): static
    {
        if (!$this->surveyParticipations->contains($surveyParticipation)) {
            $this->surveyParticipations->add($surveyParticipation);
            $surveyParticipation->setSurveyAccess($this);
        }

        return $this;
    }

    public function removeSurveyParticipation(SurveyParticipation $surveyParticipation): static
    {
        if ($this->surveyParticipations->removeElement($surveyParticipation)) {
            // set the owning side to null (unless already changed)
            if ($surveyParticipation->getSurveyAccess() === $this) {
                $surveyParticipation->setSurveyAccess(null);
            }
        }

        return $this;
    }
}
