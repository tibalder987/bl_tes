<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\File;
use App\Entity\Folder;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<File>
 */
class FileRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, File::class);
    }

    public function add(File $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(File $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Find files in a folder (not trashed)
     */
    public function findByFolder(?Folder $folder, ?User $user = null, int $limit = null, int $offset = 0): array
    {
        $qb = $this->createQueryBuilder('f')
            ->where('f.isTrashed = false')
            ->orderBy('f.createdAt', 'DESC');

        if ($folder === null) {
            $qb->andWhere('f.parentFolder IS NULL');
        } else {
            $qb->andWhere('f.parentFolder = :folder')
                ->setParameter('folder', $folder);
        }

        /*if ($user !== null) {
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
     * Find trashed files for a user (only root items - those whose parent is not trashed)
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
     * Find trashed files in a folder (for browsing trashed folders)
     */
    public function findTrashedInFolder(?Folder $folder, User $user, int $limit = null, int $offset = 0): array
    {
        $qb = $this->createQueryBuilder('f')
            ->where('f.isTrashed = true')
            ->andWhere('f.owner = :user')
            ->setParameter('user', $user);

        if ($folder === null) {
            $qb->andWhere('f.parentFolder IS NULL');
        } else {
            $qb->andWhere('f.parentFolder = :folder')
                ->setParameter('folder', $folder);
        }

        $qb->orderBy('f.deletedAt', 'DESC');

        if ($limit !== null) {
            $qb->setMaxResults($limit)
                ->setFirstResult($offset);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Search files by name
     * If folder is provided, searches recursively in that folder and all its subfolders
     */
    public function search(string $query, ?User $user = null, ?Folder $folder = null, int $limit = null, int $offset = 0): array
    {
        $qb = $this->createQueryBuilder('f')
            ->where('f.isTrashed = false')
            ->andWhere('f.name LIKE :query OR f.originalName LIKE :query')
            ->setParameter('query', '%' . $query . '%')
            ->orderBy('f.createdAt', 'DESC');

        /* if ($user !== null) {
            $qb->andWhere('f.owner = :user')
                ->setParameter('user', $user);
        }*/

        if ($folder !== null) {
            // Récupérer tous les dossiers descendants (récursif)
            $folderRepository = $this->getEntityManager()->getRepository(\App\Entity\Folder::class);
            $allFolders = $folderRepository->getFolderTree($folder);
            $folderIds = array_map(fn($f) => $f->getId(), $allFolders);

            // Chercher dans le dossier parent et tous ses descendants
            $qb->andWhere('f.parentFolder IN (:folders)')
                ->setParameter('folders', $folderIds);
        } else {
            // Si pas de folder, chercher uniquement à la racine
            $qb->andWhere('f.parentFolder IS NULL');
        }

        if ($limit !== null) {
            $qb->setMaxResults($limit)
                ->setFirstResult($offset);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Count files in a folder
     */
    public function countByFolder(?Folder $folder, ?User $user = null): int
    {
        $qb = $this->createQueryBuilder('f')
            ->select('COUNT(f.id)')
            ->where('f.isTrashed = false');

        if ($folder === null) {
            $qb->andWhere('f.parentFolder IS NULL');
        } else {
            $qb->andWhere('f.parentFolder = :folder')
                ->setParameter('folder', $folder);
        }

        if ($user !== null) {
            $qb->andWhere('f.owner = :user')
                ->setParameter('user', $user);
        }

        return (int) $qb->getQuery()->getSingleScalarResult();
    }
}
