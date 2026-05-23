<?php
declare(strict_types=1);

namespace App\Entity;

use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslationInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslationTrait;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity]
#[Vich\Uploadable]
class ConfigurationTranslation implements TranslationInterface
{
    use TranslationTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaTitle = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaDescription = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaTitleNews = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaDescriptionNews = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaTitleCommunique = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaDescriptionCommunique = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaTitleEvents = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaDescriptionEvents = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaTitleMediatheque = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaDescriptionMediatheque = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaTitleOffers = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaDescriptionOffers = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaTitleContact = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaDescriptionContact = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMetaTitle(): ?string
    {
        return $this->metaTitle;
    }
    public function setMetaTitle(?string $metaTitle): void
    {
        $this->metaTitle = $metaTitle;
    }
    public function getMetaDescription(): ?string
    {
        return $this->metaDescription;
    }
    public function setMetaDescription(?string $metaDescription): void
    {
        $this->metaDescription = $metaDescription;
    }

    public function getMetaTitleNews(): ?string
    {
        return $this->metaTitleNews;
    }
    public function setMetaTitleNews(?string $metaTitleNews): void
    {
        $this->metaTitleNews = $metaTitleNews;
    }
    public function getMetaDescriptionNews(): ?string
    {
        return $this->metaDescriptionNews;
    }
    public function setMetaDescriptionNews(?string $metaDescriptionNews): void
    {
        $this->metaDescriptionNews = $metaDescriptionNews;
    }

    public function getMetaTitleCommunique(): ?string
    {
        return $this->metaTitleCommunique;
    }
    public function setMetaTitleCommunique(?string $metaTitleCommunique): void
    {
        $this->metaTitleCommunique = $metaTitleCommunique;
    }
    public function getMetaDescriptionCommunique(): ?string
    {
        return $this->metaDescriptionCommunique;
    }
    public function setMetaDescriptionCommunique(?string $metaDescriptionCommunique): void
    {
        $this->metaDescriptionCommunique = $metaDescriptionCommunique;
    }

    public function getMetaTitleEvents(): ?string
    {
        return $this->metaTitleEvents;
    }
    public function setMetaTitleEvents(?string $metaTitleEvents): void
    {
        $this->metaTitleEvents = $metaTitleEvents;
    }
    public function getMetaDescriptionEvents(): ?string
    {
        return $this->metaDescriptionEvents;
    }
    public function setMetaDescriptionEvents(?string $metaDescriptionEvents): void
    {
        $this->metaDescriptionEvents = $metaDescriptionEvents;
    }

    public function getMetaTitleMediatheque(): ?string
    {
        return $this->metaTitleMediatheque;
    }
    public function setMetaTitleMediatheque(?string $metaTitleMediatheque): void
    {
        $this->metaTitleMediatheque = $metaTitleMediatheque;
    }
    public function getMetaDescriptionMediatheque(): ?string
    {
        return $this->metaDescriptionMediatheque;
    }
    public function setMetaDescriptionMediatheque(?string $metaDescriptionMediatheque): void
    {
        $this->metaDescriptionMediatheque = $metaDescriptionMediatheque;
    }

    public function getMetaTitleOffers(): ?string
    {
        return $this->metaTitleOffers;
    }
    public function setMetaTitleOffers(?string $metaTitleOffers): void
    {
        $this->metaTitleOffers = $metaTitleOffers;
    }
    public function getMetaDescriptionOffers(): ?string
    {
        return $this->metaDescriptionOffers;
    }
    public function setMetaDescriptionOffers(?string $metaDescriptionOffers): void
    {
        $this->metaDescriptionOffers = $metaDescriptionOffers;
    }

    public function getMetaTitleContact(): ?string
    {
        return $this->metaTitleContact;
    }
    public function setMetaTitleContact(?string $metaTitleContact): void
    {
        $this->metaTitleContact = $metaTitleContact;
    }
    public function getMetaDescriptionContact(): ?string
    {
        return $this->metaDescriptionContact;
    }
    public function setMetaDescriptionContact(?string $metaDescriptionContact): void
    {
        $this->metaDescriptionContact = $metaDescriptionContact;
    }
}
