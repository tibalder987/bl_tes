<?php
namespace App\Field\Admin;

use A2lix\TranslationFormBundle\Form\Type\TranslationsType;
use EasyCorp\Bundle\EasyAdminBundle\Contracts\Field\FieldInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\FieldTrait;

final class TranslationField implements FieldInterface
{
    use FieldTrait;

    public static function new(string $propertyName, ?string $label = null, $fieldsConfig = [], $excludedFieldsConfig = []): self
    {
        return (new self())
            ->setProperty($propertyName)
            ->setLabel($label)
            ->setFormType(TranslationsType::class)
            ->setFormTypeOptions(
                [
                    'default_locale' => 'fr',
                    'required_locales' => ['fr'],
                    'fields' => $fieldsConfig,
                    'excluded_fields' => $excludedFieldsConfig,
                    'locale_labels' => [                        // [5]
                        'fr' => 'Français',
//                        'th' => 'Tahitien',
                    ]
                ]
            )
            ->addCssClass('mt-2')
        ;
    }
}
