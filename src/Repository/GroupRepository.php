<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Group;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Group>
 */
class GroupRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Group::class);
    }

    /**
     * Find all groups ordered by label
     */
    public function findAllOrderedByLabel(): array
    {
        return $this->createQueryBuilder('g')
            ->orderBy('g.label', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
