<?php
namespace App\EventSubscriber;

use App\Builder\EntityWithBuilderElementsSaver;
use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Faq;
use App\Entity\FaqTheme;
use App\Entity\Footer;
use App\Entity\HomePage;
use App\Entity\Job;
use App\Entity\JobOffer;
use App\Entity\JobType;
use App\Entity\Media;
use App\Entity\Menu;
use App\Entity\Page;
use App\Entity\PageOnglet;
use App\Entity\User;
use App\Service\LogService;
use App\Utilities\GlobalConstants;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityPersistedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityUpdatedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityDeletedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    /** @var LogService */
    private LogService $logService;

    /** @var EntityWithBuilderElementsSaver */
    private EntityWithBuilderElementsSaver $entityWithBuilderElementsSaver;

    /**
     * @param LogService $logService
     * @param EntityWithBuilderElementsSaver $entityWithBuilderElementsSaver
     */
    public function __construct(LogService $logService, EntityWithBuilderElementsSaver $entityWithBuilderElementsSaver)
    {
        $this->logService = $logService;
        $this->entityWithBuilderElementsSaver = $entityWithBuilderElementsSaver;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            AfterEntityPersistedEvent::class => ['onPostPersist'],
            AfterEntityUpdatedEvent::class => ['onPostUpdate'],
            BeforeEntityDeletedEvent::class => ['onPreDelete'],
        ];
    }

    /**
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function onPostPersist(AfterEntityPersistedEvent $event): void
    {
        /***************************************************************************************************************
         * Transformer DATA for BuilderElement
         ***************************************************************************************************************/
        if($event->getEntityInstance() instanceof Article
            || $event->getEntityInstance() instanceof Page
            || $event->getEntityInstance() instanceof PageOnglet) {
            foreach ($event->getEntityInstance()->getTranslations() as $entityTranslation) {
                foreach ($entityTranslation->getBuilderElementsFields() as $fieldName) {
                    $this->saveEntityWithBuilderElements($entityTranslation, $fieldName);
                }
            }
        }



        /***************************************************************************************************************
         * Log
         ***************************************************************************************************************/
        if($event->getEntityInstance() instanceof User) {
            $this->logService->write('Administrateur', "Création", "Création d'un administrateur : ".$event->getEntityInstance()->getFullname());
        }
        elseif($event->getEntityInstance() instanceof Category) {
            $this->logService->write('Article', "Création", "Création d'une catégorie : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Article && $event->getEntityInstance()->getTypeArticle() === GlobalConstants::ARTICLE_ACTUALITE) {
            $this->logService->write('Article', "Création", "Création d'une actualité : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Article && $event->getEntityInstance()->getTypeArticle() === GlobalConstants::ARTICLE_COMMUNIQUE_PRESSE) {
            $this->logService->write('Article', "Création", "Création d'un communiqué de presse : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Article && $event->getEntityInstance()->getTypeArticle() === GlobalConstants::ARTICLE_EVENEMENT) {
            $this->logService->write('Article', "Création", "Création d'un évènement : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Page) {
            $this->logService->write('Page', "Création", "Création d'une page : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Menu) {
            $this->logService->write('Menu', "Création", "Création d'un menu : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Media && $event->getEntityInstance()->getMediaType() === GlobalConstants::MEDIA_TYPE_PHOTO) {
            $this->logService->write('Média', "Création", "Création d'un média (photo) : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Media && $event->getEntityInstance()->getMediaType() === GlobalConstants::MEDIA_TYPE_DOCUMENT) {
            $this->logService->write('Média', "Création", "Création d'un média (Document) : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Job) {
            $this->logService->write('Offre emploi - Métier', "Création", "Création d'un métier : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof JobType) {
            $this->logService->write('Offre emploi - Type de contrat', "Création", "Création d'un type de contrat : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof JobOffer) {
            $this->logService->write('Offre emploi - Annonce', "Création", "Création d'une offre d'emploi : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof FaqTheme) {
            $this->logService->write('FAQ - Thème', "Création", "Création d'un thème de FAQ : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Faq) {
            $this->logService->write('FAQ', "Création", "Création d'une FAQ : ".$event->getEntityInstance()->getQuestion());
        }
    }


    /**
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function onPostUpdate(AfterEntityUpdatedEvent $event): void
    {
        /***************************************************************************************************************
         * Transformer DATA for BuilderElement
         ***************************************************************************************************************/
        if($event->getEntityInstance() instanceof Article || $event->getEntityInstance() instanceof Page || $event->getEntityInstance() instanceof HomePage || $event->getEntityInstance() instanceof PageOnglet) {
            foreach ($event->getEntityInstance()->getTranslations() as $entityTranslation) {
                foreach ($entityTranslation->getBuilderElementsFields() as $fieldName) {
                    $this->saveEntityWithBuilderElements($entityTranslation, $fieldName);
                }
            }
        }


        /***************************************************************************************************************
         * Log
         ***************************************************************************************************************/
        if($event->getEntityInstance() instanceof User) {
            $this->logService->write('Administrateur', "Modification", "Modification d'un administrateur : ".$event->getEntityInstance()->getFullname());
        }

        elseif($event->getEntityInstance() instanceof Category) {
            $this->logService->write('Article', "Modification", "Modification d'une catégorie : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Article && $event->getEntityInstance()->getTypeArticle() === GlobalConstants::ARTICLE_ACTUALITE) {
            $this->logService->write('Article', "Modification", "Modification d'une actualité : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Article && $event->getEntityInstance()->getTypeArticle() === GlobalConstants::ARTICLE_COMMUNIQUE_PRESSE) {
            $this->logService->write('Article', "Modification", "Modification d'un communiqué de presse : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Article && $event->getEntityInstance()->getTypeArticle() === GlobalConstants::ARTICLE_EVENEMENT) {
            $this->logService->write('Article', "Modification", "Modification d'un évènement : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof HomePage) {
            $this->logService->write('Page', "Modification", "Modification de la page d'accueil");
        }
        elseif($event->getEntityInstance() instanceof Page) {
            $this->logService->write('Page', "Modification", "Modification d'une page : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Menu) {
            $this->logService->write('Menu', "Modification", "Modification d'un menu : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Footer) {
            $this->logService->write('Footer', "Modification", "Modification du footer");
        }

        elseif($event->getEntityInstance() instanceof Media && $event->getEntityInstance()->getMediaType() === GlobalConstants::MEDIA_TYPE_PHOTO) {
            $this->logService->write('Média', "Modification", "Modification d'un média (photo) : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Media && $event->getEntityInstance()->getMediaType() === GlobalConstants::MEDIA_TYPE_DOCUMENT) {
            $this->logService->write('Média', "Modification", "Modification d'un média (Document) : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Job) {
            $this->logService->write('Offre emploi - Métier', "Modification", "Modification d'un métier : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof JobType) {
            $this->logService->write('Offre emploi - Type de contrat', "Modification", "Modification d'un type de contrat : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof JobOffer) {
            $this->logService->write('Offre emploi - Annonce', "Modification", "Modification d'une offre d'emploi : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof FaqTheme) {
            $this->logService->write('FAQ - Thème', "Modification", "Modification d'un thème de FAQ : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Faq) {
            $this->logService->write('FAQ', "Modification", "Modification d'une FAQ : ".$event->getEntityInstance()->getQuestion());
        }
    }

    /**
     * @throws TransportExceptionInterface
     * @throws RuntimeError
     * @throws LoaderError
     * @throws SyntaxError
     */
    public function onPreDelete(BeforeEntityDeletedEvent $event): void
    {
        /***************************************************************************************************************
         * Log
         ***************************************************************************************************************/
        if($event->getEntityInstance() instanceof User) {
            $this->logService->write('Administrateur', "Suppression", "Suppression d'un administrateur : ".$event->getEntityInstance()->getFullname());
        }
        elseif($event->getEntityInstance() instanceof Category) {
            $this->logService->write('Article', "Suppression", "Suppression d'une catégorie : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Article && $event->getEntityInstance()->getTypeArticle() === GlobalConstants::ARTICLE_ACTUALITE) {
            $this->logService->write('Article', "Suppression", "Suppression d'une actualité : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Article && $event->getEntityInstance()->getTypeArticle() === GlobalConstants::ARTICLE_COMMUNIQUE_PRESSE) {
            $this->logService->write('Article', "Suppression", "Suppression d'un communiqué de presse : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Article && $event->getEntityInstance()->getTypeArticle() === GlobalConstants::ARTICLE_EVENEMENT) {
            $this->logService->write('Article', "Suppression", "Suppression d'un évènement : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Page) {
            $this->logService->write('Page', "Suppression", "Suppression d'une page : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Menu) {
            $this->logService->write('Menu', "Suppression", "Suppression d'un menu : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Media && $event->getEntityInstance()->getMediaType() === GlobalConstants::MEDIA_TYPE_PHOTO) {
            $this->logService->write('Média', "Suppression", "Suppression d'un média (photo) : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Media && $event->getEntityInstance()->getMediaType() === GlobalConstants::MEDIA_TYPE_DOCUMENT) {
            $this->logService->write('Média', "Suppression", "Suppression d'un média (Document) : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof Job) {
            $this->logService->write('Offre emploi - Métier', "Suppression", "Suppression d'un métier : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof JobType) {
            $this->logService->write('Offre emploi - Type de contrat', "Suppression", "Suppression d'un type de contrat : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof JobOffer) {
            $this->logService->write('Offre emploi - Annonce', "Suppression", "Suppression d'une offre d'emploi : ".$event->getEntityInstance()->getTitle());
        }

        elseif($event->getEntityInstance() instanceof FaqTheme) {
            $this->logService->write('FAQ - Thème', "Suppression", "Modification d'un thème de FAQ : ".$event->getEntityInstance()->getTitle());
        }
        elseif($event->getEntityInstance() instanceof Faq) {
            $this->logService->write('FAQ', "Suppression", "Modification d'une FAQ : ".$event->getEntityInstance()->getQuestion());
        }
    }

    private function saveEntityWithBuilderElements($entity, string $fieldName): void
    {
        $this->entityWithBuilderElementsSaver->save($entity, $fieldName);
    }
}
