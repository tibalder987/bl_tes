<?php

namespace App\Repository;

use App\Entity\SurveyParticipationDetail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SurveyParticipationDetail>
 *
 * @method SurveyParticipationDetail|null find($id, $lockMode = null, $lockVersion = null)
 * @method SurveyParticipationDetail|null findOneBy(array $criteria, array $orderBy = null)
 * @method SurveyParticipationDetail[]    findAll()
 * @method SurveyParticipationDetail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SurveyParticipationDetailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SurveyParticipationDetail::class);
    }

//    /**
//     * @return SurveyParticipationDetail[] Returns an array of SurveyParticipationDetail objects
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

//    public function findOneBySomeField($value): ?SurveyParticipationDetail
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
