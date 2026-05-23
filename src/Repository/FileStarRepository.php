<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\File;
use App\Entity\FileStar;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FileStar>
 */
class FileStarRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FileStar::class);
    }

    /**
     * Find a star by file and user
     */
    public function findByFileAndUser(File $file, User $user): ?FileStar
    {
        return $this->createQueryBuilder('fs')
            ->where('fs.file = :file')
            ->andWhere('fs.user = :user')
            ->setParameter('file', $file)
            ->setParameter('user', $user)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Check if a file is starred by a user
     */
    public function isStarredByUser(File $file, User $user): bool
    {
        return $this->findByFileAndUser($file, $user) !== null;
    }

    /**
     * Find all starred files for a user
     */
    public function findStarredFilesByUser(User $user, int $limit = null, int $offset = 0): array
    {
        $qb = $this->createQueryBuilder('fs')
            ->innerJoin('fs.file', 'f')
            ->where('fs.user = :user')
            ->andWhere('f.isTrashed = false')
            ->setParameter('user', $user)
            ->orderBy('fs.updatedAt', 'DESC');

        if ($limit !== null) {
            $qb->setMaxResults($limit)
                ->setFirstResult($offset);
        }

        $stars = $qb->getQuery()->getResult();

        return array_map(fn(FileStar $star) => $star->getFile(), $stars);
    }
}
