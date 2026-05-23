<?php
namespace App\EventListener;

use App\Service\LogService;
use JetBrains\PhpStorm\NoReturn;
use Symfony\Component\Security\Http\Event\LogoutEvent;

class LogoutListener
{
    /** @var LogService */
    private LogService $logService;

    /**
     * @param LogService $logService
     */
    public function __construct(LogService $logService)
    {
        $this->logService = $logService;
    }


    #[NoReturn] public function onSymfonyComponentSecurityHttpEventLogoutEvent(LogoutEvent $event): void
    {
        if (($token = $event->getToken()) && $user = $token->getUser()) {
            $this->logService->write('Utilisateur', "Login - Back-office", "Déconnexion");
        }
    }
}
