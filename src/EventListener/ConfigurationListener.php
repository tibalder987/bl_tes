<?php

namespace App\EventListener;

use App\Dto\Contact;
use App\Dto\Seo;
use App\Entity\Configuration;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

class ConfigurationListener
{
    public function __construct(private readonly EntityManagerInterface $em, private readonly UploaderHelper $uploaderHelper) {}

    /**
     * @param RequestEvent $event
     */
    public function onKernelRequest(RequestEvent $event)
    {
        $configurationID = GlobalConstants::CONFIGURATION_ID;
        /** @var Configuration $configuration */
        $configuration = $this->em->getRepository(Configuration::class)->find($configurationID);

        if ($configuration instanceof Configuration) {

            /***********************************************************************************************************
             * SEO
             ***********************************************************************************************************/
            $seo = new Seo();
            $seo->setTitle($configuration->getTitle());
            $seo->setMetaTitle($configuration->translate()->getMetaTitle());
            $seo->setMetaDescription($configuration->translate()->getMetaDescription());
            $seo->setMetaImageName($this->uploaderHelper->asset($configuration, 'metaImage'));

            if ($event->getRequest()->get('_route') === "app_article_actualites") {
                $seo->setMetaTitle($configuration->translate()->getMetaTitleNews());
                $seo->setMetaDescription($configuration->translate()->getMetaDescriptionNews());
                $seo->setMetaImageName($this->uploaderHelper->asset($configuration, 'metaImageNews'));
            } else if ($event->getRequest()->get('_route') === "app_article_communiques") {
                $seo->setMetaTitle($configuration->translate()->getMetaTitleCommunique());
                $seo->setMetaDescription($configuration->translate()->getMetaDescriptionCommunique());
                $seo->setMetaImageName($this->uploaderHelper->asset($configuration, 'metaImageCommunique'));
            } else if ($event->getRequest()->get('_route') === "app_article_event") {
                $seo->setMetaTitle($configuration->translate()->getMetaTitleEvents());
                $seo->setMetaDescription($configuration->translate()->getMetaDescriptionEvents());
                $seo->setMetaImageName($this->uploaderHelper->asset($configuration, 'metaImageEvents'));
            } else if ($event->getRequest()->get('_route') === "app_mediatheque_photo" || $event->getRequest()->get('_route') === "app_mediatheque_document") {
                $seo->setMetaTitle($configuration->translate()->getMetaTitleMediatheque());
                $seo->setMetaDescription($configuration->translate()->getMetaDescriptionMediatheque());
                $seo->setMetaImageName($this->uploaderHelper->asset($configuration, 'metaImageMediatheque'));
            } else if ($event->getRequest()->get('_route') === "app_job_offers") {
                $seo->setMetaTitle($configuration->translate()->getMetaTitleOffers());
                $seo->setMetaDescription($configuration->translate()->getMetaDescriptionOffers());
                $seo->setMetaImageName($this->uploaderHelper->asset($configuration, 'metaImageOffers'));
            } else if ($event->getRequest()->get('_route') === "app_contact") {
                $seo->setMetaTitle($configuration->translate()->getMetaTitleContact());
                $seo->setMetaDescription($configuration->translate()->getMetaDescriptionContact());
                $seo->setMetaImageName($this->uploaderHelper->asset($configuration, 'metaImageContact'));
            }

            /***********************************************************************************************************
             * Contact
             ***********************************************************************************************************/
            $contact = new Contact();
            $contact->setAddress($configuration->getAddress());
            $contact->setPhone($configuration->getPhoneContact());
            $contact->setEmail($configuration->getEmailContact());
            $contact->setFacebook($configuration->getFacebook());
            $contact->setInstagram($configuration->getInstagram());
            $contact->setTwitter($configuration->getTwitter());
            $contact->setYoutube($configuration->getYoutube());
            $contact->setLinkedin($configuration->getLinkedin());
            $contact->setTiktok($configuration->getTiktok());

            $event->getRequest()->attributes->set('favicon', $this->uploaderHelper->asset($configuration, 'favicon'));
            $event->getRequest()->attributes->set('logo', $this->uploaderHelper->asset($configuration, 'logo'));
            $event->getRequest()->attributes->set('seo', $seo);
            $event->getRequest()->attributes->set('contact', $contact);
            $event->getRequest()->attributes->set('googleAnalyticsId', $configuration->getGoogleAnalyticsId());
        }
    }
}
