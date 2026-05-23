<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\File;
use App\Entity\Folder;
use App\Entity\User;
use App\Repository\FileRepository;
use App\Repository\FileStarRepository;
use App\Repository\FolderRepository;
use App\Repository\FolderStarRepository;
use App\Service\FileManagerService;
use App\Service\FilePermissionChecker;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Attribute\RequireCsrfToken;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/files', name: 'api_files_')]
#[IsGranted('ROLE_USER')]
#[RequireCsrfToken] // Protection CSRF automatique pour toutes les méthodes POST/PUT/DELETE/PATCH
class FileManagerApiController extends AbstractController
{
    public function __construct(
        private readonly FileRepository $fileRepository,
        private readonly FolderRepository $folderRepository,
        private readonly FileStarRepository $fileStarRepository,
        private readonly FolderStarRepository $folderStarRepository,
        private readonly FileManagerService $fileManagerService,
        private readonly FilePermissionChecker $permissionChecker,
        private readonly EntityManagerInterface $em
    ) {}

    /**
     * Get current user info
     */
    #[Route('/me', name: 'me', methods: ['GET'])]
    public function me(): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $isAdmin = in_array('ROLE_ADMIN', $user->getRoles(), true);

        // For ROLE_USER, check GlobalConstants. Admins always have all permissions
        $canCreateFolder = $isAdmin || GlobalConstants::FILE_MANAGER_USER_CAN_CREATE_FOLDER;
        $canUploadFile = $isAdmin || GlobalConstants::FILE_MANAGER_USER_CAN_UPLOAD_FILE;

        return $this->json([
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'fullName' => $user->getFullName(),
            'roles' => $user->getRoles(),
            'isAdmin' => $isAdmin,
            'canCreateFolder' => $canCreateFolder,
            'canUploadFile' => $canUploadFile,
            'maxFileSize' => GlobalConstants::FILE_MANAGER_MAX_SIZE,
        ]);
    }

    /**
     * Get files and folders in a folder
     */
    #[Route('', name: 'list', methods: ['GET'])]
    public function list(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        // Get folderId from query parameter
        $folderId = $request->query->get('folderId');
        $folderId = $folderId ? (int)$folderId : null;
        $folder = $folderId ? $this->folderRepository->find($folderId) : null;

        // If folderId is provided but folder not found, return error
        if ($folderId !== null && $folder === null) {
            return $this->json(['error' => 'Folder not found'], Response::HTTP_NOT_FOUND);
        }

        // Check permissions
        if ($folder !== null && !$this->permissionChecker->canView($user, $folder)) {
            return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
        }

        $files = [];
        $folders = [];

        $view = $request->query->get('view', 'all');

        // Check if we're browsing a trashed folder
        $isTrashedFolder = $folder !== null && $folder->isTrashed();

        if ($view === 'all' || $view === 'files') {
            if ($isTrashedFolder) {
                // Use trashed files method for trashed folders
                $fileEntities = $this->fileRepository->findTrashedInFolder($folder, $user);
            } else {
                // Use normal method for non-trashed folders
                $fileEntities = $this->fileRepository->findByFolder($folder, $user);
            }
            foreach ($fileEntities as $file) {
                if ($this->permissionChecker->canView($user, $file)) {
                    $files[] = $this->serializeFile($file, $user);
                }
            }
        }

        if ($view === 'all' || $view === 'folders') {
            if ($isTrashedFolder) {
                // Use trashed folders method for trashed folders
                $folderEntities = $this->folderRepository->findTrashedInFolder($folder, $user);
            } else {
                // Use normal method for non-trashed folders
                $folderEntities = $this->folderRepository->findByParentFolder($folder, $user);
            }
            foreach ($folderEntities as $f) {
                if ($this->permissionChecker->canView($user, $f)) {
                    $folders[] = $this->serializeFolder($f, $user);
                }
            }
        }

        return $this->json([
            'files' => $files,
            'folders' => $folders,
            'currentFolder' => $folder ? $this->serializeFolder($folder, $user) : null,
            'breadcrumb' => $folder ? $this->getBreadcrumb($folder) : [],
        ]);
    }

    /**
     * Upload a file
     * Users can upload files (they become the owner) if allowed by GlobalConstants
     */
    #[Route('/upload', name: 'upload', methods: ['POST'])]
    public function upload(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        // Check if user is admin or if upload is allowed for regular users
        $isAdmin = in_array('ROLE_ADMIN', $user->getRoles(), true);
        if (!$isAdmin && !GlobalConstants::FILE_MANAGER_USER_CAN_UPLOAD_FILE) {
            return $this->json(['error' => 'Upload de fichiers non autorisé'], Response::HTTP_FORBIDDEN);
        }

        $folderId = $request->request->get('folderId');
        $folder = $folderId ? $this->folderRepository->find((int)$folderId) : null;

        // If folder is specified, check if user can view it
        if ($folder !== null && !$this->permissionChecker->canView($user, $folder)) {
            return $this->json(['error' => 'Access denied to folder'], Response::HTTP_FORBIDDEN);
        }

        $uploadedFile = $request->files->get('file');
        if (!$uploadedFile) {
            return $this->json(['error' => 'No file provided'], Response::HTTP_BAD_REQUEST);
        }

        try {
            $file = $this->fileManagerService->uploadFile($uploadedFile, $folder, $user);
            return $this->json([
                'success' => true,
                'file' => $this->serializeFile($file, $user),
            ], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Create a folder
     * Users can create folders (they become the owner) if allowed by GlobalConstants
     */
    #[Route('/folders', name: 'create_folder', methods: ['POST'])]
    public function createFolder(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        // Check if user is admin or if folder creation is allowed for regular users
        $isAdmin = in_array('ROLE_ADMIN', $user->getRoles(), true);
        if (!$isAdmin && !GlobalConstants::FILE_MANAGER_USER_CAN_CREATE_FOLDER) {
            return $this->json(['error' => 'Création de dossier non autorisée'], Response::HTTP_FORBIDDEN);
        }

        $data = json_decode($request->getContent(), true);
        $name = $data['name'] ?? null;
        $parentFolderId = $data['parentFolderId'] ?? null;

        if (!$name) {
            return $this->json(['error' => 'Folder name is required'], Response::HTTP_BAD_REQUEST);
        }

        $parentFolder = $parentFolderId ? $this->folderRepository->find($parentFolderId) : null;

        // If parent folder is specified, check if user can view it
        if ($parentFolder !== null && !$this->permissionChecker->canView($user, $parentFolder)) {
            return $this->json(['error' => 'Access denied to parent folder'], Response::HTTP_FORBIDDEN);
        }

        try {
            $folder = $this->fileManagerService->createFolder($name, $parentFolder, $user);
            return $this->json([
                'success' => true,
                'folder' => $this->serializeFolder($folder, $user),
            ], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Search files and folders
     * If folderId is provided, searches recursively in that folder and all its subfolders
     */
    #[Route('/search', name: 'search', methods: ['GET'])]
    public function search(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $query = $request->query->get('q', '');
        $limit = (int) $request->query->get('limit', 50);
        $offset = (int) $request->query->get('offset', 0);
        $folderId = $request->query->get('folderId');
        $folderId = $folderId ? (int)$folderId : null;
        $folder = $folderId ? $this->folderRepository->find($folderId) : null;

        if (empty($query)) {
            return $this->json(['files' => [], 'folders' => []]);
        }

        // Si folderId est fourni mais le dossier n'existe pas, retourner une erreur
        if ($folderId !== null && $folder === null) {
            return $this->json(['error' => 'Folder not found'], Response::HTTP_NOT_FOUND);
        }

        // Vérifier les permissions si un dossier est spécifié
        if ($folder !== null && !$this->permissionChecker->canView($user, $folder)) {
            return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
        }

        $files = $this->fileRepository->search($query, $user, $folder, $limit, $offset);
        $folders = $this->folderRepository->search($query, $user, $folder, $limit, $offset);

        // Filter by permissions
        $filteredFiles = [];
        foreach ($files as $file) {
            if ($this->permissionChecker->canView($user, $file)) {
                $filteredFiles[] = $file;
            }
        }

        $filteredFolders = [];
        foreach ($folders as $folder) {
            if ($this->permissionChecker->canView($user, $folder)) {
                $filteredFolders[] = $folder;
            }
        }

        return $this->json([
            'files' => array_map(fn($f) => $this->serializeFile($f, $user), $filteredFiles),
            'folders' => array_map(fn($f) => $this->serializeFolder($f, $user), $filteredFolders),
        ]);
    }

    /**
     * Get starred items
     */
    #[Route('/starred', name: 'starred', methods: ['GET'])]
    public function starred(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $files = $this->fileStarRepository->findStarredFilesByUser($user);
        $folders = $this->folderStarRepository->findStarredFoldersByUser($user);

        // Filter by permissions
        $filteredFiles = [];
        foreach ($files as $file) {
            if ($this->permissionChecker->canView($user, $file)) {
                $filteredFiles[] = $file;
            }
        }

        $filteredFolders = [];
        foreach ($folders as $folder) {
            if ($this->permissionChecker->canView($user, $folder)) {
                $filteredFolders[] = $folder;
            }
        }

        return $this->json([
            'files' => array_map(fn($f) => $this->serializeFile($f, $user), $filteredFiles),
            'folders' => array_map(fn($f) => $this->serializeFolder($f, $user), $filteredFolders),
        ]);
    }

    /**
     * Get trashed items
     * Users can see their own trashed items
     */
    #[Route('/trash', name: 'trash', methods: ['GET'])]
    public function trash(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $files = $this->fileRepository->findTrashed($user);
        $folders = $this->folderRepository->findTrashed($user);

        return $this->json([
            'files' => array_map(fn($f) => $this->serializeFile($f, $user), $files),
            'folders' => array_map(fn($f) => $this->serializeFolder($f, $user), $folders),
        ]);
    }

    /**
     * Get file or folder details
     */
    #[Route('/{id<\d+>}', name: 'show', methods: ['GET'])]
    public function show(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $type = $request->query->get('type', 'file');

        if ($type === 'folder') {
            $resource = $this->folderRepository->find($id);
            if (!$resource) {
                return $this->json(['error' => 'Folder not found'], Response::HTTP_NOT_FOUND);
            }
            if (!$this->permissionChecker->canView($user, $resource)) {
                return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
            }
            return $this->json(['folder' => $this->serializeFolder($resource, $user)]);
        } else {
            $resource = $this->fileRepository->find($id);
            if (!$resource) {
                return $this->json(['error' => 'File not found'], Response::HTTP_NOT_FOUND);
            }
            if (!$this->permissionChecker->canView($user, $resource)) {
                return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
            }
            return $this->json(['file' => $this->serializeFile($resource, $user)]);
        }
    }

    /**
     * Rename a file or folder
     * Users can rename their own files/folders
     */
    #[Route('/{id<\d+>}/rename', name: 'rename', methods: ['PUT'])]
    public function rename(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $data = json_decode($request->getContent(), true);
        $newName = $data['name'] ?? null;
        $type = $data['type'] ?? 'file';

        if (!$newName) {
            return $this->json(['error' => 'Name is required'], Response::HTTP_BAD_REQUEST);
        }

        if ($type === 'folder') {
            $resource = $this->folderRepository->find($id);
        } else {
            $resource = $this->fileRepository->find($id);
        }

        if (!$resource) {
            return $this->json(['error' => 'Resource not found'], Response::HTTP_NOT_FOUND);
        }

        // Check if user can edit this resource
        if (!$this->permissionChecker->canEdit($user, $resource)) {
            return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
        }

        try {
            $this->fileManagerService->rename($resource, $newName, $user);
            return $this->json([
                'success' => true,
                'name' => $newName,
            ]);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Move a file or folder
     * Users can move their own files/folders
     */
    #[Route('/{id<\d+>}/move', name: 'move', methods: ['POST'])]
    public function move(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $data = json_decode($request->getContent(), true);
        $targetFolderId = $data['targetFolderId'] ?? null;
        $type = $data['type'] ?? 'file';

        $targetFolder = $targetFolderId ? $this->folderRepository->find($targetFolderId) : null;

        if ($type === 'folder') {
            $resource = $this->folderRepository->find($id);
        } else {
            $resource = $this->fileRepository->find($id);
        }

        if (!$resource) {
            return $this->json(['error' => 'Resource not found'], Response::HTTP_NOT_FOUND);
        }

        // Check if user can edit this resource
        if (!$this->permissionChecker->canEdit($user, $resource)) {
            return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
        }

        // If target folder is specified, check if user can view it
        if ($targetFolder !== null && !$this->permissionChecker->canView($user, $targetFolder)) {
            return $this->json(['error' => 'Access denied to target folder'], Response::HTTP_FORBIDDEN);
        }

        try {
            $this->fileManagerService->move($resource, $targetFolder, $user);
            return $this->json(['success' => true]);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Copy a file
     * Users can copy files they can view (they become the owner of the copy)
     */
    #[Route('/{id<\d+>}/copy', name: 'copy', methods: ['POST'])]
    public function copy(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $data = json_decode($request->getContent(), true);
        $targetFolderId = $data['targetFolderId'] ?? null;

        $file = $this->fileRepository->find($id);
        if (!$file) {
            return $this->json(['error' => 'File not found'], Response::HTTP_NOT_FOUND);
        }

        // Check if user can view this file
        if (!$this->permissionChecker->canView($user, $file)) {
            return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
        }

        $targetFolder = $targetFolderId ? $this->folderRepository->find($targetFolderId) : null;

        // If target folder is specified, check if user can view it
        if ($targetFolder !== null && !$this->permissionChecker->canView($user, $targetFolder)) {
            return $this->json(['error' => 'Access denied to target folder'], Response::HTTP_FORBIDDEN);
        }

        try {
            $newFile = $this->fileManagerService->copyFile($file, $targetFolder, $user);
            return $this->json([
                'success' => true,
                'file' => $this->serializeFile($newFile, $user),
            ]);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Delete a file or folder (move to trash)
     * Users can delete their own files/folders
     */
    #[Route('/{id<\d+>}', name: 'delete', methods: ['DELETE'])]
    public function delete(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $type = $request->query->get('type', 'file');

        if ($type === 'folder') {
            $resource = $this->folderRepository->find($id);
            if (!$resource) {
                return $this->json(['error' => 'Folder not found'], Response::HTTP_NOT_FOUND);
            }
            // Check if user can delete this resource
            if (!$this->permissionChecker->canDelete($user, $resource)) {
                return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
            }
            $this->fileManagerService->deleteFolder($resource, $user);
        } else {
            $resource = $this->fileRepository->find($id);
            if (!$resource) {
                return $this->json(['error' => 'File not found'], Response::HTTP_NOT_FOUND);
            }
            // Check if user can delete this resource
            if (!$this->permissionChecker->canDelete($user, $resource)) {
                return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
            }
            $this->fileManagerService->deleteFile($resource, $user);
        }

        return $this->json(['success' => true]);
    }

    /**
     * Toggle star status
     */
    #[Route('/{id<\d+>}/star', name: 'star', methods: ['POST'])]
    public function star(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $type = $request->query->get('type', 'file');

        if ($type === 'folder') {
            $resource = $this->folderRepository->find($id);
        } else {
            $resource = $this->fileRepository->find($id);
        }

        if (!$resource) {
            return $this->json(['error' => 'Resource not found'], Response::HTTP_NOT_FOUND);
        }

        try {
            $isStarred = $this->fileManagerService->toggleStar($resource, $user);
            return $this->json([
                'success' => true,
                'starred' => $isStarred,
            ]);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Restore from trash
     * Users can restore their own files/folders
     */
    #[Route('/{id<\d+>}/restore', name: 'restore', methods: ['POST'])]
    public function restore(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $type = $request->query->get('type', 'file');

        if ($type === 'folder') {
            $resource = $this->folderRepository->find($id);
            if (!$resource) {
                return $this->json(['error' => 'Folder not found'], Response::HTTP_NOT_FOUND);
            }
            // Check if user can delete (and thus restore) this resource
            if (!$this->permissionChecker->canDelete($user, $resource)) {
                return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
            }
            $this->fileManagerService->restoreFolder($resource, $user);
        } else {
            $resource = $this->fileRepository->find($id);
            if (!$resource) {
                return $this->json(['error' => 'File not found'], Response::HTTP_NOT_FOUND);
            }
            // Check if user can delete (and thus restore) this resource
            if (!$this->permissionChecker->canDelete($user, $resource)) {
                return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
            }
            $this->fileManagerService->restoreFile($resource, $user);
        }

        return $this->json(['success' => true]);
    }

    /**
     * Permanently delete a file or folder from trash
     * Users can permanently delete their own files/folders
     */
    #[Route('/{id<\d+>}/permanent-delete', name: 'permanent_delete', methods: ['DELETE'])]
    public function permanentDelete(int $id, Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        $type = $request->query->get('type', 'file');

        if ($type === 'folder') {
            $resource = $this->folderRepository->find($id);
            if (!$resource) {
                return $this->json(['error' => 'Folder not found'], Response::HTTP_NOT_FOUND);
            }
            if (!$resource->isTrashed()) {
                return $this->json(['error' => 'Folder is not in trash'], Response::HTTP_BAD_REQUEST);
            }
            // Check if user can delete this resource
            if (!$this->permissionChecker->canDelete($user, $resource)) {
                return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
            }
            $this->fileManagerService->permanentlyDeleteFolder($resource, $user);
        } else {
            $resource = $this->fileRepository->find($id);
            if (!$resource) {
                return $this->json(['error' => 'File not found'], Response::HTTP_NOT_FOUND);
            }
            if (!$resource->isTrashed()) {
                return $this->json(['error' => 'File is not in trash'], Response::HTTP_BAD_REQUEST);
            }
            // Check if user can delete this resource
            if (!$this->permissionChecker->canDelete($user, $resource)) {
                return $this->json(['error' => 'Access denied'], Response::HTTP_FORBIDDEN);
            }
            $this->fileManagerService->permanentlyDeleteFile($resource, $user);
        }

        return $this->json(['success' => true]);
    }

    /**
     * Serialize file for JSON response
     */
    private function serializeFile(File $file, User $user): array
    {
        return [
            'id' => $file->getId(),
            'name' => $file->getName(),
            'originalName' => $file->getOriginalName(),
            'mimeType' => $file->getMimeType(),
            'size' => $file->getSize(),
            'formattedSize' => $file->getFormattedSize(),
            'path' => $file->getPath(),
            'extension' => $file->getExtension(),
            'parentFolderId' => $file->getParentFolder()?->getId(),
            'owner' => [
                'id' => $file->getOwner()->getId(),
                'name' => $file->getOwner()->getFullName(),
            ],
            'isStarred' => $this->fileStarRepository->isStarredByUser($file, $user),
            'isTrashed' => $file->isTrashed(),
            'isImage' => $file->isImage(),
            'isVideo' => $file->isVideo(),
            'isPdf' => $file->isPdf(),
            'isText' => $file->isText(),
            'canEdit' => $this->permissionChecker->canEdit($user, $file),
            'canDelete' => $this->permissionChecker->canDelete($user, $file),
            'createdAt' => $file->getCreatedAt()?->format('c'),
            'updatedAt' => $file->getUpdatedAt()?->format('c')
        ];
    }

    /**
     * Serialize folder for JSON response
     */
    private function serializeFolder(Folder $folder, User $user): array
    {
        return [
            'id' => $folder->getId(),
            'name' => $folder->getName(),
            'slug' => $folder->getSlug(),
            'parentFolderId' => $folder->getParentFolder()?->getId(),
            'owner' => [
                'id' => $folder->getOwner()->getId(),
                'name' => $folder->getOwner()->getFullName(),
            ],
            'isStarred' => $this->folderStarRepository->isStarredByUser($folder, $user),
            'isTrashed' => $folder->isTrashed(),
            'isEmpty' => $folder->isEmpty(),
            'canEdit' => $this->permissionChecker->canEdit($user, $folder),
            'canDelete' => $this->permissionChecker->canDelete($user, $folder),
            'createdAt' => $folder->getCreatedAt()?->format('c'),
            'updatedAt' => $folder->getUpdatedAt()?->format('c')
        ];
    }

    /**
     * Get breadcrumb for a folder
     */
    private function getBreadcrumb(Folder $folder): array
    {
        $breadcrumb = [];
        $path = $folder->getFullPath();

        foreach ($path as $f) {
            $breadcrumb[] = [
                'id' => $f->getId(),
                'name' => $f->getName(),
                'slug' => $f->getSlug(),
            ];
        }

        return $breadcrumb;
    }
}
