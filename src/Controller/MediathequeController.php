<?php
namespace App\Controller;

use App\Entity\Media;
use App\Entity\MediaDocumentType;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MediathequeController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $em, private readonly PaginatorInterface $paginator, private readonly RequestStack $requestStack)
    {
    }

    #[Route('/mediatheque/photos', name: 'app_mediatheque_photo', options: ['sitemap' => ['priority' => 0.6]])]
    public function index_mediatheque_photo(): Response
    {
        return $this->render('mediatheque/index.html.twig', ['mediaType' => GlobalConstants::MEDIA_TYPE_PHOTO]);
    }

    #[Route('/mediatheque/documents', name: 'app_mediatheque_document', options: ['sitemap' => ['priority' => 0.6]])]
    public function index_mediatheque_document(): Response
    {
        $documentTypes = $this->em->getRepository(MediaDocumentType::class)->findBy(['active' => true]);

        return $this->render('mediatheque/index.html.twig', [
            'mediaType' => GlobalConstants::MEDIA_TYPE_DOCUMENT,
            'documentTypes' => $documentTypes,
        ]);
    }

    #[Route('/mediatheque/__list_result', name: 'app_mediatheque_list_result')]
    public function ajax_list_result(): ?Response
    {
        if($this->requestStack->getCurrentRequest() && $this->requestStack->getCurrentRequest()->isXmlHttpRequest()) {
            $mediaTypeID = $this->requestStack->getCurrentRequest()->request->get('mediaType');
            $mediaDocumentTypeID = $this->requestStack->getCurrentRequest()->request->get('mediaDocumentType');

            $page = 1;
            if($this->requestStack->getCurrentRequest()->request->get('page')) {
                $page = $this->requestStack->getCurrentRequest()->request->get('page');
            }
            $mediaDocumentType = ($mediaDocumentTypeID) ? $this->em->getRepository(MediaDocumentType::class)->find($mediaDocumentTypeID) : null;

            $medias = $this->em->getRepository(Media::class)->searchByMediaTypeMediaTypeDocument($mediaTypeID, $mediaDocumentType);

            $mediasPaginator = $this->paginator->paginate(
                $medias,
                $this->requestStack->getCurrentRequest()->query->getInt('page', $page),
                16
            );

            return $this->render('mediatheque/list.html.twig', [
                'medias'      => $mediasPaginator,
                'mediaDocumentType'      => $mediaDocumentType,
            ]);
        }
        return null;
    }
}
