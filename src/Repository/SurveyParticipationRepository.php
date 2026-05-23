<?php

namespace App\Repository;

use App\Entity\SurveyParticipation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SurveyParticipation>
 *
 * @method SurveyParticipation|null find($id, $lockMode = null, $lockVersion = null)
 * @method SurveyParticipation|null findOneBy(array $criteria, array $orderBy = null)
 * @method SurveyParticipation[]    findAll()
 * @method SurveyParticipation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SurveyParticipationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SurveyParticipation::class);
    }

//    /**
//     * @return SurveyParticipation[] Returns an array of SurveyParticipation objects
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

//    public function findOneBySomeField($value): ?SurveyParticipation
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
