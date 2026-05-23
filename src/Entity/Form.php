<?php

namespace App\Entity;

use App\Repository\FormRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;

#[ORM\Entity(repositoryClass: FormRepository::class)]
#[ORM\Table(name: '`form`')]
class Form implements TimestampableInterface
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private array $schemaData = [];

    #[ORM\Column]
    private array $configuration = [];

    #[ORM\OneToMany(mappedBy: 'form', targetEntity: FormSubmission::class, cascade: ['persist', 'remove'])]
    private Collection $submissions;

    public function __construct()
    {
        $this->submissions = new ArrayCollection();
        $this->schemaData = [
            'steps' => [
                [
                    'id' => uniqid('step_'),
                    'title' => 'Étape 1',
                    'fields' => []
                ]
            ]
        ];
        $this->configuration = [
            'successMessage' => 'Merci pour votre message. Nous vous contacterons rapidement.',
            'emails' => []
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getSchemaData(): array
    {
        return $this->schemaData;
    }

    public function setSchemaData(array $schemaData): static
    {
        $this->schemaData = $schemaData;

        return $this;
    }

    public function getConfiguration(): array
    {
        return $this->configuration;
    }

    public function setConfiguration(array $configuration): static
    {
        $this->configuration = $configuration;

        return $this;
    }

    /**
     * @return Collection<int, FormSubmission>
     */
    public function getSubmissions(): Collection
    {
        return $this->submissions;
    }

    public function addSubmission(FormSubmission $submission): static
    {
        if (!$this->submissions->contains($submission)) {
            $this->submissions->add($submission);
            $submission->setForm($this);
        }

        return $this;
    }

    public function removeSubmission(FormSubmission $submission): static
    {
        if ($this->submissions->removeElement($submission)) {
            // set the owning side to null (unless already changed)
            if ($submission->getForm() === $this) {
                $submission->setForm(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return (string) $this->name;
    }
}
