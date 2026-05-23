<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\File;
use App\Entity\FilePermission;
use App\Entity\Folder;
use App\Entity\Group;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FilePermission>
 */
class FilePermissionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FilePermission::class);
    }

    public function add(FilePermission $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FilePermission $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Find permissions for a file
     */
    public function findByFile(File $file): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.file = :file')
            ->setParameter('file', $file)
            ->orderBy('p.user', 'ASC')
            ->addOrderBy('p.role', 'ASC')
            ->addOrderBy('p.group', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Find permissions for a folder
     */
    public function findByFolder(Folder $folder): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.folder = :folder')
            ->setParameter('folder', $folder)
            ->orderBy('p.user', 'ASC')
            ->addOrderBy('p.role', 'ASC')
            ->addOrderBy('p.group', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Find user-specific permission for a resource
     */
    public function findUserPermission(User $user, File|Folder $resource): ?FilePermission
    {
        $qb = $this->createQueryBuilder('p')
            ->where('p.user = :user')
            ->setParameter('user', $user);

        if ($resource instanceof File) {
            $qb->andWhere('p.file = :resource')
                ->setParameter('resource', $resource);
        } else {
            $qb->andWhere('p.folder = :resource')
                ->setParameter('resource', $resource);
        }

        return $qb->getQuery()->getOneOrNullResult();
    }

    /**
     * Find role-specific permission for a resource
     */
    public function findRolePermission(string $role, File|Folder $resource): ?FilePermission
    {
        $qb = $this->createQueryBuilder('p')
            ->where('p.role = :role')
            ->setParameter('role', $role);

        if ($resource instanceof File) {
            $qb->andWhere('p.file = :resource')
                ->setParameter('resource', $resource);
        } else {
            $qb->andWhere('p.folder = :resource')
                ->setParameter('resource', $resource);
        }

        return $qb->getQuery()->getOneOrNullResult();
    }

    /**
     * Find all permissions for a user (for a specific resource or all)
     */
    public function findUserPermissions(User $user, ?File $file = null, ?Folder $folder = null): array
    {
        $qb = $this->createQueryBuilder('p')
            ->where('p.user = :user')
            ->setParameter('user', $user);

        if ($file !== null) {
            $qb->andWhere('p.file = :file')
                ->setParameter('file', $file);
        }

        if ($folder !== null) {
            $qb->andWhere('p.folder = :folder')
                ->setParameter('folder', $folder);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Find all permissions for a role
     */
    public function findRolePermissions(string $role, ?File $file = null, ?Folder $folder = null): array
    {
        $qb = $this->createQueryBuilder('p')
            ->where('p.role = :role')
            ->setParameter('role', $role);

        if ($file !== null) {
            $qb->andWhere('p.file = :file')
                ->setParameter('file', $file);
        }

        if ($folder !== null) {
            $qb->andWhere('p.folder = :folder')
                ->setParameter('folder', $folder);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Find group-specific permission for a resource
     */
    public function findGroupPermission(Group $group, File|Folder $resource): ?FilePermission
    {
        $qb = $this->createQueryBuilder('p')
            ->where('p.group = :group')
            ->setParameter('group', $group);

        if ($resource instanceof File) {
            $qb->andWhere('p.file = :resource')
                ->setParameter('resource', $resource);
        } else {
            $qb->andWhere('p.folder = :resource')
                ->setParameter('resource', $resource);
        }

        return $qb->getQuery()->getOneOrNullResult();
    }

    /**
     * Find all permissions for a group
     */
    public function findGroupPermissions(Group $group, ?File $file = null, ?Folder $folder = null): array
    {
        $qb = $this->createQueryBuilder('p')
            ->where('p.group = :group')
            ->setParameter('group', $group);

        if ($file !== null) {
            $qb->andWhere('p.file = :file')
                ->setParameter('file', $file);
        }

        if ($folder !== null) {
            $qb->andWhere('p.folder = :folder')
                ->setParameter('folder', $folder);
        }

        return $qb->getQuery()->getResult();
    }
}
