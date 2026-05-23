<?php
namespace App\EventListener;

use App\Entity\PageTranslation;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class PageTranslationListener
{
    /** @var EntityManagerInterface */
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @param PageTranslation $pageTranslation
     * @param LifecycleEventArgs $event
     */
    public function prePersist(PageTranslation $pageTranslation, LifecycleEventArgs $event)
    {
        $isPathAlreadyExist = $this->em->getRepository(PageTranslation::class)->findOneBy(['path' => $pageTranslation->getPath(), 'locale' => $pageTranslation->getLocale()]);
        if($isPathAlreadyExist instanceof PageTranslation) {
            $i_incremente = 0;
            $racine = $pageTranslation->getPath().'-';

            while($isPathAlreadyExist instanceof PageTranslation) {
                $i_incremente++;
                $path = $racine.$i_incremente;
                $isPathAlreadyExist = $this->em->getRepository(PageTranslation::class)->findOneBy(['path' => $path, 'locale' => $pageTranslation->getLocale()]);
            }
            $pageTranslation->setPath($path);
        }
    }
}