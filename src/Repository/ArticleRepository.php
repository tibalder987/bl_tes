<?php
namespace App\Repository;

use App\Entity\Article;
use App\Entity\Category;
use App\Utilities\GlobalConstants;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Article>
 *
 * @method Article|null find($id, $lockMode = null, $lockVersion = null)
 * @method Article|null findOneBy(array $criteria, array $orderBy = null)
 * @method Article[]    findAll()
 * @method Article[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArticleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Article::class);
    }

    public function add(Article $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Article $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function searchByTypeCategory(int $typeArticleID, ?Category $category, $search, $locale, ?int $limit = null)
    {
        $queryBuilder = $this->createQueryBuilder('a')
            ->select('a', 'at')
            ->join('a.translations', 'at')
            ->where("at.locale = :locale")->setParameter('locale', $locale)
            ->andWhere("a.typeArticle = :typeArticleID")->setParameter('typeArticleID', $typeArticleID)
            ->andWhere('a.active = TRUE')
            ->addOrderBy('a.ahead', 'DESC')
            ->addOrderBy('a.dateSchedule', 'DESC')
        ;

        /***************************************************************************************************************
         * IF Article = Actualité => La dateshedule est une date de programmation dans le futur
         ***************************************************************************************************************/
        if($typeArticleID === GlobalConstants::ARTICLE_ACTUALITE) {
            $date = new DateTime();
            $queryBuilder
                ->andWhere("a.dateSchedule <= :date")->setParameter('date', $date)
            ;
        }

        if($category instanceof Category) {
            $queryBuilder
                ->join('a.categories', 'c')
                ->andWhere('c.id = :categoryID')
                ->setParameter('categoryID', $category->getId())
            ;
        }

        if($search !== "") {
            $A_search = explode(' ', $search);
            foreach ($A_search as $key => $keyword) {
                $name = "search_".$key;
                $queryBuilder
                    ->andWhere("at.title LIKE :".$name." or at.description LIKE :".$name)
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

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function searchBySlugTypeLocale(string $slug, int $typeArticleID, string $locale)
    {
        $queryBuilder = $this->createQueryBuilder('a')
            ->select('a', 'at')
            ->join('a.translations', 'at')
            ->where("at.locale = :locale")->setParameter('locale', $locale)
            ->andWhere("at.path = :path")->setParameter('path', $slug)
            ->andWhere("a.typeArticle = :typeArticleID")->setParameter('typeArticleID', $typeArticleID)
        ;

        return $queryBuilder
            ->getQuery()
            ->getSingleResult();
    }

    public function getLastArticles(int $typeArticleID, bool $ahead, int $limit = 10)
    {
        $queryBuilder = $this->createQueryBuilder('a')
            ->select('a')
            ->andWhere("a.typeArticle = :typeArticleID")->setParameter('typeArticleID', $typeArticleID)
            ->andWhere("a.ahead = :ahead")->setParameter('ahead', $ahead)
            ->orderBy('a.dateSchedule', 'DESC')
        ;

        if($typeArticleID === GlobalConstants::ARTICLE_ACTUALITE) {
            $date = new DateTime();
            $queryBuilder
                ->andWhere("a.dateSchedule <= :date")->setParameter('date', $date)
            ;
        }

        return $queryBuilder->setMaxResults($limit)->getQuery()->getResult();
    }
}
