<?php
declare(strict_types=1);

namespace App\Security\Voter;

use App\Entity\File;
use App\Entity\Folder;
use App\Entity\User;
use App\Service\FilePermissionChecker;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class FileVoter extends Voter
{
    public const VIEW = 'FILE_VIEW';
    public const DOWNLOAD = 'FILE_DOWNLOAD';

    public function __construct(
        private readonly FilePermissionChecker $permissionChecker
    ) {
    }

    protected function supports(string $attribute, mixed $subject): bool
    {
        return in_array($attribute, [self::VIEW, self::DOWNLOAD], true)
            && ($subject instanceof File || $subject instanceof Folder);
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user instanceof User) {
            return false;
        }

        return match ($attribute) {
            self::VIEW => $this->permissionChecker->canView($user, $subject),
            self::DOWNLOAD => $subject instanceof File && $this->permissionChecker->canDownload($user, $subject),
            default => false,
        };
    }
}

