<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\File;
use App\Repository\FileRepository;
use App\Service\FilePermissionChecker;
use App\Service\FileStorageService;
use App\Service\LogService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/files/{id<\d+>}', name: 'api_files_download_')]
#[IsGranted('ROLE_USER')]
class FileDownloadApiController extends AbstractController
{
    public function __construct(
        private readonly FileRepository $fileRepository,
        private readonly FileStorageService $storageService,
        private readonly FilePermissionChecker $permissionChecker,
        private readonly LogService $logService
    ) {}

    /**
     * Download a file (with permission check)
     */
    #[Route('/download', name: 'download', methods: ['GET'])]
    public function download(int $id): Response
    {
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        $file = $this->fileRepository->find($id);

        if (!$file) {
            return $this->json(['error' => 'Fichier non trouvé'], Response::HTTP_NOT_FOUND);
        }

        // Check permissions
        if (!$this->permissionChecker->canDownload($user, $file)) {
            throw $this->createAccessDeniedException();
        }

        // Get file path
        $filePath = $this->storageService->getFilePath($file->getPath());

        if (!file_exists($filePath)) {
            return $this->json(['error' => 'Fichier introuvable sur le serveur'], Response::HTTP_NOT_FOUND);
        }

        // Create response
        $response = new BinaryFileResponse($filePath);
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $file->getName()
        );

        // Set content type
        if ($file->getMimeType()) {
            $response->headers->set('Content-Type', $file->getMimeType());
        }

        // Log le téléchargement
        /*$this->logService->write(
            'File Manager',
            'Téléchargement',
            sprintf('Fichier "%s" téléchargé (%s)', $file->getName(), $file->getFormattedSize()),
            $user
        );*/

        return $response;
    }

    /**
     * Preview a file (with permission check)
     */
    #[Route('/preview', name: 'preview', methods: ['GET'])]
    public function preview(int $id): Response
    {
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        $file = $this->fileRepository->find($id);

        if (!$file) {
            return $this->json(['error' => 'Fichier non trouvé'], Response::HTTP_NOT_FOUND);
        }

        // Check permissions (use canView for preview)
        if (!$this->permissionChecker->canView($user, $file)) {
            throw $this->createAccessDeniedException();
        }

        // Get file path
        $filePath = $this->storageService->getFilePath($file->getPath());

        if (!file_exists($filePath)) {
            return $this->json(['error' => 'Fichier introuvable sur le serveur'], Response::HTTP_NOT_FOUND);
        }

        // Create response for preview (inline)
        $response = new BinaryFileResponse($filePath);
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_INLINE,
            $file->getName()
        );

        // Set content type
        if ($file->getMimeType()) {
            $response->headers->set('Content-Type', $file->getMimeType());
        }

        // Log la prévisualisation
        /*$this->logService->write(
            'File Manager',
            'Prévisualisation',
            sprintf('Fichier "%s" prévisualisé', $file->getName()),
            $user
        );*/

        return $response;
    }
}
