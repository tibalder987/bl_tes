<?php
namespace App\Service;

use App\Entity\ServiceContact;
use App\Entity\User;
use Exception;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Twig\Environment;

class MailService
{
    /** @var MailerInterface */
    private MailerInterface $mailer;

    /** @var Environment */
    private Environment $templating;

    /** @var ContainerBagInterface */
    private ContainerBagInterface $params;

    /** @var LoggerInterface */
    private LoggerInterface $logger;

    /**
     * MailHelper constructor.
     * @param MailerInterface $mailer
     * @param Environment $templating
     * @param ContainerBagInterface $params
     * @param LoggerInterface $logger
     */
    public function __construct(MailerInterface $mailer,
                                Environment $templating,
                                ContainerBagInterface $params,
                                LoggerInterface $logger)
    {
        $this->mailer = $mailer;
        $this->templating = $templating;
        $this->params = $params;
        $this->logger = $logger;
    }

    public function sendMailInitPassword(User $user): void
    {
        try {
            $message = (new Email())
                ->subject('Symfony - Initialisation de votre mot de passe')
                ->from(new Address($_ENV['MAILER_FROM'], "Symfony"))
                ->to(new Address($user->getEmail()))
                ->html($this->templating->render('mail/mail_init_password.html.twig', ['user' => $user, 'absolute_url' => $this->params->get('absolute_url')]));

            $this->mailer->send($message);
        } catch (Exception $e) {
            $this->logger->critical("Erreur lors de l'envoie de l'email : ".$e->getMessage());
        }
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendMailResetPassword(User $user): void
    {
        if(filter_var($user->getEmail(),FILTER_VALIDATE_EMAIL)) {
            try {
                $message = (new Email())
                    ->subject('Symfony - Demande de réinitialisation de votre mot de passe')
                    ->from(new Address($_ENV['MAILER_FROM'], "Symfony"))
                    ->to(new Address($user->getEmail()))
                    ->html($this->templating->render('mail/mail_reset_password.html.twig', ['user' => $user, 'absolute_url' => $this->params->get('absolute_url')]))
                ;
                $this->mailer->send($message);
            } catch (Exception $e) {
                $this->logger->critical("Erreur lors de l'envoie de l'email : ".$e->getMessage());
            }
        }
    }

    public function sendMailContact($contact): void
    {
        if(filter_var($contact['email'],FILTER_VALIDATE_EMAIL)) {
            /** @var ServiceContact $service */
            $service = $contact['service'];

            try {
                $message = (new Email())
                    ->subject('Symfony - Demande de contact')
                    ->from(new Address($_ENV['MAILER_FROM'], "Symfony"))
                    ->to(new Address($service->getEmail()))
                    ->html($this->templating->render('mail/contact.html.twig', ['contact' => $contact, 'absolute_url' => $this->params->get('absolute_url')]));

                $this->mailer->send($message);
            } catch (Exception $e) {
                $this->logger->critical("Erreur lors de l'envoie de l'email : ".$e->getMessage());
            }
        }
    }
}
