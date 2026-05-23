<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Footer;
use App\Utilities\GlobalConstants;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FooterController extends AbstractController
{
    /** @var EntityManagerInterface  */
    private EntityManagerInterface $em;

    /**
     * @param EntityManagerInterface $em
     */
    public function __construct(
        EntityManagerInterface $em,
        #[Autowire('%karser_recaptcha3.site_key%')] private readonly string $recaptchaSiteKey,
        #[Autowire('%karser_recaptcha3.enabled%')] private readonly bool $recaptchaEnabled,
    )
    {
        $this->em = $em;
    }

    #[Route(path: '__footer', name: 'app_footer')]
    public function index(Request $request): Response
    {
        $footer = $this->em->getRepository(Footer::class)->find(GlobalConstants::FOOTER_ID);
        return $this->render('footer/footer.html.twig', [
            'footer' => $footer,
            'recaptcha_site_key' => $this->recaptchaSiteKey,
            'recaptcha_enabled' => $this->recaptchaEnabled,
        ]);
    }
}
