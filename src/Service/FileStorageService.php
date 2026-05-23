<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Folder;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class FileStorageService
{
    private string $basePath;

    public function __construct(string $projectDir)
    {
        $this->basePath = $projectDir . '/private/file-manager';
    }

    /**
     * Store an uploaded file
     */
    public function storeFile(UploadedFile $file, string $filename, ?Folder $parentFolder = null): string
    {
        $directory = $this->getDirectoryPath($parentFolder);
        $this->ensureDirectoryExists($directory);

        $filePath = $directory . '/' . $filename;

        try {
            $file->move($directory, $filename);
        } catch (FileException $e) {
            throw new FileException('Failed to store file: ' . $e->getMessage());
        }

        return $this->getRelativePath($filePath);
    }

    /**
     * Copy a file
     */
    public function copyFile(string $sourcePath, string $extension, ?Folder $targetFolder = null): string
    {
        $fullSourcePath = $this->basePath . '/' . ltrim($sourcePath, '/');

        if (!file_exists($fullSourcePath)) {
            throw new FileException('Source file does not exist');
        }

        $directory = $this->getDirectoryPath($targetFolder);
        $this->ensureDirectoryExists($directory);

        $filename = basename($sourcePath);
        $newFilename = pathinfo($filename, PATHINFO_FILENAME) . '-copy-' . uniqid('', true) . '.' . $extension;
        $targetPath = $directory . '/' . $newFilename;

        if (!copy($fullSourcePath, $targetPath)) {
            throw new FileException('Failed to copy file');
        }

        return $this->getRelativePath($targetPath);
    }

    /**
     * Delete a file
     */
    public function deleteFile(string $path): void
    {
        $fullPath = $this->basePath . '/' . ltrim($path, '/');

        if (file_exists($fullPath)) {
            unlink($fullPath);
        }
    }

    /**
     * Get file content
     */
    public function getFileContent(string $path): string
    {
        $fullPath = $this->basePath . '/' . ltrim($path, '/');

        if (!file_exists($fullPath)) {
            throw new FileException('File does not exist');
        }

        return file_get_contents($fullPath);
    }

    /**
     * Get file path for download/preview
     */
    public function getFilePath(string $path): string
    {
        return $this->basePath . '/' . ltrim($path, '/');
    }

    /**
     * Extract metadata from file
     * 
     * Note: This method should be called BEFORE moving the file.
     * Basic metadata (mimeType, size) is extracted. Extension should be passed separately
     * to avoid multiple calls to guessExtension() which can fail on Docker.
     * 
     * EXIF extraction is enabled with robust error handling for Docker compatibility.
     */
    public function extractMetadata(UploadedFile $file): array
    {
        $metadata = [
            'mimeType' => $file->getMimeType(),
            'size' => $file->getSize(),
            // Note: extension is NOT extracted here to avoid multiple guessExtension() calls
            // It should be captured separately before calling this method
        ];

        // Extract EXIF data for images (optional, never fails the upload)
        if (str_starts_with($file->getMimeType(), 'image/')) {
            // Only try if exif extension is available
            if (!function_exists('exif_read_data')) {
                return $metadata;
            }

            // Use isValid() to check if file is still valid
            if (!$file->isValid()) {
                return $metadata;
            }

            // Set up error handler to catch any warnings/errors from exif_read_data
            $exifError = null;
            $errorHandler = function ($errno, $errstr, $errfile, $errline) use (&$exifError) {
                // Only catch errors related to file reading
                if (
                    str_contains($errstr, 'does not exist') ||
                    str_contains($errstr, 'is not readable') ||
                    str_contains($errstr, 'Unable to open')
                ) {
                    $exifError = $errstr;
                    return true; // Suppress the error
                }
                return false; // Let other errors through
            };

            // Save current error handler and set our custom one
            $previousErrorHandler = set_error_handler($errorHandler);

            $tempCopyPath = null;

            try {
                // Get the real path of the uploaded file
                $pathname = $file->getRealPath();

                // If getRealPath() returns false, try getPathname()
                if (!$pathname || !is_string($pathname)) {
                    $pathname = $file->getPathname();
                }

                // Multiple checks before trying to read EXIF
                if (!$pathname || !is_string($pathname)) {
                    return $metadata;
                }

                // Check if file exists and is readable
                if (!file_exists($pathname) || !is_readable($pathname)) {
                    return $metadata;
                }

                // Additional check: verify the file is still accessible
                if (!is_file($pathname)) {
                    return $metadata;
                }

                // On Docker, temp files can be deleted quickly, so we MUST copy the file
                // to a safe location before reading EXIF data
                // Use the configured upload_tmp_dir or fallback to sys_get_temp_dir()
                $tempDir = ini_get('upload_tmp_dir') ?: sys_get_temp_dir();
                $tempDir = rtrim($tempDir, '/') . '/exif_extraction';

                if (!is_dir($tempDir)) {
                    if (!@mkdir($tempDir, 0755, true)) {
                        // If we can't create the directory, skip EXIF extraction
                        return $metadata;
                    }
                }

                $tempCopyPath = $tempDir . '/' . uniqid('exif_', true) . '.tmp';

                // Copy the file to a safe location - use file_get_contents/file_put_contents for reliability
                $fileContent = @file_get_contents($pathname);
                if ($fileContent === false) {
                    // Can't read original file, skip EXIF
                    return $metadata;
                }

                if (@file_put_contents($tempCopyPath, $fileContent) === false) {
                    // Can't write copy, skip EXIF
                    return $metadata;
                }

                // Verify the copy exists and is readable
                if (!file_exists($tempCopyPath) || !is_readable($tempCopyPath)) {
                    return $metadata;
                }

                // Clear any previous errors before reading EXIF
                error_clear_last();

                // Try to read EXIF data from the safe copy ONLY
                // Never use the original pathname after this point
                $exif = @exif_read_data($tempCopyPath, null, true);

                // Check if there was an error
                $error = error_get_last();
                if ($error !== null && (
                    str_contains($error['message'], 'does not exist') ||
                    str_contains($error['message'], 'is not readable') ||
                    str_contains($error['message'], 'Unable to open')
                )) {
                    // Error reading from copy, skip EXIF
                    return $metadata;
                }

                // If we got an error from our handler, skip EXIF extraction
                if ($exifError !== null) {
                    return $metadata;
                }

                // If exif_read_data returned data, process it
                if ($exif !== false && is_array($exif) && !empty($exif)) {
                    $metadata['exif'] = $this->sanitizeExifData($exif);
                }
            } catch (\Exception $e) {
                // Silently fail if EXIF extraction fails - it's not critical
                // This can happen if Docker volume is not properly configured
            } catch (\Throwable $e) {
                // Catch any other errors (including warnings converted to exceptions)
            } finally {
                // Clean up the temporary copy if we created one
                if ($tempCopyPath !== null && file_exists($tempCopyPath)) {
                    @unlink($tempCopyPath);
                }

                // Restore previous error handler
                if ($previousErrorHandler !== null) {
                    set_error_handler($previousErrorHandler);
                } else {
                    restore_error_handler();
                }
            }
        }

        return $metadata;
    }

    /**
     * Get directory path for a folder
     */
    private function getDirectoryPath(?Folder $folder = null): string
    {
        if ($folder === null) {
            return $this->basePath . '/root';
        }

        $path = $this->basePath;
        $fullPath = $folder->getFullPath();

        foreach ($fullPath as $f) {
            $path .= '/' . $f->getSlug();
        }

        return $path;
    }

    /**
     * Ensure directory exists
     */
    private function ensureDirectoryExists(string $directory): void
    {
        if (!is_dir($directory)) {
            mkdir($directory, 0755, true);
        }
    }

    /**
     * Get relative path from base path
     */
    private function getRelativePath(string $fullPath): string
    {
        return str_replace($this->basePath . '/', '', $fullPath);
    }

    /**
     * Sanitize EXIF data (remove binary data, keep only useful info)
     */
    private function sanitizeExifData(array $exif): array
    {
        $sanitized = [];
        $allowedKeys = [
            'Make',
            'Model',
            'DateTime',
            'DateTimeOriginal',
            'Orientation',
            'XResolution',
            'YResolution',
            'ResolutionUnit',
            'Software',
            'Artist',
            'Copyright',
            'GPSLatitude',
            'GPSLongitude',
            'GPSAltitude'
        ];

        foreach ($allowedKeys as $key) {
            if (isset($exif[$key])) {
                $value = $exif[$key];
                // Skip binary data
                if (!is_array($value) || !isset($value[0]) || !is_string($value[0])) {
                    $sanitized[$key] = $value;
                }
            }
        }

        return $sanitized;
    }
}
