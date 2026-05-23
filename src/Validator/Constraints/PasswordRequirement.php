<?php
namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraints\Compound;
use Symfony\Component\Validator\Constraints as Assert;

class PasswordRequirement extends Compound
{
    protected function getConstraints(array $options): array
    {
        return [
            new Assert\NotBlank(),
            new Assert\Type('string'),
            new Assert\Regex([
                'pattern' => "/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[#?!@$%^&*-])(?=.{8,}).*$/",
                'message' => "Votre mot de passe doit contenir au minimum 8 caractères, dont 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial"
            ]),
        ];
    }
}
