<?php
namespace App\EventListener;

use DateTime;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Authorization\AccessDecisionManagerInterface;

class UserPasswordExpireListener
{
    public function __construct(private readonly AccessDecisionManagerInterface $accessDecisionManager,
                                private readonly TokenStorageInterface $tokenStorage,
                                private readonly RequestStack $requestStack,
                                private readonly RouterInterface $router) {
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        if($this->tokenStorage->getToken() && $this->tokenStorage->getToken()->getUser() && $this->requestStack->getCurrentRequest()->get('_route') === "admin") {
            $date = new DateTime();
            /***************************************************************************************************************
             * IF Admin && Password expired
             ***************************************************************************************************************/
            $token = new UsernamePasswordToken($this->tokenStorage->getToken()->getUser(), 'main', $this->tokenStorage->getToken()->getUser()->getRoles());
            if($this->accessDecisionManager->decide($token, ['ROLE_ADMIN']) && (!$this->tokenStorage->getToken()->getUser()->getDateExpirePassword() || $this->tokenStorage->getToken()->getUser()->getDateExpirePassword() < $date)) {

                $this->requestStack->getSession()->getFlashBag()->add('warning', "Votre mot de passe a expiré, merci de le réinitialiser !");
                $url = $this->router->generate('app_password_change');
                $response = new RedirectResponse($url);
                $event->setResponse($response);
            }
        }
    }
}
