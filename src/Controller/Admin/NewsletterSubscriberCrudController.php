<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\NewsletterSubscriber;
use DateTimeInterface;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Factory\FilterFactory;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Goodby\CSV\Export\Standard\Exporter;
use Goodby\CSV\Export\Standard\ExporterConfig;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\StreamedResponse;

class NewsletterSubscriberCrudController extends AbstractCrudController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly AdminUrlGenerator $adminUrlGenerator,
        private readonly RequestStack $requestStack,
    ) {}

    public static function getEntityFqcn(): string
    {
        return NewsletterSubscriber::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Inscription newsletter')
            ->setEntityLabelInPlural('Inscriptions newsletter')
            ->setPageTitle('index', 'Inscriptions à la newsletter')
            ->setDefaultSort(['createdAt' => 'DESC'])
            ->setPaginatorPageSize(50)
            ->showEntityActionsInlined()
        ;
    }

    public function configureActions(Actions $actions): Actions
    {
        $exportAction = Action::new('export')
            ->linkToUrl(function (): string {
                $request = $this->requestStack->getCurrentRequest();
                if (!$request instanceof Request) {
                    return '#';
                }

                return $this->adminUrlGenerator->setAll($request->query->all())
                    ->setAction('export')
                    ->generateUrl();
            })
            ->addCssClass('btn btn-success')
            ->setLabel('Exporter (CSV)')
            ->setIcon('fa fa-download')
            ->createAsGlobalAction();

        return $actions
            ->disable(Action::NEW)
            ->disable(Action::EDIT)
            ->disable(Action::DELETE)
            ->disable(Action::BATCH_DELETE)
            ->disable(Action::DETAIL)
            ->add(Crud::PAGE_INDEX, $exportAction)
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            DateTimeField::new('createdAt', 'Date d\'inscription')
                ->setFormat(DateTimeField::FORMAT_SHORT, DateTimeField::FORMAT_SHORT)
                ->hideOnForm(),
            TextField::new('email', 'E-mail'),
            TextField::new('firstName', 'Prénom'),
            TextField::new('lastName', 'Nom'),
            TextField::new('country', 'Pays'),
            TextField::new('locale', 'Langue'),
            TextField::new('ip', 'Adresse IP'),
        ];
    }

    public function export(AdminContext $context): StreamedResponse
    {
        $fields = FieldCollection::new($this->configureFields(Crud::PAGE_INDEX));
        $filters = $this->container->get(FilterFactory::class)->create($context->getCrud()->getFiltersConfig(), $fields, $context->getEntity());
        $queryBuilder = $this->createIndexQueryBuilder($context->getSearch(), $context->getEntity(), $fields, $filters);

        /** @var list<NewsletterSubscriber> $rows */
        $rows = $queryBuilder->getQuery()->getResult();

        $headers = [
            'Date d\'inscription',
            'E-mail',
            'Prénom',
            'Nom',
            'Pays',
            'Langue',
            'Adresse IP',
        ];

        $data = [];
        foreach ($rows as $i => $row) {
            if (!$row instanceof NewsletterSubscriber) {
                continue;
            }
            $created = $row->getCreatedAt();
            $data[$i] = [
                $created instanceof DateTimeInterface ? $created->format('d/m/Y H:i') : '',
                $row->getEmail(),
                $row->getFirstName(),
                $row->getLastName(),
                $row->getCountry(),
                $row->getLocale(),
                $row->getIp(),
            ];
        }
        array_unshift($data, $headers);

        $response = new StreamedResponse(function () use ($data): void {
            echo "\xEF\xBB\xBF";
            $config = new ExporterConfig();
            $exporter = new Exporter($config);
            $exporter->export('php://output', $data);
        });
        $dispositionHeader = $response->headers->makeDisposition(
            HeaderUtils::DISPOSITION_ATTACHMENT,
            'inscriptions-newsletter-' . (new \DateTimeImmutable())->format('Ymd_His') . '.csv'
        );
        $response->headers->set('Content-Disposition', $dispositionHeader);
        $response->headers->set('Content-Type', 'text/csv; charset=UTF-8');

        return $response;
    }
}
