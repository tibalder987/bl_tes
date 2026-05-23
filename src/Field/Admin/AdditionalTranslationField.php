<?php
namespace App\Field\Admin;

use App\Form\Admin\AdditionalTranslationsType;
use EasyCorp\Bundle\EasyAdminBundle\Contracts\Field\FieldInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\FieldTrait;

final class AdditionalTranslationField implements FieldInterface
{
    use FieldTrait;

    public static function new(
        string $propertyName,
        ?string $label = null,
        array $shownFields = [],
    ): self {
        return (new self())
            ->setProperty($propertyName)
            ->setLabel(false)
            ->hideOnIndex()
            ->setFormType(AdditionalTranslationsType::class)
            ->setFormTypeOptions([
                'mapped' => false,
                'row_attr' => ['class' => 'container-tab-translation']
            ])
            ->setCustomOption('shownFields', $shownFields)
            ->addFormTheme('/admin/field/additional_translations.html.twig')
            ;
    }
}
