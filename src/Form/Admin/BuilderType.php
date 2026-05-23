<?php

namespace App\Form\Admin;

use App\Entity\Category;
use App\Entity\Form;
use App\Entity\PageOnglet;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class BuilderType extends AbstractType
{
    public function __construct(private readonly EntityManagerInterface $em) {}


    /**
     * @param FormView $view
     * @param FormInterface $form
     * @param array $options
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $entity = $form->getParent() ? $form->getParent()->getData() : null;
        $entityClass = $entity ? get_class($entity) : null;
        $entityId = $entity && method_exists($entity, 'getId') ? $entity->getId() : null;

        $view->vars['builderData'] = [
            'categories' => $this->getCategories(),
            'onglets' => $this->getPageOnglets(),
            'forms' => $this->getForms(),
            'entityClass' => $entityClass,
            'entityId' => $entityId,
        ];
    }
    public function finishView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['multipart'] = true;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['compound' => false, 'multiple' => true]);
    }

    private function getCategories(): array
    {
        $categories = $this->em->getRepository(Category::class)->getCategoriesTranslationOrder();
        $map = [];
        foreach ($categories as $category) {
            $map[$category->getPath()] = $category->translate('fr')->getTitle();
        }
        return $map;
    }

    private function getPageOnglets(): array
    {
        $onglets = $this->em->getRepository(PageOnglet::class)->findAll();
        $map = [];
        foreach ($onglets as $onglet) {
            $map[$onglet->getId()] = $onglet->translate('fr')->getTitle();
        }
        return $map;
    }

    private function getForms(): array
    {
        $forms = $this->em->getRepository(Form::class)->findAll();
        $map = [];
        foreach ($forms as $form) {
            $map[$form->getId()] = $form->getName();
        }
        return $map;
    }
}
