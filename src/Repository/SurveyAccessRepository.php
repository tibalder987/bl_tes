<?php

namespace App\Repository;

use App\Entity\SurveyAccess;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SurveyAccess>
 *
 * @method SurveyAccess|null find($id, $lockMode = null, $lockVersion = null)
 * @method SurveyAccess|null findOneBy(array $criteria, array $orderBy = null)
 * @method SurveyAccess[]    findAll()
 * @method SurveyAccess[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SurveyAccessRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SurveyAccess::class);
    }

//    /**
//     * @return SurveyAccess[] Returns an array of SurveyAccess objects
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

//    public function findOneBySomeField($value): ?SurveyAccess
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
