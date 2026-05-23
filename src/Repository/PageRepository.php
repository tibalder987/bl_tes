<?php

namespace App\Repository;

use App\Entity\Page;
use App\Entity\PageTranslation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Page>
 *
 * @method Page|null find($id, $lockMode = null, $lockVersion = null)
 * @method Page|null findOneBy(array $criteria, array $orderBy = null)
 * @method Page[]    findAll()
 * @method Page[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Page::class);
    }

    public function add(Page $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Page $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function searchBySlugLocale(string $slug, string $locale)
    {
        $row = $this->getEntityManager()->createQueryBuilder()
            ->select('IDENTITY(pt.translatable) AS tid')
            ->from(PageTranslation::class, 'pt')
            ->where('pt.path = :path')
            ->andWhere('pt.locale = :locale')
            ->setParameter('path', $slug)
            ->setParameter('locale', $locale)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        $pageId = $this->extractTranslationTranslatableId($row);
        if ($pageId === null) {
            return null;
        }

        return $this->findOneByIdEagerAllTranslations($pageId);
    }

    /**
     * Page builder : une traduction a ce segment d’URL (slug).
     * Important : ne pas filtrer `JOIN translations` sur le path, sinon Doctrine n’hydrate
     * qu’une partie de la collection (ex. seulement le FR) et les autres locales disparaissent.
     */
    public function findOneByAnyTranslationPath(string $path): ?Page
    {
        $row = $this->getEntityManager()->createQueryBuilder()
            ->select('IDENTITY(pt.translatable) AS tid')
            ->from(PageTranslation::class, 'pt')
            ->where('pt.path = :path')
            ->setParameter('path', $path)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        $pageId = $this->extractTranslationTranslatableId($row);
        if ($pageId === null) {
            return null;
        }

        return $this->findOneByIdEagerAllTranslations($pageId);
    }

    /**
     * @param array<string, mixed>|null $row
     */
    private function extractTranslationTranslatableId(?array $row): ?int
    {
        if ($row === null) {
            return null;
        }
        $tid = $row['tid'] ?? $row['TID'] ?? null;
        if ($tid === null && isset($row[0])) {
            $tid = $row[0];
        }
        if ($tid === null) {
            return null;
        }

        return (int) $tid;
    }

    private function findOneByIdEagerAllTranslations(int $id): ?Page
    {
        return $this->createQueryBuilder('p')
            ->select('p', 'pt')
            ->join('p.translations', 'pt')
            ->where('p.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Slug canonique pour une locale (lien FR/EN, bascule de langue).
     * La locale est comparée de façon souple (en / EN / en_US) car EasyAdmin / A2lix peuvent varier.
     */
    public function getTranslationPathForLocale(Page $page, string $locale): ?string
    {
        $requested = strtolower(trim($locale));
        $requestedShort = strlen($requested) >= 2 ? substr($requested, 0, 2) : $requested;

        foreach ($page->getTranslations() as $translation) {
            if (!$translation instanceof PageTranslation) {
                continue;
            }
            $tl = strtolower(trim((string) $translation->getLocale()));
            $matches =
                $tl === $requested
                || $tl === $requestedShort
                || str_starts_with($tl, $requestedShort . '_');
            if (!$matches) {
                continue;
            }
            $path = $translation->getPath();
            if (\is_string($path) && $path !== '') {
                return $path;
            }
        }

        return null;
    }

    public function searchByQuery($search, $locale, ?int $limit = null)
    {
        $queryBuilder = $this->createQueryBuilder('p')
            ->select('p', 'pt')
            ->join('p.translations', 'pt')
            ->where("pt.locale = :locale")->setParameter('locale', $locale)
            ->andWhere('p.active = TRUE')
            ->addOrderBy('p.createdAt', 'DESC');

        if ($search !== "") {
            $A_search = explode(' ', $search);
            foreach ($A_search as $key => $keyword) {
                $name = "search_" . $key;
                $queryBuilder
                    ->andWhere("pt.title LIKE :" . $name . " or pt.description LIKE :" . $name)
                    ->setParameter($name, '%' . $keyword . '%');
            }
        }

        if ($limit) {
            $queryBuilder->setMaxResults($limit);
        }

        return $queryBuilder
            ->getQuery()
            ->getResult();
    }
}
