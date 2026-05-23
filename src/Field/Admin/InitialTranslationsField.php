<?php
namespace App\Field\Admin;

use A2lix\TranslationFormBundle\Form\Type\TranslationsType;
use EasyCorp\Bundle\EasyAdminBundle\Contracts\Field\FieldInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\FieldTrait;

final class InitialTranslationsField implements FieldInterface
{
    use FieldTrait;

    public static function new(
        string $propertyName,
        ?string $label = null,
        array $fieldsConfig = [],
        array $options = [],
        array $shownFields = [],
    ): self {
        return (new self())
            ->setProperty($propertyName)
            ->setRequired(true)
            ->setLabel(false)
            ->hideOnIndex()
            ->setFormType(TranslationsType::class)
            ->setFormTypeOptions([
                'fields' => $fieldsConfig,
                'row_attr' => ['class' => 'container-tab-translation'],
                'block_prefix' => 'initial_translations'
            ])
            ->setFormTypeOptions($options)
            ->setCustomOption('shownFields', $shownFields)
            ->addFormTheme('/admin/field/initial_translations.html.twig')
            ;
    }
}
