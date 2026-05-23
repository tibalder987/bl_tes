<?php
namespace App\Dto;

class Seo
{
    private ?string $title = null;

    private ?string $metaTitle = null;

    private ?string $metaDescription = null;

    private ?string $metaImageName = null;

    public function getTitle(): ?string
    {
        return $this->title;
    }
    public function setTitle(?string $title): void
    {
        $this->title = $title;
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

    public function getMetaImageName(): ?string
    {
        return $this->metaImageName;
    }
    public function setMetaImageName(?string $metaImageName): void
    {
        $this->metaImageName = $metaImageName;
    }
}
