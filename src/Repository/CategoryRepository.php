<?php
namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Category::class);
    }

    public function getCategoriesTranslationOrder($locale = "fr"): array
    {
        return $this->createQueryBuilder('c')
            ->select('c', 'ct')
            ->join('c.translations', 'ct')
            ->where("ct.locale = :locale")->setParameter('locale', $locale)
            ->andWhere('c.active = TRUE')
            ->orderBy('ct.title', 'ASC')
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findBySlug($slug, $locale = "fr")
    {
        return $this->createQueryBuilder('c')
            ->select('c', 'ct')
            ->join('c.translations', 'ct')
            ->where("ct.locale = :locale")->setParameter('locale', $locale)
            ->andWhere('c.active = TRUE')
            ->andWhere('ct.path = :slug')->setParameter('slug', $slug)
            ->orderBy('ct.title', 'ASC')
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
}
