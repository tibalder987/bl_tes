<?php

namespace App\Repository;

use App\Entity\ServiceContact;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ServiceContact>
 *
 * @method ServiceContact|null find($id, $lockMode = null, $lockVersion = null)
 * @method ServiceContact|null findOneBy(array $criteria, array $orderBy = null)
 * @method ServiceContact[]    findAll()
 * @method ServiceContact[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ServiceContactRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ServiceContact::class);
    }

    //    /**
    //     * @return ServiceContact[] Returns an array of ServiceContact objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('s.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?ServiceContact
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findOneActiveBySlug(string $slug): ?ServiceContact
    {
        $slug = strtolower(trim($slug));
        if ($slug === '') {
            return null;
        }

        return $this->findOneBy(['slug' => $slug, 'active' => true]);
    }
}
