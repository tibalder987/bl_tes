<?php
namespace App\Dto;

class Contact
{
    private ?string $logo = null;

    private ?string $address = null;

    private ?string $phone = null;

    private ?string $email = null;

    private ?string $facebook = null;

    private ?string $instagram = null;

    private ?string $youtube = null;

    private ?string $twitter = null;

    private ?string $linkedin = null;

    private ?string $tiktok = null;

    public function getLogo(): ?string
    {
        return $this->logo;
    }
    public function setLogo(?string $logo): void
    {
        $this->logo = $logo;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }
    public function setAddress(?string $address): void
    {
        $this->address = $address;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }
    public function setPhone(?string $phone): void
    {
        $this->phone = $phone;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }
    public function setEmail(?string $email): void
    {
        $this->email = $email;
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
}
