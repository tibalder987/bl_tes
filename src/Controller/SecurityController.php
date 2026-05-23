<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\LoginType;
use App\Form\PasswordType;
use App\Service\LogService;
use App\Service\MailService;
use App\Service\RandomService;
use App\Utilities\GlobalConstants;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Authorization\AccessDecisionManagerInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @param LogService $logService
     * @param EntityManagerInterface $em
     * @param UserPasswordHasherInterface $passwordEncoder
     * @param AccessDecisionManagerInterface $accessDecisionManager
     * @param RandomService $randomService
     * @param MailService $mailService
     */
    public function __construct(
        private readonly LogService $logService,
        private readonly EntityManagerInterface $em,
        private readonly UserPasswordHasherInterface $passwordEncoder,
        private readonly AccessDecisionManagerInterface $accessDecisionManager,
        private readonly RandomService $randomService,
        private readonly MailService $mailService
    ) {}

    #[Route(path: '/login', name: 'app_login')]
    public function login(Request $request, AuthenticationUtils $authenticationUtils): Response
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        $form = $this->createForm(LoginType::class, ['email' => $lastUsername ?? '']);
        $form->handleRequest($request);

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error, 'form' => $form->createView()]);
    }

    /**
     * @throws TransportExceptionInterface
     */
    #[Route(path: '/password/forget', name: 'app_password_forget')]
    public function passwordForget(Request $request): Response
    {
        if ($request->request->get('email')) {
            $adminUser = $this->em->getRepository(User::class)->findOneBy(['email' => $request->request->get('email')]);
            /** Is an admin user ? */
            if ($adminUser instanceof User) {
                $token = new UsernamePasswordToken($adminUser, 'main', $adminUser->getRoles());

                if ($this->accessDecisionManager->decide($token, ['ROLE_ADMIN'])) {
                    $dateExpireToken = new DateTime();
                    $dateExpireToken->modify("+" . GlobalConstants::LIFETIME_TOKEN_INIT_PASSWORD_IN_HOURS . " hours");
                    $adminUser->setTokenInitPassword($this->randomService->randomCode(45, 'alphanumeric'));
                    $adminUser->setTokenPasswordExpiredAt($dateExpireToken);
                    $this->mailService->sendMailResetPassword($adminUser);

                    /***************************************************************************************************************
                     * Log
                     ***************************************************************************************************************/
                    $this->logService->write('Utilisateur', "Modification", "Demande de réinitialisation du mot de passe", $adminUser);
                }
            }

            $this->addFlash('warning', "Un e-mail vous a été envoyé afin de réinitialiser votre mot de passe.");
        }
        return $this->render('security/password-forget.html.twig');
    }

    #[Route(path: '/password/change', name: 'app_password_change')]
    #[IsGranted('ROLE_ADMIN')]
    public function passwordChange(Request $request): Response
    {
        /** @var User $adminUser */
        $adminUser = $this->getUser();
        $form = $this->createForm(PasswordType::class, $adminUser);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $datas = $form->getData();
            $passEncoder = $this->passwordEncoder->hashPassword($adminUser, $datas->getPlainPassword());

            $adminUser->setPassword($passEncoder);
            $adminUser->setTokenInitPassword(null);
            $adminUser->setTokenPasswordExpiredAt(null);

            /***********************************************************************************************************
             * Log
             ***********************************************************************************************************/
            $this->logService->write('Utilisateur', "Modification", "Modification du mot de passe", $adminUser);

            $this->addFlash('success', "Votre mot de passe a bien été modifié !");
            return $this->redirectToRoute('admin');
        }
        return $this->render('security/password-init.html.twig', ['form' =>  $form->createView()]);
    }

    #[Route(path: '/password-init/{token}', name: 'app_password_init')]
    public function passwordInit(Request $request, string $token): Response
    {
        $user = $this->em->getRepository(User::class)->findOneBy(['tokenInitPassword' => $token]);
        if (!$user instanceof User) {
            $this->addFlash('danger', "Token invalide");
            return $this->redirectToRoute('admin');
        }
        if ($user->getTokenPasswordExpiredAt() <= new DateTime()) {
            $this->addFlash('danger', "Token expiré !");
            return $this->redirectToRoute('admin');
        }

        $form = $this->createForm(PasswordType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $datas = $form->getData();
            $passEncoder = $this->passwordEncoder->hashPassword($user, $datas->getPlainPassword());
            $user->setPassword($passEncoder);
            $user->setTokenInitPassword(null);

            /***************************************************************************************************************
             * Log
             ***************************************************************************************************************/
            $this->logService->write('Utilisateur', "Modification", "Modification du mot de passe", $user);

            $this->addFlash('success', "Votre mot de passe a bien été modifié, vous pouvez maintenant vous connecter.");
            return $this->redirectToRoute('admin');
        }

        return $this->render('security/password-init.html.twig', ['form' =>  $form->createView()]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
