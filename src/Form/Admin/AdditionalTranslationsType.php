<?php
namespace App\Form\Admin;

use Symfony\Component\Form\AbstractType;

final class AdditionalTranslationsType extends AbstractType
{
    public function getBlockPrefix(): string
    {
        return 'additional_translations';
    }
}
