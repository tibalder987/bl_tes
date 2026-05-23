<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Folder;
use App\Entity\FolderStar;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FolderStar>
 */
class FolderStarRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FolderStar::class);
    }

    /**
     * Find a star by folder and user
     */
    public function findByFolderAndUser(Folder $folder, User $user): ?FolderStar
    {
        return $this->createQueryBuilder('fs')
            ->where('fs.folder = :folder')
            ->andWhere('fs.user = :user')
            ->setParameter('folder', $folder)
            ->setParameter('user', $user)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Check if a folder is starred by a user
     */
    public function isStarredByUser(Folder $folder, User $user): bool
    {
        return $this->findByFolderAndUser($folder, $user) !== null;
    }

    /**
     * Find all starred folders for a user
     */
    public function findStarredFoldersByUser(User $user, int $limit = null, int $offset = 0): array
    {
        $qb = $this->createQueryBuilder('fs')
            ->innerJoin('fs.folder', 'f')
            ->where('fs.user = :user')
            ->andWhere('f.isTrashed = false')
            ->setParameter('user', $user)
            ->orderBy('fs.updatedAt', 'DESC');

        if ($limit !== null) {
            $qb->setMaxResults($limit)
                ->setFirstResult($offset);
        }

        $stars = $qb->getQuery()->getResult();

        return array_map(fn(FolderStar $star) => $star->getFolder(), $stars);
    }
}
