<?php
namespace App\EventListener;

use App\Entity\Configuration;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\Routing\RouterInterface;

class MaintenanceListener
{
    /** @var EntityManagerInterface */
    private EntityManagerInterface $em;

    /** @var RouterInterface */
    private RouterInterface $router;

    public function __construct(EntityManagerInterface $em, RouterInterface $router)
    {
        $this->em = $em;
        $this->router = $router;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $config = $this->em->getRepository(Configuration::class)->find(GlobalConstants::CONFIGURATION_ID);
        if($config instanceof Configuration && $config->isMaintenance()
            && $event->getRequest()->get('_route') !== null
            && $event->getRequest()->get('_route') !== 'app_page_maintenance'
            && $event->getRequest()->get('_route') !== 'admin'
            && $event->getRequest()->get('_route') !== 'app_menu'
            && $event->getRequest()->get('_route') !== 'app_footer'
            && $event->getRequest()->get('_route') !== 'app_login'
            && $event->getRequest()->get('_route') !== '_profiler'
            && $event->getRequest()->get('_route') !== '_profiler_search'
            && $event->getRequest()->get('_route') !== '_profiler_search_results'
            && $event->getRequest()->get('_route') !== '_wdt') {
            $url = $this->router->generate('app_page_maintenance');

            $response = new RedirectResponse($url);
            $event->setResponse($response);
        }
    }
}
