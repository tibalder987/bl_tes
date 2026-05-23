<?php

namespace App\Entity;

use App\Repository\FooterRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: FooterRepository::class)]
#[Vich\Uploadable]
class Footer implements TimestampableInterface
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Vich\UploadableField(mapping: 'footer', fileNameProperty: 'logoName')]
    private ?File $logo = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $logoName = null;

    #[ORM\OneToMany(mappedBy: 'footer', targetEntity: FooterLink::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[Assert\Count(
        max: 12, maxMessage: 'La limite est de 12 liens maximum',
    )]
    private Collection $footerLinks;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLogo(): ?File
    {
        return $this->logo;
    }
    public function setLogo(?File $file = null): void
    {
        $this->logo = $file;
        if (null !== $file) {
            $this->updatedAt = new DateTimeImmutable();
        }
    }

    public function setLogoName(?string $fileName): void
    {
        $this->logoName = $fileName;
    }
    public function getLogoName(): ?string
    {
        return $this->logoName;
    }

    public function getFooterLinks(): Collection
    {
        return $this->footerLinks;
    }
    public function addFooterLink(FooterLink $footerLink): self
    {
        if (!$this->footerLinks->contains($footerLink)) {
            $this->footerLinks[] = $footerLink;
            $footerLink->setFooter($this);
        }
        return $this;
    }
    public function removeFooterLink(FooterLink $footerLink): self
    {
        if ($this->footerLinks->removeElement($footerLink)) {
            $footerLink->setFooter(null);
        }
        return $this;
    }
}
