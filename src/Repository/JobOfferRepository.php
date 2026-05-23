<?php

namespace App\Repository;

use App\Entity\JobOffer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<JobOffer>
 *
 * @method JobOffer|null find($id, $lockMode = null, $lockVersion = null)
 * @method JobOffer|null findOneBy(array $criteria, array $orderBy = null)
 * @method JobOffer[]    findAll()
 * @method JobOffer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class JobOfferRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, JobOffer::class);
    }

    public function searchByQuery($search, $locale, ?int $limit = null)
    {
        $queryBuilder = $this->createQueryBuilder('j')
            ->select('j', 'jt')
            ->join('j.translations', 'jt')
            ->where("jt.locale = :locale")->setParameter('locale', $locale)
            ->andWhere('j.active = TRUE')
            ->addOrderBy('j.createdAt', 'DESC')
        ;

        if($search !== "") {
            $A_search = explode(' ', $search);
            foreach ($A_search as $key => $keyword) {
                $name = "search_".$key;
                $queryBuilder
                    ->andWhere("jt.title LIKE :".$name." or jt.presentation LIKE :".$name)
                    ->setParameter($name, '%'.$keyword.'%');
            }
        }

        if($limit) {
            $queryBuilder->setMaxResults($limit);
        }

        return $queryBuilder
            ->getQuery()
            ->getResult();
    }
}
