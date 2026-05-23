<?php

namespace App\Entity;

use App\Repository\SurveyParticipationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;

#[ORM\Entity(repositoryClass: SurveyParticipationRepository::class)]
class SurveyParticipation implements TimestampableInterface
{
    use TimestampableTrait;
    
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'surveyParticipations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?SurveyAccess $surveyAccess = null;

    #[ORM\OneToMany(mappedBy: 'surveyParticipation', targetEntity: SurveyParticipationDetail::class, cascade: ['persist', 'remove'])]
    private Collection $surveyParticipationDetails;

    public function __construct()
    {
        $this->surveyParticipationDetails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSurveyAccess(): ?SurveyAccess
    {
        return $this->surveyAccess;
    }

    public function setSurveyAccess(?SurveyAccess $surveyAccess): static
    {
        $this->surveyAccess = $surveyAccess;

        return $this;
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
            $surveyParticipationDetail->setSurveyParticipation($this);
        }

        return $this;
    }

    public function removeSurveyParticipationDetail(SurveyParticipationDetail $surveyParticipationDetail): static
    {
        if ($this->surveyParticipationDetails->removeElement($surveyParticipationDetail)) {
            // set the owning side to null (unless already changed)
            if ($surveyParticipationDetail->getSurveyParticipation() === $this) {
                $surveyParticipationDetail->setSurveyParticipation(null);
            }
        }

        return $this;
    }
}
