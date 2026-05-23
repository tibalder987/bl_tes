<?php
namespace App\EventListener;

use App\Entity\User;
use App\Service\LogService;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class UserListener
{
    /**
     * @param EntityManagerInterface $em
     * @param LogService $logService
     */
    public function __construct(private readonly EntityManagerInterface $em,
                                private readonly LogService $logService) {
    }

    public function postUpdate(LifecycleEventArgs $event): void
    {
        if (!$event->getObject() instanceof User) {
            return;
        }
        $arrayChangeSet = $this->em->getUnitOfWork()->getEntityChangeSet($event->getObject());
        if (array_key_exists('active', $arrayChangeSet)) {
            if($arrayChangeSet['active'][0] === true && $arrayChangeSet['active'][1] === false) {
                $this->logService->write('Administrateur', "Modification", "Désactivation d'un administrateur : ".$event->getObject()->getFullName());
            } elseif ($arrayChangeSet['active'][0] === false && $arrayChangeSet['active'][1] === true) {
                $this->logService->write('Administrateur', "Modification", "Activation d'un administrateur : ".$event->getObject()->getFullName());
            }
        }
    }
}
