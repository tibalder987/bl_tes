<?php

namespace App\Controller\Admin;

use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Configuration;
use App\Entity\Faq;
use App\Entity\FaqTheme;
use App\Entity\Footer;
use App\Entity\Form;
use App\Entity\FormSubmission;
use App\Controller\Admin\FormCrudController;
use App\Controller\Admin\FormSubmissionCrudController;
use App\Controller\Admin\NewsletterSubscriberCrudController;
use App\Entity\HomePage;
use App\Entity\Job;
use App\Entity\JobOffer;
use App\Entity\JobType;
use App\Entity\Log;
use App\Entity\NewsletterSubscriber;
use App\Entity\MailLog;
use App\Entity\Media;
use App\Entity\MediaDocumentType;
use App\Entity\Menu;
use App\Entity\Page;
use App\Entity\PageOnglet;
use App\Entity\ServiceContact;
use App\Entity\Survey;
use App\Entity\SurveyParticipation;
use App\Entity\User;
use App\Entity\Group;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Authorization\AccessDecisionManagerInterface;

class DashboardController extends AbstractDashboardController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly AccessDecisionManagerInterface $accessDecisionManager
    ) {}

    /**
     * @throws Exception
     */
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $users = $this->em->getRepository(User::class)->findAll();
        $nbAdmin = $nbUser = 0;
        foreach ($users as $user) {
            $token = new UsernamePasswordToken($user, 'main', $user->getRoles());

            if ($this->accessDecisionManager->decide($token, ['ROLE_ADMIN'])) {
                $nbAdmin++;
            } else {
                $nbUser++;
            }
        }

        return $this->render('admin/dashboard.html.twig', [
            'admins' => $nbAdmin,
            'users' => $nbUser,
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Symfony - Administration')
            ->disableDarkMode();
    }

    public function configureMenuItems(): iterable
    {
        return [
            MenuItem::linkToDashboard('Dashboard', 'fa fa-home'),
            MenuItem::linkToCrud('Configuration du site', 'fa fa-gear', Configuration::class)->setController(ConfigurationCrudController::class)->setCssClass('mt-2 py-2')->setAction(Action::EDIT)->setEntityId(GlobalConstants::CONFIGURATION_ID),
            MenuItem::linkToCrud('Gestion du menu', 'fa fa-bars', Menu::class)->setController(MenuCrudController::class)->setCssClass('mt-3 py-2'),
            MenuItem::linkToCrud('Gestion du footer', 'fa fa-bars', Footer::class)->setController(FooterCrudController::class)->setCssClass('mt-2 py-2')->setAction(Action::EDIT)->setEntityId(1),
            MenuItem::subMenu('Gestion des articles', 'fa fa-newspaper')->setSubItems([
                MenuItem::linkToCrud("Catégories d'actualité", '', Category::class)->setController(CategoryCrudController::class),
                MenuItem::linkToCrud('Gestion des actualités', '', Article::class)->setController(ActualitesCrudController::class),
                MenuItem::linkToCrud('Gestion des communiqués', '', Article::class)->setController(CommuniqueCrudController::class),
                MenuItem::linkToCrud('Gestion des évènements', '', Article::class)->setController(EventCrudController::class),
            ])->setCssClass('pt-3'),
            MenuItem::subMenu('Gestion des pages', 'fa fa-columns')->setSubItems([
                MenuItem::linkToCrud('Gestion de la page d\'accueil', '', HomePage::class)->setController(HomePageCrudController::class)->setAction(Action::EDIT)->setEntityId(1),
                MenuItem::linkToCrud('Gestion des pages de contenu', '', Page::class)->setController(PageCrudController::class),
                MenuItem::linkToCrud('Gestion des onglets de page', '', PageOnglet::class)->setController(PageOngletCrudController::class),
            ])->setCssClass('pt-3'),
            MenuItem::subMenu('Gestion de la médiathèque', 'fa fa-photo-video')->setSubItems([
                MenuItem::linkToCrud('Gestion des types de document', '', MediaDocumentType::class)->setController(MediaDocumentTypeCrudController::class),
                MenuItem::linkToCrud('Gestion des documents', '', Media::class)->setController(MediaDocumentCrudController::class),
                MenuItem::linkToCrud('Gestion des photos', '', Media::class)->setController(MediaCrudController::class),
            ])->setCssClass('pt-3'),
            MenuItem::linkToRoute('Gestionnaire de fichiers', 'fa fa-folder', 'file_manager_index')->setCssClass('mt-2 pt-2 pb-1'),
            //            MenuItem::subMenu('Gestion des offres d\'emploi', 'fa fa-user-tie')->setSubItems([
            //                MenuItem::linkToCrud('Gestion des métiers', '', Job::class)->setController(JobCrudController::class),
            //                MenuItem::linkToCrud('Gestion des types de contrat', '', JobType::class)->setController(JobTypeCrudController::class),
            //                MenuItem::linkToCrud('Gestion des offres d\'emploi', '', JobOffer::class)->setController(JobOfferCrudController::class),
            //            ])->setCssClass('pt-3'),

            MenuItem::linkToCrud('Gestion du services de contact', 'fa fa-comments', ServiceContact::class)->setController(ServiceContactCrudController::class)->setCssClass('mt-2 pt-2 pb-1'),

            MenuItem::subMenu('Gestion des FAQ', 'fa fa-question-circle')->setSubItems([
                MenuItem::linkToCrud('Thèmes', '', FaqTheme::class)->setController(FaqThemeCrudController::class),
                MenuItem::linkToCrud('Questions / Réponses', '', Faq::class)->setController(FaqCrudController::class),
            ])->setCssClass('pt-3'),

            MenuItem::subMenu('Gestion des formulaires', 'fa fa-rectangle-list')->setSubItems([
                MenuItem::linkToCrud('Formulaires', '', Form::class)->setController(FormCrudController::class),
                MenuItem::linkToCrud('Soumissions', '', FormSubmission::class)->setController(FormSubmissionCrudController::class),
            ])->setCssClass('pt-3'),

            MenuItem::linkToCrud('Inscriptions newsletter', 'fa fa-envelope-open-text', NewsletterSubscriber::class)->setController(NewsletterSubscriberCrudController::class)->setCssClass('mt-2 py-2'),

            //            MenuItem::subMenu('Gestion des enquêtes', 'fa fa-face-smile')->setSubItems([
            //                MenuItem::linkToCrud('Gestion des enquêtes', '', Survey::class)->setController(SurveyCrudController::class),
            //                MenuItem::linkToCrud('Gestion des participations', '', SurveyParticipation::class)->setController(SurveyParticipationCrudController::class),
            //            ])->setCssClass('pt-3'),

            MenuItem::subMenu('Gestion des utilisateurs', 'fa fa-users')->setSubItems([
                MenuItem::linkToCrud('Gestion des administrateurs', '', User::class)->setController(AdminCrudController::class),
                MenuItem::linkToCrud('Gestion des utilisateurs', '', User::class)->setController(UserCrudController::class),
                MenuItem::linkToCrud('Gestion des groupes', '', Group::class)->setController(GroupCrudController::class),
            ])->setCssClass('pt-3'),
            MenuItem::subMenu('Gestion des logs', 'fa fa-user-secret')->setSubItems([
                MenuItem::linkToCrud('Gestion des logs', '', Log::class)->setController(LogCrudController::class),
                MenuItem::linkToCrud('Historique des emails', '', MailLog::class)->setController(MailLogCrudController::class),
            ])->setCssClass('pt-3'),
        ];
    }

    public function configureAssets(): Assets
    {
        return parent::configureAssets()
            ->addWebpackEncoreEntry('app-admin')
            ->addHtmlContentToHead('<style>
i.fa, i.fa-brands, i.fa-chisel, i.fa-classic, i.fa-duotone, i.fa-etch, i.fa-graphite, i.fa-jelly, i.fa-jelly-duo, i.fa-jelly-fill, i.fa-light, i.fa-notdog, i.fa-notdog-duo, i.fa-regular, i.fa-semibold, i.fa-sharp, i.fa-sharp-duotone, i.fa-slab, i.fa-slab-press, i.fa-solid, i.fa-thin, i.fa-thumbprint, i.fa-utility, i.fa-utility-duo, i.fa-utility-fill, i.fa-whiteboard, i.fab, i.facr, i.fad, i.fadl, i.fadr, i.fadt, i.faes, i.fagt, i.fajdr, i.fajfr, i.fajr, i.fal, i.fands, i.fans, i.far, i.fas, i.fasdl, i.fasdr, i.fasds, i.fasdt, i.fasl, i.faslpr, i.faslr, i.fasr, i.fass, i.fast, i.fat, i.fatl, i.faudsb, i.faufsb, i.fausb, i.fawsb {
    --_fa-family: var(--fa-family, var(--fa-style-family, "Font Awesome 7 Pro"))!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: var(--fa-display, inline-block);
    font-family: var(--_fa-family)!important;
    font-feature-settings: normal;
    font-style: normal;
    font-synthesis: none;
    font-variant: normal;
    font-weight: var(--fa-style, 900);
    line-height: 1;
    text-align: center;
    text-rendering: auto;
    width: var(--fa-width, 1.25em);
}
            </style>');
    }
}
