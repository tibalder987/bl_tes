<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\NewsletterSubscriber;
use App\Repository\NewsletterSubscriberRepository;
use Doctrine\ORM\EntityManagerInterface;
use ReCaptcha\ReCaptcha;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Validation;
use Symfony\Contracts\Translation\TranslatorInterface;

#[Route('/api/newsletter', name: 'api_newsletter_')]
class NewsletterApiController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly NewsletterSubscriberRepository $repository,
        private readonly TranslatorInterface $translator,
        private readonly ReCaptcha $recaptcha,
        #[Autowire('%karser_recaptcha3.enabled%')] private readonly bool $recaptchaEnabled,
    ) {}

    #[Route('/subscribe', name: 'subscribe', methods: ['POST'])]
    public function subscribe(Request $request): JsonResponse
    {
        $payload = $this->extractPayload($request);
        $email = trim((string) ($payload['email'] ?? ''));
        $firstName = trim((string) ($payload['firstName'] ?? ''));
        $lastName = trim((string) ($payload['lastName'] ?? ''));
        $country = trim((string) ($payload['country'] ?? ''));
        $locale = $this->normalizeAppLocale($payload['locale'] ?? $request->getLocale());
        $captchaToken = trim((string) ($payload['captcha'] ?? ''));

        $validator = Validation::createValidator();

        $violationsEmail = $validator->validate($email, [
            new NotBlank(),
            new Email(mode: Email::VALIDATION_MODE_HTML5),
        ]);
        $violationsFirst = $validator->validate($firstName, [
            new NotBlank(),
            new Length(max: 100),
        ]);
        $violationsLast = $validator->validate($lastName, [
            new NotBlank(),
            new Length(max: 100),
        ]);
        $violationsCountry = $validator->validate($country, [
            new NotBlank(),
            new Length(max: 120),
        ]);

        if (count($violationsEmail) > 0 || count($violationsFirst) > 0 || count($violationsLast) > 0 || count($violationsCountry) > 0) {
            return new JsonResponse([
                'success' => false,
                'message' => $this->translator->trans('newsletter.error.incomplete', [], 'footer', $locale),
            ], Response::HTTP_BAD_REQUEST);
        }

        if ($this->recaptchaEnabled) {
            $captchaResponse = $this->recaptcha->verify($captchaToken, $request->getClientIp());
            if (!$captchaResponse->isSuccess() || $captchaResponse->getAction() !== 'newsletter_subscribe') {
                return new JsonResponse([
                    'success' => false,
                    'message' => $this->translator->trans('newsletter.error.captcha', [], 'footer', $locale),
                ], Response::HTTP_BAD_REQUEST);
            }
        }

        $normalizedEmail = strtolower($email);

        if ($this->repository->findOneByEmail($normalizedEmail) !== null) {
            return new JsonResponse([
                'success' => true,
                'already' => true,
                'message' => $this->translator->trans('newsletter.success.already', [], 'footer', $locale),
            ]);
        }

        $subscriber = (new NewsletterSubscriber())
            ->setFirstName($firstName)
            ->setLastName($lastName)
            ->setCountry($country)
            ->setEmail($normalizedEmail)
            ->setLocale($locale)
            ->setIp($request->getClientIp());

        $this->em->persist($subscriber);
        $this->em->flush();

        return new JsonResponse([
            'success' => true,
            'message' => $this->translator->trans('newsletter.success.subscribed', [], 'footer', $locale),
        ], Response::HTTP_CREATED);
    }

    /**
     * Locales applicatives (fr|en) : la route API n'a pas de préfixe {_locale}, il faut donc
     * normaliser la langue fournie par le client pour les traductions.
     */
    private function normalizeAppLocale(mixed $value): string
    {
        if (!is_string($value) || $value === '') {
            return 'fr';
        }

        $head = strtolower(substr(trim($value), 0, 5));
        if (str_starts_with($head, 'en')) {
            return 'en';
        }

        return 'fr';
    }

    /**
     * @return array<string, mixed>
     */
    private function extractPayload(Request $request): array
    {
        $contentType = (string) $request->headers->get('Content-Type', '');
        if (str_contains($contentType, 'application/json')) {
            $data = json_decode((string) $request->getContent(), true);
            return is_array($data) ? $data : [];
        }

        return $request->request->all();
    }
}
