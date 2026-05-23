<?php

namespace App\Entity;

use App\Repository\JobOfferRepository;
use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;

#[ORM\Entity(repositoryClass: JobOfferRepository::class)]
class JobOffer implements TranslatableInterface, TimestampableInterface
{
    use TranslatableTrait;
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?DateTime $dateLimitOffer;

    #[ORM\ManyToOne(inversedBy: 'jobOffers')]
    #[ORM\JoinColumn(nullable: false)]
    private Job $job;

    #[ORM\ManyToOne(inversedBy: 'jobOffers')]
    #[ORM\JoinColumn(nullable: false)]
    private JobType $jobType;

    #[ORM\Column(type: 'boolean', options: ["default" => true])]
    private bool $active = true;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateLimitOffer(): ?DateTime
    {
        return $this->dateLimitOffer;
    }
    public function setDateLimitOffer(?DateTime $dateLimitOffer): void
    {
        $this->dateLimitOffer = $dateLimitOffer;
    }

    public function getJob(): Job
    {
        return $this->job;
    }
    public function setJob(Job $job): static
    {
        $this->job = $job;
        return $this;
    }

    public function getJobType(): JobType
    {
        return $this->jobType;
    }
    public function setJobType(JobType $jobType): void
    {
        $this->jobType = $jobType;
    }

    public function isActive(): bool
    {
        return $this->active;
    }
    public function setActive(bool $active): void
    {
        $this->active = $active;
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
