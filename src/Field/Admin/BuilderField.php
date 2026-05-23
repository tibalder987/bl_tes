<?php
namespace App\Field\Admin;

use App\Form\Admin\BuilderType;
use EasyCorp\Bundle\EasyAdminBundle\Contracts\Field\FieldInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\FieldTrait;

final class BuilderField implements FieldInterface
{
    use FieldTrait;

    public static function new(string $propertyName, ?string $label = null, $fieldsConfig = [], $excludedFieldsConfig = []): self
    {
        return (new self())
            ->setProperty($propertyName)
            ->setLabel($label)
            ->setFormType(BuilderType::class)
            ->setFormTypeOptions(
                [

                ]
            )
            ->addCssClass('mt-5')
            ;
    }
}