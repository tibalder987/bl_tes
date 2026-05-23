<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Folder;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Folder>
 */
class FolderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Folder::class);
    }

    public function add(Folder $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Folder $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Find root folders (no parent)
     */
    public function findRootFolders(?User $user = null, int $limit = null, int $offset = 0): array
    {
        $qb = $this->createQueryBuilder('f')
            ->where('f.parentFolder IS NULL')
            ->andWhere('f.isTrashed = false')
            ->orderBy('f.name', 'ASC');

        if ($user !== null) {
            $qb->andWhere('f.owner = :user')
                ->setParameter('user', $user);
        }

        if ($limit !== null) {
            $qb->setMaxResults($limit)
                ->setFirstResult($offset);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Find folders in a parent folder
     */
    public function findByParentFolder(?Folder $parentFolder, ?User $user = null, int $limit = null, int $offset = 0): array
    {
        $qb = $this->createQueryBuilder('f')
            ->where('f.isTrashed = false')
            ->orderBy('f.name', 'ASC');

        if ($parentFolder === null) {
            $qb->andWhere('f.parentFolder IS NULL');
        } else {
            $qb->andWhere('f.parentFolder = :parent')
                ->setParameter('parent', $parentFolder);
        }

        /* if ($user !== null) {
            $qb->andWhere('f.owner = :user')
                ->setParameter('user', $user);
        }*/

        if ($limit !== null) {
            $qb->setMaxResults($limit)
                ->setFirstResult($offset);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Find trashed folders for a user (only root items - those whose parent is not trashed)
     */
    public function findTrashed(User $user, int $limit = null, int $offset = 0): array
    {
        $qb = $this->createQueryBuilder('f')
            ->leftJoin('f.parentFolder', 'p')
            ->where('f.isTrashed = true')
            ->andWhere('f.owner = :user')
            ->andWhere('(p.id IS NULL OR p.isTrashed = false)')
            ->setParameter('user', $user)
            ->orderBy('f.deletedAt', 'DESC');

        if ($limit !== null) {
            $qb->setMaxResults($limit)
                ->setFirstResult($offset);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Find trashed folders in a parent folder (for browsing trashed folders)
     */
    public function findTrashedInFolder(?Folder $parentFolder, User $user, int $limit = null, int $offset = 0): array
    {
        $qb = $this->createQueryBuilder('f')
            ->where('f.isTrashed = true')
            ->andWhere('f.owner = :user')
            ->setParameter('user', $user);

        if ($parentFolder === null) {
            $qb->andWhere('f.parentFolder IS NULL');
        } else {
            $qb->andWhere('f.parentFolder = :parent')
                ->setParameter('parent', $parentFolder);
        }

        $qb->orderBy('f.deletedAt', 'DESC');

        if ($limit !== null) {
            $qb->setMaxResults($limit)
                ->setFirstResult($offset);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Search folders by name
     * If parentFolder is provided, searches recursively in that folder and all its subfolders
     */
    public function search(string $query, ?User $user = null, ?Folder $parentFolder = null, int $limit = null, int $offset = 0): array
    {
        $isAdmin = in_array('ROLE_ADMIN', $user->getRoles(), true);

        $qb = $this->createQueryBuilder('f')
            ->where('f.isTrashed = false')
            ->andWhere('f.name LIKE :query')
            ->setParameter('query', '%' . $query . '%')
            ->orderBy('f.name', 'ASC');

        if ($user !== null && !$isAdmin) {
            $qb->andWhere('f.owner = :user')
                ->setParameter('user', $user);
        }

        if ($parentFolder !== null) {
            // Récupérer tous les dossiers descendants (récursif)
            $allFolders = $this->getFolderTree($parentFolder);
            $folderIds = array_map(fn($f) => $f->getId(), $allFolders);

            // Chercher dans le dossier parent et tous ses descendants
            $qb->andWhere('f.parentFolder IN (:folders) OR f.id = :parentId')
                ->setParameter('folders', $folderIds)
                ->setParameter('parentId', $parentFolder->getId());
        } else {
            // Si pas de parentFolder, chercher uniquement à la racine
            $qb->andWhere('f.parentFolder IS NULL');
        }

        if ($limit !== null) {
            $qb->setMaxResults($limit)
                ->setFirstResult($offset);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Find folder by slug
     */
    public function findBySlug(string $slug): ?Folder
    {
        return $this->createQueryBuilder('f')
            ->where('f.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Check if slug exists (excluding current folder)
     */
    public function slugExists(string $slug, ?Folder $excludeFolder = null): bool
    {
        $qb = $this->createQueryBuilder('f')
            ->select('COUNT(f.id)')
            ->where('f.slug = :slug')
            ->setParameter('slug', $slug);

        if ($excludeFolder !== null) {
            $qb->andWhere('f.id != :excludeId')
                ->setParameter('excludeId', $excludeFolder->getId());
        }

        return (int) $qb->getQuery()->getSingleScalarResult() > 0;
    }

    /**
     * Get folder tree (all descendants)
     */
    public function getFolderTree(Folder $folder): array
    {
        $tree = [$folder];
        $children = $this->findByParentFolder($folder);

        foreach ($children as $child) {
            $tree = array_merge($tree, $this->getFolderTree($child));
        }

        return $tree;
    }
}
