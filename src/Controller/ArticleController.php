<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Category;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class ArticleController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $em,
                                private readonly PaginatorInterface $paginator,
                                private readonly RequestStack $requestStack,
                                private readonly AuthorizationCheckerInterface $authorizationChecker)
    {
    }

    #[Route('/actualites', name: 'app_article_actualites', options: ['sitemap' => ['priority' => 0.9]])]
    #[Route('/actualites/c/{path}', name: 'app_article_actualites_filter_category')]
    public function index_actualites(?string $path): Response
    {
        $categories = $this->em->getRepository(Category::class)->findBy(['active' => true]);
        $category = ($path) ? $this->em->getRepository(Category::class)->findBySlug($path) : null;

        return $this->render('article/index.html.twig', [
            'categories' => $categories,
            'category' => $category,
            'type' => GlobalConstants::ARTICLE_ACTUALITE,
        ]);
    }

    #[Route('/communiques-presse', name: 'app_article_communiques', options: ['sitemap' => ['priority' => 0.9]])]
    public function index_communiques(): Response
    {
        return $this->render('article/index.html.twig', [
            'type' => GlobalConstants::ARTICLE_COMMUNIQUE_PRESSE,
        ]);
    }

    #[Route('/evenements', name: 'app_article_event', options: ['sitemap' => ['priority' => 0.9]])]
    public function index_event(): Response
    {
        return $this->render('article/index.html.twig', [
            'type' => GlobalConstants::ARTICLE_EVENEMENT,
        ]);
    }

    #[Route('/articles/__list_result', name: 'app_article_list_result')]
    public function ajax_list_result(Request $request): ?Response
    {
        if($request->isXmlHttpRequest()) {
            $typeArticleID = $request->request->get('type');
            $categoryID = $request->request->get('category');
            $search = $request->request->get('search');
            $nb = $request->request->get('nb');

            $page = 1;
            $nbArticles = 16;
            if($nb !== null) {
                $nbArticles = intval($nb);
            }
            if($request->request->get('page')) {
                $page = $request->request->get('page');
            }

            $category = ($categoryID) ? $this->em->getRepository(Category::class)->find($categoryID) : null;


            $articles = $this->em->getRepository(Article::class)->searchByTypeCategory($typeArticleID, $category, $search, $request->getLocale());

            $productsPaginator = $this->paginator->paginate(
                $articles,
                $request->query->getInt('page', $page),
                $nbArticles
            );

            return $this->render('article/list.html.twig', [
                'articles'      => $productsPaginator,
                'search'        => $search,
                'category'      => $category,
            ]);
        }
        return null;
    }



    #[Route('/actualites/{slug}', name: 'app_article_actualite_detail')]
    public function index_actualite(string $slug): Response
    {
        $article = $this->em->getRepository(Article::class)->searchBySlugTypeLocale($slug, GlobalConstants::ARTICLE_ACTUALITE, $this->requestStack->getCurrentRequest()->getLocale());
        if(!$article instanceof Article) {
            $article = $this->em->getRepository(Article::class)->searchBySlugTypeLocale($slug, GlobalConstants::ARTICLE_ACTUALITE, 'fr');
        }

        if($article instanceof Article && !$article->isActive() && !$this->authorizationChecker->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('app_article_actualites');
        }

        return $this->render('article/detail.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/communiques-presse/{slug}', name: 'app_article_communique_detail')]
    public function index_communique(string $slug): Response
    {
        $article = $this->em->getRepository(Article::class)->searchBySlugTypeLocale($slug, GlobalConstants::ARTICLE_COMMUNIQUE_PRESSE, $this->requestStack->getCurrentRequest()->getLocale());
        if(!$article instanceof Article) {
            $article = $this->em->getRepository(Article::class)->searchBySlugTypeLocale($slug, GlobalConstants::ARTICLE_COMMUNIQUE_PRESSE, 'fr');
        }

        if($article instanceof Article && !$article->isActive() && !$this->authorizationChecker->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('app_article_communiques');
        }

        return $this->render('article/detail_communique.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/evenements/{slug}', name: 'app_article_evenement_detail')]
    public function index_evenement(string $slug): Response
    {
        $article = $this->em->getRepository(Article::class)->searchBySlugTypeLocale($slug, GlobalConstants::ARTICLE_EVENEMENT, $this->requestStack->getCurrentRequest()->getLocale());
        if(!$article instanceof Article) {
            $article = $this->em->getRepository(Article::class)->searchBySlugTypeLocale($slug, GlobalConstants::ARTICLE_EVENEMENT, 'fr');
        }

        if($article instanceof Article && !$article->isActive() && !$this->authorizationChecker->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('app_article_event');
        }

        return $this->render('article/detail_event.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/last/articles/t/{typeArticle}/l/{nbResults}', name: 'app_article_last')]
    public function last_article(int $typeArticle, int $nbResults): Response
    {
        $articles = $this->em->getRepository(Article::class)->findBy(['typeArticle' => $typeArticle, 'active' => true], ['createdAt' => 'DESC'], $nbResults);

        $template = 'article/last2.html.twig';
        if($typeArticle == GlobalConstants::ARTICLE_COMMUNIQUE_PRESSE) {
            $template = 'article/last_communique.html.twig';
        }
        if($typeArticle == GlobalConstants::ARTICLE_EVENEMENT) {
            $template = 'article/last_evenement.html.twig';
        }

        return $this->render($template, [
            'articles' => $articles,
            'typeArticle' => $typeArticle
        ]);
    }

    #[Route('/last/news/l/{nbResults}', name: 'app_news_last')]
    #[Route('/last/news/c/{path}/l/{nbResults}', name: 'app_news_category_last')]
    public function last_news(int $nbResults, ?string $path = null): Response
    {
        $category = ($path) ? $this->em->getRepository(Category::class)->findBySlug($path, $this->requestStack->getCurrentRequest()->getLocale()) : null;
        $news = $this->em->getRepository(Article::class)->searchByTypeCategory(GlobalConstants::ARTICLE_ACTUALITE, $category, null, $this->requestStack->getCurrentRequest()->getLocale(), $nbResults);

        return $this->render('article/carousel_actualites.html.twig', [
            'articles' => $news,
        ]);
    }
}
