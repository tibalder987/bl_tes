<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\File;
use App\Entity\FileStar;
use App\Entity\Folder;
use App\Entity\FolderStar;
use App\Entity\User;
use App\Repository\FileRepository;
use App\Repository\FileStarRepository;
use App\Repository\FolderRepository;
use App\Repository\FolderStarRepository;
use App\Service\FilePermissionChecker;
use App\Service\FileStorageService;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Imagine\Gd\Imagine;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\String\Slugger\SluggerInterface;

class FileManagerService
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly FileRepository $fileRepository,
        private readonly FolderRepository $folderRepository,
        private readonly FileStarRepository $fileStarRepository,
        private readonly FolderStarRepository $folderStarRepository,
        private readonly FileStorageService $storageService,
        private readonly FilePermissionChecker $permissionChecker,
        private readonly SluggerInterface $slugger,
        private readonly LogService $logService
    ) {}

    /**
     * Upload a file
     */
    public function uploadFile(UploadedFile $uploadedFile, ?Folder $parentFolder, User $owner): File
    {
        // Check file size
        if ($uploadedFile->getSize() > GlobalConstants::FILE_MANAGER_MAX_SIZE) {
            throw new FileException(sprintf('File size exceeds maximum allowed size of %d bytes', GlobalConstants::FILE_MANAGER_MAX_SIZE));
        }

        // Admin can upload anywhere (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        // Capture ALL metadata BEFORE moving the file (file is still in temp location)
        // This prevents Docker temp file deletion issues
        // We capture everything at once to avoid multiple accesses to the temp file
        $originalName = $uploadedFile->getClientOriginalName();
        $mimeType = $uploadedFile->getMimeType();
        $extension = $uploadedFile->guessExtension() ?: $uploadedFile->getClientOriginalExtension();

        // Image Compression
        if (str_starts_with($mimeType, 'image/')) {
            try {
                $imagine = new Imagine();
                // On ouvre l'image
                $image = $imagine->open($uploadedFile->getRealPath());

                // On détermine le format de l'image
                $format = $extension;
                if ($format === 'jpg') {
                    $format = 'jpeg';
                }

                // Si l'extension n'est pas reconnue/supportée, on fallback sur jpeg si mime est jpeg, sinon on espère que save devine ou on catch
                if (!$format && $mimeType === 'image/jpeg') $format = 'jpeg';
                if (!$format && $mimeType === 'image/png') $format = 'png';

                // On sauvegarde l'image en écrasant le fichier temporaire avec une compression
                $image->save($uploadedFile->getRealPath(), [
                    'format' => $format,
                    'jpeg_quality' => 80, // Qualité à 80%
                    'png_compression_level' => 5,
                ]);

                // Refresh size after compression
                clearstatcache(true, $uploadedFile->getRealPath());
            } catch (\Exception $e) {
                // En cas d'erreur (ex: format non supporté par Imagine), on laisse le fichier tel quel
                // On pourrait logger l'erreur ici si nécessaire
            }
        }

        $size = $uploadedFile->getSize();

        // Extract metadata (this also accesses the file, so we do it after capturing basic info)
        $metadata = $this->storageService->extractMetadata($uploadedFile);

        // Generate unique filename using captured data
        $originalFilename = pathinfo($originalName, PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename)->lower();
        $newFilename = $safeFilename . '-' . uniqid('', true) . '.' . $extension;

        // Store file physically (this moves the file, so temp file will be deleted)
        $path = $this->storageService->storeFile($uploadedFile, $newFilename, $parentFolder);

        // Create File entity using captured metadata (not accessing uploadedFile anymore)
        $file = new File();
        $file->setName($originalName);
        $file->setOriginalName($originalName);
        $file->setMimeType($mimeType);
        $file->setSize($size);
        $file->setPath($path);
        $file->setExtension($extension);
        $file->setParentFolder($parentFolder);
        $file->setOwner($owner);
        $file->setMetadata($metadata);

        $this->em->persist($file);
        $this->em->flush();

        // Log l'upload
        $folderPath = $parentFolder ? $parentFolder->getName() : 'Racine';
        $this->logService->write(
            'File Manager',
            'Upload',
            sprintf('Fichier "%s" uploadé (%s) dans "%s"', $originalName, $file->getFormattedSize(), $folderPath),
            $owner
        );

        return $file;
    }

    /**
     * Create a new folder
     */
    public function createFolder(string $name, ?Folder $parentFolder, User $owner): Folder
    {
        // Admin can create folders anywhere (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        // Generate unique slug
        $baseSlug = (string) $this->slugger->slug($name)->lower();
        $slug = $baseSlug;
        $counter = 1;

        while ($this->folderRepository->slugExists($slug, null)) {
            $slug = $baseSlug . '-' . $counter;
            $counter++;
        }

        $folder = new Folder();
        $folder->setName($name);
        $folder->setSlug($slug);
        $folder->setParentFolder($parentFolder);
        $folder->setOwner($owner);

        $this->em->persist($folder);
        $this->em->flush();

        // Log la création du dossier
        $folderPath = $parentFolder ? $parentFolder->getName() : 'Racine';
        $this->logService->write(
            'File Manager',
            'Création',
            sprintf('Dossier "%s" créé dans "%s"', $name, $folderPath),
            $owner
        );

        return $folder;
    }

    /**
     * Rename a file or folder
     */
    public function rename(File|Folder $resource, string $newName, User $user): void
    {
        // Admin only (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        $oldName = $resource->getName();
        $resourceType = $resource instanceof File ? 'Fichier' : 'Dossier';

        if ($resource instanceof File) {
            $resource->setName($newName);
        } else {
            // For folders, also update slug
            $baseSlug = (string) $this->slugger->slug($newName)->lower();
            $slug = $baseSlug;
            $counter = 1;

            while ($this->folderRepository->slugExists($slug, $resource)) {
                $slug = $baseSlug . '-' . $counter;
                $counter++;
            }

            $resource->setName($newName);
            $resource->setSlug($slug);
        }

        $this->em->flush();

        // Log le renommage
        $this->logService->write(
            'File Manager',
            'Renommage',
            sprintf('%s "%s" renommé en "%s"', $resourceType, $oldName, $newName),
            $user
        );
    }

    /**
     * Move a file or folder to another folder
     */
    public function move(File|Folder $resource, ?Folder $targetFolder, User $user): void
    {
        // Admin only (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        // Prevent moving folder into itself or its descendants
        if ($resource instanceof Folder && $targetFolder !== null) {
            $tree = $this->folderRepository->getFolderTree($resource);
            foreach ($tree as $descendant) {
                if ($descendant->getId() === $targetFolder->getId()) {
                    throw new \RuntimeException('Cannot move folder into itself or its descendants');
                }
            }
        }

        $resourceType = $resource instanceof File ? 'Fichier' : 'Dossier';
        $sourcePath = $resource->getParentFolder() ? $resource->getParentFolder()->getName() : 'Racine';
        $targetPath = $targetFolder ? $targetFolder->getName() : 'Racine';

        if ($resource instanceof File) {
            $resource->setParentFolder($targetFolder);
        } else {
            $resource->setParentFolder($targetFolder);
        }

        $this->em->flush();

        // Log le déplacement
        $this->logService->write(
            'File Manager',
            'Déplacement',
            sprintf('%s "%s" déplacé de "%s" vers "%s"', $resourceType, $resource->getName(), $sourcePath, $targetPath),
            $user
        );
    }

    /**
     * Copy a file
     */
    public function copyFile(File $file, ?Folder $targetFolder, User $user): File
    {
        // Check view permission (user needs to be able to view the file to copy it)
        if (!$this->permissionChecker->canView($user, $file)) {
            throw new \RuntimeException('You do not have permission to copy this file');
        }

        // Admin only for target folder (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions for target folder

        // Copy physical file
        $newPath = $this->storageService->copyFile($file->getPath(), $file->getExtension(), $targetFolder);

        // Create new File entity
        $newFile = new File();
        $newFile->setName($file->getName());
        $newFile->setOriginalName($file->getOriginalName());
        $newFile->setMimeType($file->getMimeType());
        $newFile->setSize($file->getSize());
        $newFile->setPath($newPath);
        $newFile->setExtension($file->getExtension());
        $newFile->setParentFolder($targetFolder);
        $newFile->setOwner($user);
        $newFile->setMetadata($file->getMetadata());

        $this->em->persist($newFile);
        $this->em->flush();

        // Log la copie
        $targetPath = $targetFolder ? $targetFolder->getName() : 'Racine';
        $this->logService->write(
            'File Manager',
            'Copie',
            sprintf('Fichier "%s" copié vers "%s"', $file->getName(), $targetPath),
            $user
        );

        return $newFile;
    }

    /**
     * Delete a file (move to trash)
     */
    public function deleteFile(File $file, User $user): void
    {
        // Admin only (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        $file->setIsTrashed(true);
        $this->em->flush();

        // Log la suppression (corbeille)
        $this->logService->write(
            'File Manager',
            'Suppression',
            sprintf('Fichier "%s" déplacé vers la corbeille', $file->getName()),
            $user
        );
    }

    /**
     * Delete a folder (move to trash) - recursively deletes all contents
     */
    public function deleteFolder(Folder $folder, User $user): void
    {
        // Admin only (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        // Get all files in folder (including trashed ones)
        $files = $this->fileRepository->createQueryBuilder('f')
            ->where('f.parentFolder = :folder')
            ->setParameter('folder', $folder)
            ->getQuery()
            ->getResult();

        // Delete all files recursively (move to trash)
        foreach ($files as $file) {
            $file->setIsTrashed(true);
        }

        // Get all subfolders (including trashed ones)
        $subfolders = $this->folderRepository->createQueryBuilder('f')
            ->where('f.parentFolder = :folder')
            ->setParameter('folder', $folder)
            ->getQuery()
            ->getResult();

        // Delete all subfolders recursively
        foreach ($subfolders as $subfolder) {
            $this->deleteFolder($subfolder, $user);
        }

        // Finally, move the folder itself to trash
        $folder->setIsTrashed(true);
        $this->em->flush();

        // Log la suppression du dossier (corbeille)
        $this->logService->write(
            'File Manager',
            'Suppression',
            sprintf('Dossier "%s" (et son contenu) déplacé vers la corbeille', $folder->getName()),
            $user
        );
    }

    /**
     * Permanently delete a file
     */
    public function permanentlyDeleteFile(File $file, User $user): void
    {
        // Admin only (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        $fileName = $file->getName();

        // Delete physical file
        $this->storageService->deleteFile($file->getPath());

        // Delete entity
        $this->em->remove($file);
        $this->em->flush();

        // Log la suppression définitive
        $this->logService->write(
            'File Manager',
            'Suppression définitive',
            sprintf('Fichier "%s" supprimé définitivement', $fileName),
            $user
        );
    }

    /**
     * Permanently delete a folder
     */
    public function permanentlyDeleteFolder(Folder $folder, User $user): void
    {
        // Admin only (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        $folderName = $folder->getName();

        // Delete all files in folder
        foreach ($folder->getFiles() as $file) {
            $this->permanentlyDeleteFile($file, $user);
        }

        // Delete all subfolders
        foreach ($folder->getChildren() as $child) {
            $this->permanentlyDeleteFolder($child, $user);
        }

        // Delete entity
        $this->em->remove($folder);
        $this->em->flush();

        // Log la suppression définitive du dossier
        $this->logService->write(
            'File Manager',
            'Suppression définitive',
            sprintf('Dossier "%s" (et son contenu) supprimé définitivement', $folderName),
            $user
        );
    }

    /**
     * Restore a file from trash
     */
    public function restoreFile(File $file, User $user): void
    {
        // Admin only (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        $file->setIsTrashed(false);
        $this->em->flush();

        // Log la restauration
        $this->logService->write(
            'File Manager',
            'Restauration',
            sprintf('Fichier "%s" restauré depuis la corbeille', $file->getName()),
            $user
        );
    }

    /**
     * Restore a folder from trash (recursively restores all contents)
     */
    public function restoreFolder(Folder $folder, User $user): void
    {
        // Admin only (already restricted by #[IsGranted('ROLE_ADMIN')] in controller)
        // No need to check permissions here

        // Get all files in folder (including trashed ones)
        $files = $this->fileRepository->createQueryBuilder('f')
            ->where('f.parentFolder = :folder')
            ->setParameter('folder', $folder)
            ->getQuery()
            ->getResult();

        // Restore all files
        foreach ($files as $file) {
            $file->setIsTrashed(false);
        }

        // Get all subfolders (including trashed ones)
        $subfolders = $this->folderRepository->createQueryBuilder('f')
            ->where('f.parentFolder = :folder')
            ->setParameter('folder', $folder)
            ->getQuery()
            ->getResult();

        // Restore all subfolders recursively
        foreach ($subfolders as $subfolder) {
            $this->restoreFolder($subfolder, $user);
        }

        // Finally, restore the folder itself
        $folder->setIsTrashed(false);
        $this->em->flush();

        // Log la restauration du dossier
        $this->logService->write(
            'File Manager',
            'Restauration',
            sprintf('Dossier "%s" (et son contenu) restauré depuis la corbeille', $folder->getName()),
            $user
        );
    }

    /**
     * Toggle star status for a file or folder (per user)
     */
    public function toggleStar(File|Folder $resource, User $user): bool
    {
        if (!$this->permissionChecker->canView($user, $resource)) {
            throw new \RuntimeException('You do not have permission to star this resource');
        }

        $resourceType = $resource instanceof File ? 'Fichier' : 'Dossier';
        $isStarred = false;

        if ($resource instanceof File) {
            $star = $this->fileStarRepository->findByFileAndUser($resource, $user);

            if ($star === null) {
                // Add star
                $star = new FileStar();
                $star->setFile($resource);
                $star->setUser($user);
                $this->em->persist($star);
                $this->em->flush();
                $isStarred = true;
            } else {
                // Remove star
                $this->em->remove($star);
                $this->em->flush();
                $isStarred = false;
            }
        } else {
            $star = $this->folderStarRepository->findByFolderAndUser($resource, $user);

            if ($star === null) {
                // Add star
                $star = new FolderStar();
                $star->setFolder($resource);
                $star->setUser($user);
                $this->em->persist($star);
                $this->em->flush();
                $isStarred = true;
            } else {
                // Remove star
                $this->em->remove($star);
                $this->em->flush();
                $isStarred = false;
            }
        }

        // Log l'action
        /*$action = $isStarred ? 'ajouté aux favoris' : 'retiré des favoris';
        $this->logService->write(
            'File Manager',
            'Favoris',
            sprintf('%s "%s" %s', $resourceType, $resource->getName(), $action),
            $user
        );*/

        return $isStarred;
    }
}
