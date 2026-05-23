<?php

namespace App\EventSubscriber;

use App\Entity\MailLog;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Event\MessageEvent;
use Symfony\Component\Mime\Email;

class MailLogSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager
    ) {}

    public static function getSubscribedEvents(): array
    {
        return [
            MessageEvent::class => 'onMessage',
        ];
    }

    public function onMessage(MessageEvent $event): void
    {
        $message = $event->getMessage();

        if (!$message instanceof Email) {
            return;
        }

        $subject = $message->getSubject();
        $htmlBody = $message->getHtmlBody();
        $textBody = $message->getTextBody();
        $content = self::bodyToString($htmlBody) ?: self::bodyToString($textBody);

        // Retrieve headers for sender & recipient
        $fromArray = $message->getFrom();
        $toArray = $message->getTo();

        $sender = $fromArray ? implode(', ', array_map(fn($address) => $address->getAddress(), $fromArray)) : 'Unknown';
        $recipient = $toArray ? implode(', ', array_map(fn($address) => $address->getAddress(), $toArray)) : 'Unknown';

        // Limit the subject string to 255 chars as in entity
        if (is_string($subject) && mb_strlen($subject) > 255) {
            $subject = mb_substr($subject, 0, 252) . '...';
        }

        $mailLog = current($this->entityManager->getRepository(MailLog::class)->findBy([
            'subject' => $subject,
            'recipient' => $recipient,
            'sender' => $sender,
        ], ['createdAt' => 'DESC'], 1));

        // Let's create a new log entity.
        $mailLog = new MailLog();
        $mailLog->setSubject($subject)
            ->setSender($sender)
            ->setRecipient($recipient)
            ->setContent($content);

        $this->entityManager->persist($mailLog);
        $this->entityManager->flush();
    }

    /**
     * Helper to safely convert body to string
     *
     * @param string|resource|null $body
     * @return string|null
     */
    private static function bodyToString($body): ?string
    {
        if (is_resource($body)) {
            return stream_get_contents($body) ?: null;
        }

        return is_string($body) ? $body : null;
    }
}
