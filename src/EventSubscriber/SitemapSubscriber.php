<?php
namespace App\EventSubscriber;

use App\Entity\Article;
use App\Entity\JobOffer;
use App\Entity\Page;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Presta\SitemapBundle\Event\SitemapPopulateEvent;
use Presta\SitemapBundle\Service\UrlContainerInterface;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;

class SitemapSubscriber implements EventSubscriberInterface
{
    public function __construct(private readonly EntityManagerInterface$em) {
    }

    /**
     * @inheritdoc
     */
    public static function getSubscribedEvents(): array
    {
        return [
            SitemapPopulateEvent::class => 'populate',
        ];
    }

    /**
     * @param SitemapPopulateEvent $event
     */
    public function populate(SitemapPopulateEvent $event): void
    {
        $this->registerArticlesUrls($event->getUrlContainer(), $event->getUrlGenerator());
    }

    /**
     * @param UrlContainerInterface $urls
     * @param UrlGeneratorInterface $router
     */
    public function registerArticlesUrls(UrlContainerInterface $urls, UrlGeneratorInterface $router): void
    {
        $news = $this->em->getRepository(Article::class)->searchByTypeCategory(GlobalConstants::ARTICLE_ACTUALITE, null, "", "fr");
        foreach ($news as $new) {
            $url = new UrlConcrete(
                $router->generate(
                    'app_article_actualite_detail',
                    ['slug' => $new->getPath()],
                    UrlGeneratorInterface::ABSOLUTE_URL
                )
            );
            $urls->addUrl(
                $url->setLastmod($new->getUpdatedAt()),
                'news'
            );
        }

        $communiques = $this->em->getRepository(Article::class)->searchByTypeCategory(GlobalConstants::ARTICLE_COMMUNIQUE_PRESSE, null, "", "fr");
        foreach ($communiques as $communique) {
            $url = new UrlConcrete(
                $router->generate(
                    'app_article_communique_detail',
                    ['slug' => $communique->getPath()],
                    UrlGeneratorInterface::ABSOLUTE_URL
                )
            );
            $urls->addUrl(
                $url->setLastmod($communique->getUpdatedAt()),
                'communiques'
            );
        }

        $events = $this->em->getRepository(Article::class)->searchByTypeCategory(GlobalConstants::ARTICLE_EVENEMENT, null, "", "fr");
        foreach ($events as $event) {
            $url = new UrlConcrete(
                $router->generate(
                    'app_article_evenement_detail',
                    ['slug' => $event->getPath()],
                    UrlGeneratorInterface::ABSOLUTE_URL
                )
            );
            $urls->addUrl(
                $url->setLastmod($event->getUpdatedAt()),
                'events'
            );
        }

        $offres = $this->em->getRepository(JobOffer::class)->findBy(['active' => true]);
        foreach ($offres as $offre) {
            $url = new UrlConcrete(
                $router->generate(
                    'app_job_offer',
                    ['offer' => $offre->getId()],
                    UrlGeneratorInterface::ABSOLUTE_URL
                )
            );
            $urls->addUrl(
                $url->setLastmod($offre->getUpdatedAt()),
                'jobs'
            );
        }

        $pages = $this->em->getRepository(Page::class)->findBy(['active' => true]);
        foreach ($pages as $page) {
            $url = new UrlConcrete(
                $router->generate(
                    'app_content_page',
                    ['slug' => $page->getPath()],
                    UrlGeneratorInterface::ABSOLUTE_URL
                )
            );
            $urls->addUrl(
                $url->setLastmod($page->getUpdatedAt()),
                'pages'
            );
        }
    }
}
