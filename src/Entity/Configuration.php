<?php

namespace App\Entity;

use App\Repository\ConfigurationRepository;
use DateTimeImmutable;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: ConfigurationRepository::class)]
#[Vich\Uploadable]
class Configuration implements TranslatableInterface, TimestampableInterface
{
    use TranslatableTrait;
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Vich\UploadableField(mapping: 'menu', fileNameProperty: 'logoName')]
    private ?File $logo = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $logoName = null;
    #[Vich\UploadableField(mapping: 'menu', fileNameProperty: 'logoPageName')]
    private ?File $logoPage = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $logoPageName = null;
    #[Vich\UploadableField(mapping: 'favicon', fileNameProperty: 'faviconName')]
    private ?File $favicon = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $faviconName = null;


    #[ORM\Column(type: 'boolean', options: ["default" => false])]
    private bool $maintenance = false;

    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $title = null;


    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $address = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $phoneContact = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $emailContact = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $facebook = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $instagram = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $youtube = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $twitter = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $linkedin = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tiktok = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $googleAnalyticsId = null;


    /*******************************************************************************************************************
     * SEO Meta Image
     *******************************************************************************************************************/
    #[Vich\UploadableField(mapping: 'medias', fileNameProperty: 'metaImageName')]
    private ?File $metaImage = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaImageName = null;
    #[Vich\UploadableField(mapping: 'medias', fileNameProperty: 'metaImageNameNews')]
    private ?File $metaImageNews = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaImageNameNews = null;
    #[Vich\UploadableField(mapping: 'medias', fileNameProperty: 'metaImageNameCommunique')]
    private ?File $metaImageCommunique = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaImageNameCommunique = null;
    #[Vich\UploadableField(mapping: 'medias', fileNameProperty: 'metaImageNameEvents')]
    private ?File $metaImageEvents = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaImageNameEvents = null;
    #[Vich\UploadableField(mapping: 'medias', fileNameProperty: 'metaImageNameMediatheque')]
    private ?File $metaImageMediatheque = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaImageNameMediatheque = null;
    #[Vich\UploadableField(mapping: 'medias', fileNameProperty: 'metaImageNameOffers')]
    private ?File $metaImageOffers = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaImageNameOffers = null;
    #[Vich\UploadableField(mapping: 'medias', fileNameProperty: 'metaImageNameContact')]
    private ?File $metaImageContact = null;
    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $metaImageNameContact = null;


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

    public function getLogoPage(): ?File
    {
        return $this->logoPage;
    }
    public function setLogoPage(?File $logoPage): void
    {
        $this->logoPage = $logoPage;
        if (null !== $logoPage) {
            $this->updatedAt = new DateTimeImmutable();
        }
    }
    public function getLogoPageName(): ?string
    {
        return $this->logoPageName;
    }
    public function setLogoPageName(?string $logoPageName): void
    {
        $this->logoPageName = $logoPageName;
    }

    public function getFavicon(): ?File
    {
        return $this->favicon;
    }
    public function setFavicon(?File $favicon): void
    {
        $this->favicon = $favicon;
        if (null !== $favicon) {
            $this->updatedAt = new DateTimeImmutable();
        }
    }
    public function getFaviconName(): ?string
    {
        return $this->faviconName;
    }
    public function setFaviconName(?string $faviconName): void
    {
        $this->faviconName = $faviconName;
    }

    public function isMaintenance(): bool
    {
        return $this->maintenance;
    }
    public function setMaintenance(bool $maintenance): static
    {
        $this->maintenance = $maintenance;
        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }
    public function setTitle(?string $title): void
    {
        $this->title = $title;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }
    public function setAddress(?string $address): void
    {
        $this->address = $address;
    }

    public function getPhoneContact(): ?string
    {
        return $this->phoneContact;
    }
    public function setPhoneContact(?string $phoneContact): void
    {
        $this->phoneContact = $phoneContact;
    }

    public function getEmailContact(): ?string
    {
        return $this->emailContact;
    }
    public function setEmailContact(?string $emailContact): void
    {
        $this->emailContact = $emailContact;
    }

    public function getFacebook(): ?string
    {
        return $this->facebook;
    }
    public function setFacebook(?string $facebook): void
    {
        $this->facebook = $facebook;
    }

    public function getInstagram(): ?string
    {
        return $this->instagram;
    }
    public function setInstagram(?string $instagram): void
    {
        $this->instagram = $instagram;
    }

    public function getYoutube(): ?string
    {
        return $this->youtube;
    }
    public function setYoutube(?string $youtube): void
    {
        $this->youtube = $youtube;
    }

    public function getTwitter(): ?string
    {
        return $this->twitter;
    }
    public function setTwitter(?string $twitter): void
    {
        $this->twitter = $twitter;
    }

    public function getLinkedin(): ?string
    {
        return $this->linkedin;
    }
    public function setLinkedin(?string $linkedin): void
    {
        $this->linkedin = $linkedin;
    }

    public function getTiktok(): ?string
    {
        return $this->tiktok;
    }
    public function setTiktok(?string $tiktok): void
    {
        $this->tiktok = $tiktok;
    }

    public function getGoogleAnalyticsId(): ?string
    {
        return $this->googleAnalyticsId;
    }

    public function setGoogleAnalyticsId(?string $googleAnalyticsId): void
    {
        $this->googleAnalyticsId = $googleAnalyticsId;
    }

    public function getMetaImage(): ?File
    {
        return $this->metaImage;
    }
    public function setMetaImage(?File $metaImage): void
    {
        $this->metaImage = $metaImage;
        if (null !== $metaImage) {
            $this->setUpdatedAt(new DateTimeImmutable());
        }
    }
    public function getMetaImageName(): ?string
    {
        return $this->metaImageName;
    }
    public function setMetaImageName(?string $metaImageName): void
    {
        $this->metaImageName = $metaImageName;
    }
    public function getMetaImageNews(): ?File
    {
        return $this->metaImageNews;
    }
    public function setMetaImageNews(?File $metaImageNews): void
    {
        $this->metaImageNews = $metaImageNews;
        if (null !== $metaImageNews) {
            $this->setUpdatedAt(new DateTimeImmutable());
        }
    }
    public function getMetaImageNameNews(): ?string
    {
        return $this->metaImageNameNews;
    }
    public function setMetaImageNameNews(?string $metaImageNameNews): void
    {
        $this->metaImageNameNews = $metaImageNameNews;
    }
    public function getMetaImageCommunique(): ?File
    {
        return $this->metaImageCommunique;
    }
    public function setMetaImageCommunique(?File $metaImageCommunique): void
    {
        $this->metaImageCommunique = $metaImageCommunique;
        if (null !== $metaImageCommunique) {
            $this->setUpdatedAt(new DateTimeImmutable());
        }
    }
    public function getMetaImageNameCommunique(): ?string
    {
        return $this->metaImageNameCommunique;
    }
    public function setMetaImageNameCommunique(?string $metaImageNameCommunique): void
    {
        $this->metaImageNameCommunique = $metaImageNameCommunique;
    }
    public function getMetaImageEvents(): ?File
    {
        return $this->metaImageEvents;
    }
    public function setMetaImageEvents(?File $metaImageEvents): void
    {
        $this->metaImageEvents = $metaImageEvents;
        if (null !== $metaImageEvents) {
            $this->setUpdatedAt(new DateTimeImmutable());
        }
    }
    public function getMetaImageNameEvents(): ?string
    {
        return $this->metaImageNameEvents;
    }
    public function setMetaImageNameEvents(?string $metaImageNameEvents): void
    {
        $this->metaImageNameEvents = $metaImageNameEvents;
    }
    public function getMetaImageMediatheque(): ?File
    {
        return $this->metaImageMediatheque;
    }
    public function setMetaImageMediatheque(?File $metaImageMediatheque): void
    {
        $this->metaImageMediatheque = $metaImageMediatheque;
        if (null !== $metaImageMediatheque) {
            $this->setUpdatedAt(new DateTimeImmutable());
        }
    }
    public function getMetaImageNameMediatheque(): ?string
    {
        return $this->metaImageNameMediatheque;
    }
    public function setMetaImageNameMediatheque(?string $metaImageNameMediatheque): void
    {
        $this->metaImageNameMediatheque = $metaImageNameMediatheque;
    }
    public function getMetaImageOffers(): ?File
    {
        return $this->metaImageOffers;
    }
    public function setMetaImageOffers(?File $metaImageOffers): void
    {
        $this->metaImageOffers = $metaImageOffers;
        if (null !== $metaImageOffers) {
            $this->setUpdatedAt(new DateTimeImmutable());
        }
    }
    public function getMetaImageNameOffers(): ?string
    {
        return $this->metaImageNameOffers;
    }
    public function setMetaImageNameOffers(?string $metaImageNameOffers): void
    {
        $this->metaImageNameOffers = $metaImageNameOffers;
    }
    public function getMetaImageContact(): ?File
    {
        return $this->metaImageContact;
    }
    public function setMetaImageContact(?File $metaImageContact): void
    {
        $this->metaImageContact = $metaImageContact;
        if (null !== $metaImageContact) {
            $this->setUpdatedAt(new DateTimeImmutable());
        }
    }
    public function getMetaImageNameContact(): ?string
    {
        return $this->metaImageNameContact;
    }
    public function setMetaImageNameContact(?string $metaImageNameContact): void
    {
        $this->metaImageNameContact = $metaImageNameContact;
    }




    /*******************************************************************************************************************
     * MAGIC METHODS TRANSLATION
     *******************************************************************************************************************/
    public function __call($method, $arguments)
    {
        $method = (str_starts_with($method, 'get') || str_starts_with($method, 'set')) ? $method : 'get' . ucfirst($method);

        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }

    //    public function __get($name)
    //    {
    //        $method = 'get'. ucfirst($name);
    //        $arguments = [];
    //        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    //    }
}
