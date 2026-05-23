<?php
namespace App\EventListener;

use App\Entity\ArticleTranslation;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class ArticleTranslationListener
{
    /** @var EntityManagerInterface */
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @param ArticleTranslation $articleTranslation
     * @param LifecycleEventArgs $event
     */
    public function prePersist(ArticleTranslation $articleTranslation, LifecycleEventArgs $event)
    {
        $isPathAlreadyExist = $this->em->getRepository(ArticleTranslation::class)->findOneBy(['path' => $articleTranslation->getPath(), 'locale' => $articleTranslation->getLocale()]);
        if($isPathAlreadyExist instanceof ArticleTranslation) {
            $i_incremente = 0;
            $racine = $articleTranslation->getPath().'-';

            while($isPathAlreadyExist instanceof ArticleTranslation) {
                $i_incremente++;
                $path = $racine.$i_incremente;
                $isPathAlreadyExist = $this->em->getRepository(ArticleTranslation::class)->findOneBy(['path' => $path, 'locale' => $articleTranslation->getLocale()]);
            }
            $articleTranslation->setPath($path);
        }
    }
}
