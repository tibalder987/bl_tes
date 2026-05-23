<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\NewsletterSubscriber;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<NewsletterSubscriber>
 *
 * @method NewsletterSubscriber|null find($id, $lockMode = null, $lockVersion = null)
 * @method NewsletterSubscriber|null findOneBy(array $criteria, array $orderBy = null)
 * @method NewsletterSubscriber[]    findAll()
 * @method NewsletterSubscriber[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsletterSubscriberRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NewsletterSubscriber::class);
    }

    public function findOneByEmail(string $email): ?NewsletterSubscriber
    {
        return $this->findOneBy(['email' => strtolower($email)]);
    }
}
