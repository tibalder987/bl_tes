<?php

namespace App\Form\Admin;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;

class JsonHiddenType extends AbstractType implements DataTransformerInterface
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addViewTransformer($this);
    }

    public function transform($value): string
    {
        if (is_null($value)) {
            return '';
        }
        return json_encode($value, JSON_THROW_ON_ERROR);
    }

    public function reverseTransform($value): array
    {
        if (!$value) {
            return [];
        }
        return json_decode($value, true, 512, JSON_THROW_ON_ERROR);
    }

    public function getParent(): string
    {
        return HiddenType::class;
    }
}
