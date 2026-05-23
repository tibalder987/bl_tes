<?php
namespace App\Controller\Admin;

use App\Entity\Log;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FilterFactory;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Filter\ChoiceFilter;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Goodby\CSV\Export\Standard\Exporter;
use Goodby\CSV\Export\Standard\ExporterConfig;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\StreamedResponse;

class LogCrudController extends AbstractCrudController
{
    /** @var EntityManagerInterface */
    private EntityManagerInterface $em;

    /** @var AdminUrlGenerator  */
    private AdminUrlGenerator $adminUrlGenerator;

    /** @var RequestStack  */
    private RequestStack $requestStack;

    /**
     * @param EntityManagerInterface $em
     * @param AdminUrlGenerator $adminUrlGenerator
     * @param RequestStack $requestStack
     */
    public function __construct(EntityManagerInterface $em, AdminUrlGenerator $adminUrlGenerator, RequestStack $requestStack)
    {
        $this->em = $em;
        $this->adminUrlGenerator = $adminUrlGenerator;
        $this->requestStack = $requestStack;
    }


    public static function getEntityFqcn(): string
    {
        return Log::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        $exportAction = Action::new('export')
            ->linkToUrl(function() {
                /** @var Request $request */
                $request = $this->requestStack->getCurrentRequest();

                return $this->adminUrlGenerator->setAll($request->query->all())
                    ->setAction('export')
                    ->generateUrl();
            })
            ->addCssClass('btn btn-success')
            ->setLabel("Export")
            ->setIcon('fa fa-download')
            ->createAsGlobalAction()
        ;

        return $actions
            ->disable(Action::NEW)
            ->disable(Action::EDIT)
            ->disable(Action::DELETE)
            ->disable(Action::BATCH_DELETE)
            ->disable(Action::DETAIL)
            ->add(Crud::PAGE_INDEX, $exportAction)
        ;
    }

    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add(ChoiceFilter::new('entity', "Cible")->setChoices(
                [
                    "Utilisateur" => "Utilisateur",
                    "Article" => "Article",
                    "Page" => "Page",
                    "Menu" => "Menu",
                    "Footer" => "Footer",
                ]
            ))
            ->add(ChoiceFilter::new('action', "Action")->setChoices(
                [
                    "Création" => "Création",
                    "Modification" => "Modification",
                    "Suppression" => "Suppression",
                    "Login - Back-office" => "Login - Back-office"
                ]))
        ;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Listing des logs')
            ->setDefaultSort(['createdAt' => 'DESC'])
            ->setPaginatorPageSize(50)
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            DateTimeField::new('createdAt', "Date")->setFormat(DateTimeField::FORMAT_SHORT, DateTimeField::FORMAT_SHORT),
            TextField::new('entity', "Cible"),
            TextField::new('action', "Action"),
            TextField::new('source', "Source"),
            TextField::new('message', "Détails")->renderAsHtml(true)->setMaxLength(60),
        ];
    }

    public function export(AdminContext $context)
    {
        $fields = FieldCollection::new($this->configureFields(Crud::PAGE_INDEX));
        $filters = $this->container->get(FilterFactory::class)->create($context->getCrud()->getFiltersConfig(), $fields, $context->getEntity());
        $queryBuilder = $this->createIndexQueryBuilder($context->getSearch(), $context->getEntity(), $fields, $filters);

        $result = $queryBuilder->getQuery()->getArrayResult();
        $headers = ["Date", "Cible", "Action", "Source", "Détail"];

        $data = [];
        foreach ($result as $index => $row) {
            /** @var Log $log */
            $log = $this->em->getRepository(Log::class)->find($row['id']);
            $data[$index][0] = $log->getCreatedAt()->format('d/m/Y H:i');
            $data[$index][1] = utf8_decode($log->getEntity());
            $data[$index][2] = utf8_decode($log->getAction());
            $data[$index][3] = $log->getSource();
            $data[$index][4] = utf8_decode(html_entity_decode($log->getMessage()));
        }
        array_unshift($data, $headers);

        $response = new StreamedResponse(function () use ($data) {
            $config = new ExporterConfig();
            $exporter = new Exporter($config);
            $exporter->export('php://output', $data);
        });
        $date = new DateTime();
        $dispositionHeader = $response->headers->makeDisposition(HeaderUtils::DISPOSITION_ATTACHMENT, $date->format('Ymd_His')."_logs.csv");
        $response->headers->set('Content-Disposition', $dispositionHeader);
        $response->headers->set('Content-Type', 'text/csv; charset=utf-8');
        return $response;
    }
}
