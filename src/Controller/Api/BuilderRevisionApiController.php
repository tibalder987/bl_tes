<?php

namespace App\Controller\Api;

use App\Entity\BuilderRevision;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class BuilderRevisionApiController extends AbstractController
{
    #[Route('/admin/api/builder-revisions', name: 'api_builder_revisions', methods: ['GET'])]
    public function getRevisions(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $entityClass = $request->query->get('entityClass');
        $entityId = $request->query->get('entityId');

        if (!$entityClass || !$entityId) {
            return new JsonResponse(['error' => 'Missing entityClass or entityId'], 400);
        }

        $revisions = $em->getRepository(BuilderRevision::class)->findBy(
            ['entityClass' => $entityClass, 'entityId' => $entityId],
            ['createdAt' => 'DESC']
        );

        $data = array_map(function (BuilderRevision $revision) {
            return [
                'id' => $revision->getId(),
                'createdAt' => $revision->getCreatedAt()->format('Y-m-d H:i:s'),
                'author' => $revision->getAuthor() ? $revision->getAuthor()->getFullname() : 'Système/Auto',
                'elements' => $revision->getElements(),
            ];
        }, $revisions);

        return new JsonResponse($data);
    }
}
