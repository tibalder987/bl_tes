<?php
namespace App\Controller;

use App\Entity\Article;
use App\Entity\JobOffer;
use App\Entity\Page;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class SearchController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $em, private readonly TranslatorInterface $translator)
    {
    }

    #[Route('/search', name: 'app_search', options: ['sitemap' => ['priority' => 0.5]])]
    public function index(Request $request): Response
    {
        $q = $request->query->get('q');
        $news = $communiques = $events = $pages = $jobs = null;

        if(strlen($q) < 3 || strlen($q) > 50) {
            $this->addFlash('warning', $this->translator->trans('search.form.warning',[], 'search'));
        } else {
            /***************************************************************************************************************
             * First STEP : Actualités / Communiques / Évènements
             ***************************************************************************************************************/
            $news = $this->em->getRepository(Article::class)->searchByTypeCategory(GlobalConstants::ARTICLE_ACTUALITE, null, $q, $request->getLocale(), 50);
            $communiques = $this->em->getRepository(Article::class)->searchByTypeCategory(GlobalConstants::ARTICLE_COMMUNIQUE_PRESSE, null, $q, $request->getLocale(), 50);
            $events = $this->em->getRepository(Article::class)->searchByTypeCategory(GlobalConstants::ARTICLE_EVENEMENT, null, $q, $request->getLocale(), 50);

            /***************************************************************************************************************
             * Second STEP : Content Page
             ***************************************************************************************************************/
            $pages = $this->em->getRepository(Page::class)->searchByQuery($q, $request->getLocale(), 50);

            /***************************************************************************************************************
             * Last STEP : Offre emploi
             ***************************************************************************************************************/
            $jobs = $this->em->getRepository(JobOffer::class)->searchByQuery($q, $request->getLocale(), 50);
        }


        return $this->render('search/index.html.twig', [
            "q" => $q,
            'news' => $news,
            'communiques' => $communiques,
            'events' => $events,
            'pages' => $pages,
            'jobs' => $jobs
        ]);
    }
}
