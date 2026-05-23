<?php

namespace App\EventListener;

use Imagine\Gd\Imagine;
use Vich\UploaderBundle\Event\Event;
use Vich\UploaderBundle\Event\Events;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ImageCompressionListener implements EventSubscriberInterface
{
    private $imagine;

    public function __construct()
    {
        $this->imagine = new Imagine();
    }

    public static function getSubscribedEvents(): array
    {
        return [
            Events::PRE_UPLOAD => 'onPreUpload',
        ];
    }

    public function onPreUpload(Event $event): void
    {
        $object = $event->getObject();
        $mapping = $event->getMapping();

        // On récupère le fichier uploadé (UploadedFile)
        $file = $mapping->getFile($object);

        // Si aucun fichier ou si ce n'est pas une image, on ne fait rien
        if (!$file || !str_starts_with($file->getMimeType(), 'image/')) {
            return;
        }

        try {
            // On ouvre l'image
            $image = $this->imagine->open($file->getRealPath());

            // Redimensionner si l'image est trop grande (max 1920px de large)
            $maxWidth = 1920;
            if ($image->getSize()->getWidth() > $maxWidth) {
                $image->resize($image->getSize()->widen($maxWidth));
            }

            // On détermine le format de l'image
            $format = $file->guessExtension();
            if ($format === 'jpg') {
                $format = 'jpeg';
            }

            // On sauvegarde l'image en écrasant le fichier temporaire avec une compression
            $image->save($file->getRealPath(), [
                'format' => $format,
                'jpeg_quality' => 80, // Qualité à 80%
                'png_compression_level' => 5,
            ]);
        } catch (\Exception $e) {
            // En cas d'erreur (ex: format non supporté par Imagine), on laisse le fichier tel quel
            // On pourrait logger l'erreur ici si nécessaire
        }
    }
}
