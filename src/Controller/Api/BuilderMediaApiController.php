<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\File;
use App\Entity\User;
use App\Repository\FileRepository;
use App\Service\FilePermissionChecker;
use App\Service\FileStorageService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/builder', name: 'api_builder_')]
#[IsGranted('ROLE_ADMIN')] // Seuls les admins peuvent utiliser le builder
class BuilderMediaApiController extends AbstractController
{
    public function __construct(
        private readonly FileRepository $fileRepository,
        private readonly FilePermissionChecker $permissionChecker,
        private readonly FileStorageService $storageService,
        private readonly EntityManagerInterface $em,
        #[Autowire('%kernel.project_dir%')]
        private readonly string $projectDir
    ) {}

    /**
     * Copier un fichier du file-manager vers le dossier builder
     */
    #[Route('/copy-media', name: 'copy_media', methods: ['POST'])]
    public function copyMedia(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $data = json_decode($request->getContent(), true);
        $fileId = $data['fileId'] ?? null;

        if (!$fileId) {
            return $this->json(['error' => 'File ID manquant'], Response::HTTP_BAD_REQUEST);
        }

        // 1. Récupérer le fichier depuis le file-manager
        $file = $this->fileRepository->find($fileId);
        if (!$file) {
            return $this->json(['error' => 'Fichier introuvable'], Response::HTTP_NOT_FOUND);
        }

        // 2. Vérifier les permissions (l'admin peut-il voir ce fichier ?)
        if (!$this->permissionChecker->canView($user, $file)) {
            return $this->json(['error' => 'Accès refusé à ce fichier'], Response::HTTP_FORBIDDEN);
        }

        // 3. Vérifier que c'est bien une image
        if (!str_starts_with($file->getMimeType() ?? '', 'image/')) {
            return $this->json(['error' => 'Le fichier doit être une image (jpg, png)'], Response::HTTP_BAD_REQUEST);
        }

        // 4. Copier le fichier physique
        $sourcePath = $this->storageService->getFilePath($file->getPath());

        if (!file_exists($sourcePath)) {
            return $this->json(['error' => 'Fichier source introuvable sur le disque'], Response::HTTP_NOT_FOUND);
        }

        // Générer un nouveau nom unique
        $extension = $file->getExtension() ?: pathinfo($file->getName(), PATHINFO_EXTENSION);
        $newFileName = 'builder_' . uniqid('', true) . '.' . $extension;
        $builderDir = $this->projectDir . '/public/uploads/builder/';

        // Créer le dossier si nécessaire
        if (!is_dir($builderDir)) {
            if (!mkdir($builderDir, 0755, true) && !is_dir($builderDir)) {
                return $this->json(['error' => 'Impossible de créer le dossier de destination'], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        }

        $destinationPath = $builderDir . $newFileName;

        // Copier le fichier
        try {
            if (!copy($sourcePath, $destinationPath)) {
                return $this->json(['error' => 'Erreur lors de la copie du fichier'], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        } catch (\Exception $e) {
            return $this->json([
                'error' => 'Erreur lors de la copie: ' . $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        // 5. Retourner l'URL
        $publicUrl = '/uploads/builder/' . $newFileName;

        return $this->json([
            'success' => true,
            'url' => $publicUrl,
            'fileName' => $newFileName,
            'originalName' => $file->getName(),
            'size' => filesize($destinationPath)
        ]);
    }
}
