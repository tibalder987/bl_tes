<?php
namespace App\Repository;

use App\Entity\Article;
use App\Entity\Media;
use App\Entity\MediaDocumentType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Article>
 *
 * @method Media|null find($id, $lockMode = null, $lockVersion = null)
 * @method Media|null findOneBy(array $criteria, array $orderBy = null)
 * @method Media[]    findAll()
 * @method Media[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MediaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Media::class);
    }

    public function add(Media $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Media $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function searchByMediaTypeMediaTypeDocument(int $mediaTypeID, ?MediaDocumentType $mediaDocumentType)
    {
        $queryBuilder = $this->createQueryBuilder('m')
            ->select('m')
            ->where("m.mediaType = :mediaTypeID")->setParameter('mediaTypeID', $mediaTypeID)
            ->addOrderBy('m.createdAt', 'DESC')
        ;

        if($mediaDocumentType instanceof MediaDocumentType) {
            $queryBuilder
                ->join('m.mediaDocumentType', 'mdt')
                ->andWhere('mdt.id = :mediaDocumentTypeID')
                ->setParameter('mediaDocumentTypeID', $mediaDocumentType->getId())
            ;
        }

        return $queryBuilder
            ->getQuery()
            ->getResult();
    }
}
