<?php

namespace App\Controller\Admin;

use App\Entity\BuilderRevision;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BuilderRevisionController extends AbstractController
{
    #[Route('/admin/builder-revisions', name: 'admin_builder_revisions')]
    public function list(Request $request, EntityManagerInterface $em, AdminUrlGenerator $adminUrlGenerator): Response
    {
        $entityClass = $request->query->get('entityClass');
        $entityId = $request->query->get('entityId');
        $crudControllerFqcn = $request->query->get('crudControllerFqcn');

        if (!$entityClass || !$entityId) {
            throw $this->createNotFoundException('Entity class or ID missing.');
        }

        $revisions = $em->getRepository(BuilderRevision::class)->findBy(
            ['entityClass' => $entityClass, 'entityId' => $entityId],
            ['createdAt' => 'DESC']
        );

        return $this->render('admin/builder_revisions/list.html.twig', [
            'revisions' => $revisions,
            'entityClass' => $entityClass,
            'entityId' => $entityId,
            'backUrl' => $adminUrlGenerator->setController($crudControllerFqcn)->setAction('index')->generateUrl()
        ]);
    }

    #[Route('/admin/builder-revisions/{id}/restore', name: 'admin_builder_revision_restore', methods: ['POST'])]
    public function restore(BuilderRevision $revision, Request $request, EntityManagerInterface $em, AdminUrlGenerator $adminUrlGenerator): Response
    {
        $entityClass = $revision->getEntityClass();
        $entityId = $revision->getEntityId();

        $entity = $em->getRepository($entityClass)->find($entityId);
        if (!$entity) {
            throw $this->createNotFoundException('Entity not found.');
        }

        // Use PropertyAccess to set the elements
        $accessor = \Symfony\Component\PropertyAccess\PropertyAccess::createPropertyAccessor();
        $accessor->setValue($entity, $revision->getFieldName(), $revision->getElements());

        $em->flush();

        $this->addFlash('success', 'La révision a été restaurée avec succès.');

        $crudControllerFqcn = $request->query->get('crudControllerFqcn');
        if ($crudControllerFqcn) {
            return $this->redirect($adminUrlGenerator->setController($crudControllerFqcn)->setAction('edit')->setEntityId($entityId)->generateUrl());
        }

        return $this->redirectToRoute('admin_builder_revisions', [
            'entityClass' => $entityClass,
            'entityId' => $entityId,
            'crudControllerFqcn' => $crudControllerFqcn,
        ]);
    }
}
