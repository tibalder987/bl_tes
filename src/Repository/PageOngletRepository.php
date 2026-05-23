<?php

namespace App\Repository;

use App\Entity\PageOnglet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PageOnglet>
 *
 * @method PageOnglet|null find($id, $lockMode = null, $lockVersion = null)
 * @method PageOnglet|null findOneBy(array $criteria, array $orderBy = null)
 * @method PageOnglet[]    findAll()
 * @method PageOnglet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PageOngletRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PageOnglet::class);
    }

//    /**
//     * @return PageOnglet[] Returns an array of PageOnglet objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PageOnglet
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
