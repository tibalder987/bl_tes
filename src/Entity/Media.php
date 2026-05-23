<?php
namespace App\Entity;

use App\Repository\MediaRepository;
use App\Utilities\GlobalConstants;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: MediaRepository::class)]
#[Vich\Uploadable]
class Media implements TranslatableInterface, TimestampableInterface
{
    use TranslatableTrait;
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'integer', options:  ["default" => GlobalConstants::MEDIA_TYPE_PHOTO])]
    private int $mediaType = GlobalConstants::MEDIA_TYPE_PHOTO;

    #[ORM\Column(type: 'boolean', options:  ["default" => true])]
    private bool $active = true;

    #[Vich\UploadableField(mapping: 'medias', fileNameProperty: 'fileName', mimeType: 'fileType')]
    private ?File $file = null;

    #[ORM\Column(type: 'string')]
    private ?string $fileName = null;

    #[ORM\Column(type: 'string', length: 255)]
    protected ?string $fileType;

    #[Assert\Valid]
    protected $translations;

    #[ORM\ManyToOne(inversedBy: 'medias')]
    private ?MediaDocumentType $mediaDocumentType = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMediaType(): int
    {
        return $this->mediaType;
    }
    public function setMediaType(int $mediaType): void
    {
        $this->mediaType = $mediaType;
    }

    public function getFile(): ?File
    {
        return $this->file;
    }
    public function setFile(?File $file = null): void
    {
        $this->file = $file;
        if (null !== $file) {
            $this->updatedAt = new DateTimeImmutable();
        }
    }

    public function getFileName(): ?string
    {
        return $this->fileName;
    }
    public function setFileName(?string $fileName): void
    {
        $this->fileName = $fileName;
    }

    public function getFileType(): string
    {
        return $this->fileType;
    }
    public function setFileType(?string $fileType): void
    {
        $this->fileType = $fileType;
    }

    public function isActive(): bool
    {
        return $this->active;
    }
    public function setActive(bool $active): void
    {
        $this->active = $active;
    }

    public function getMediaDocumentType(): ?MediaDocumentType
    {
        return $this->mediaDocumentType;
    }
    public function setMediaDocumentType(?MediaDocumentType $mediaDocumentType): static
    {
        $this->mediaDocumentType = $mediaDocumentType;
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
        if(!str_contains($name, "ea_form_panel") && !str_contains($name, "fileName")) {
            $method = 'get'. ucfirst($name);
            $arguments = [];
            return $this->proxyCurrentLocaleTranslation($method, $arguments);
        }
        return null;
    }

    public function __toString(): string
    {
        return (string)$this->translate()->getTitle();
    }
}
