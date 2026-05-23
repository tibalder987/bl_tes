<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BuilderPreviewController extends AbstractController
{
    #[Route('/builder/preview', name: 'builder_preview', methods: ['POST'])]
    public function preview(Request $request): Response
    {
        $elements = json_decode($request->getContent(), true);
        
        if (!is_array($elements)) {
            return new Response('Invalid data', 400);
        }

        // Transform elements to extract form data
        $transformedElements = [];
        foreach ($elements as $element) {
            if (!isset($element['template'])) {
                continue;
            }
            
            // The frontend now sends the form values directly in the element object
            // We just need to make sure we have the template and visible properties
            // and merge everything else
            
            $formData = array_merge($element, [
                'template' => $element['template'],
                'visible' => $element['visible'] ?? true,
            ]);
            
            // If there are still values in the form HTML that are NOT in the element object
            // (e.g. if the frontend extraction missed something), we could fallback to parsing
            // But for now, let's trust the frontend extraction which we just fixed
            
            $transformedElements[] = $formData;
        }

        return $this->render('builder/preview_content.html.twig', [
            'elements' => $transformedElements
        ]);
    }

    #[Route('/builder/preview-window', name: 'builder_preview_window')]
    public function previewWindow(): Response
    {
        return $this->render('builder/preview_window.html.twig');
    }
}
