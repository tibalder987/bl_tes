<?php
namespace App\Service;

use App\Entity\Log;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class LogService
{
    /** @var EntityManagerInterface */
    private EntityManagerInterface $em;

    /** @var TokenStorageInterface */
    private TokenStorageInterface $tokenStorage;

    /**
     * DataHelper constructor.
     * @param EntityManagerInterface $em
     * @param TokenStorageInterface $tokenStorage
     */
    public function __construct(
        EntityManagerInterface $em,
        TokenStorageInterface $tokenStorage,
    ) {
        $this->em = $em;
        $this->tokenStorage = $tokenStorage;
    }

    /**
     * @param string $entity
     * @param string $action
     * @param string $message
     * @param User|null $user
     * @return bool
     */
    public function write(string $entity, string $action, string $message, ?User $user = null): bool
    {
        $source = null;
        if($this->tokenStorage->getToken() && $this->tokenStorage->getToken()->getUser()) {
            $source = $this->tokenStorage->getToken()->getUser()->getFullname()." (#".$this->tokenStorage->getToken()->getUser()->getId().")";
        } elseif ($user instanceof User) {
            $source = $user->getFullname()." (#".$user->getId().")";
        }

        $log = new Log();
        $log->setAction($action);
        $log->setEntity($entity);
        $log->setMessage(htmlentities($message));
        $log->setSource(htmlentities($source));
        $this->em->persist($log);
        $this->em->flush();

        return true;
    }
}
