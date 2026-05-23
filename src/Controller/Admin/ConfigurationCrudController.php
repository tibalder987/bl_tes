<?php

namespace App\Controller\Admin;

use App\Entity\Configuration;
use App\Field\Admin\AdditionalTranslationField;
use App\Field\Admin\InitialTranslationsField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ConfigurationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Configuration::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Configuration')
            ->setPageTitle('edit', "Modification des configurations du site")
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                ]
            )
        ;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::DELETE)
            ->disable(Action::NEW)
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        $fieldsSeo = [
            'metaTitle' => [
                'label' => 'Meta title page d\'accueil',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaDescription' => [
                'label' => 'Meta description page d\'accueil',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaTitleNews' => [
                'label' => 'Meta Title page Actualités',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaDescriptionNews' => [
                'label' => 'Meta description page Actualités',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaTitleCommunique' => [
                'label' => 'Meta Title page Communiqué de presse',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaDescriptionCommunique' => [
                'label' => 'Meta description page Communiqué de presse',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaTitleEvents' => [
                'label' => 'Meta Title page Évènements',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaDescriptionEvents' => [
                'label' => 'Meta description page Évènements',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaTitleMediatheque' => [
                'label' => 'Meta Title Médiathèque',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaDescriptionMediatheque' => [
                'label' => 'Meta description Médiathèque',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaTitleOffers' => [
                'label' => 'Meta Title Offre d\'emploi',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaDescriptionOffers' => [
                'label' => 'Meta description Offre d\'emploi',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaTitleContact' => [
                'label' => 'Meta Title Page contact',
                'field_type' => TextType::class,
                'required' => false,
            ],
            'metaDescriptionContact' => [
                'label' => 'Meta description Page contact',
                'field_type' => TextType::class,
                'required' => false,
            ],
        ];


        return [
            FormField::addTab('Informations de contact')->setIcon('fa fa-address-book')->addCssClass('col-12'),
            FormField::addPanel('Informations de contact')->setIcon('fa fa-address-card')->addCssClass('col-12'),
            TextEditorField::new('address', "Adresse")->hideOnIndex()->setFormType(CKEditorType::class)->setColumns(12),
            TextField::new('phoneContact', "N° de téléphone de contact")->setColumns(6),
            EmailField::new('emailContact', "E-mail de contact")->setColumns(6),
            FormField::addPanel('Réseaux sociaux')->setIcon('fa fa-hashtag')->addCssClass('col-12'),
            UrlField::new('facebook', "Facebook")->setColumns(4),
            UrlField::new('instagram', "Instagram")->setColumns(4),
            UrlField::new('youtube', "Youtube")->setColumns(4),
            UrlField::new('twitter', "Twitter")->setColumns(4),
            UrlField::new('linkedin', "LinkedIn")->setColumns(4),
            UrlField::new('tiktok', "Tiktok")->setColumns(4),
            FormField::addTab('Logo')->setIcon('fa fa-image')->addCssClass('col-12'),
            FormField::addPanel('Logo')->setIcon('fa fa-image')->addCssClass('col-12'),
            Field::new('favicon', 'Favicon')->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', false)->setColumns(12),
            Field::new('logo', 'Logo (Header HP)')->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', false)->setColumns(12),
            Field::new('logoPage', 'Logo (Header Autre page)')->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', false)->setColumns(12),
            FormField::addTab('SEO')->setIcon('fa fa-magnifying-glass')->addCssClass('col-12'),
            TextField::new('title', 'Libellé du site WEB')->setHelp("Utilisé sur les onglets des pages")->setColumns(12),
            FormField::addPanel("SEO Page d'accueil")->setIcon('fa fa-magnifying-glass')->addCssClass('col-12 mb-2'),
            InitialTranslationsField::new('translations', '', $fieldsSeo, [], ['metaTitle', 'metaDescription'])->setLabel(false),
            FormField::addPanel("SEO Page listing des actualités")->setIcon('fa fa-magnifying-glass')->addCssClass('col-12 mb-2'),
            AdditionalTranslationField::new('translationsSeoNews', '', ['metaTitleNews', 'metaDescriptionNews'])->setLabel(false),
            FormField::addPanel("SEO Page listing des communiqués de presse")->setIcon('fa fa-magnifying-glass')->addCssClass('col-12 mb-2'),
            AdditionalTranslationField::new('translationsSeoCommunique', '', ['metaTitleCommunique', 'metaDescriptionCommunique'])->setLabel(false),
            FormField::addPanel("SEO Page listing des évènements")->setIcon('fa fa-magnifying-glass')->addCssClass('col-12 mb-2'),
            AdditionalTranslationField::new('translationsSeoEvent', '', ['metaTitleEvents', 'metaDescriptionEvents'])->setLabel(false),
            FormField::addPanel("SEO Page Médiathèque")->setIcon('fa fa-magnifying-glass')->addCssClass('col-12 mb-2'),
            AdditionalTranslationField::new('translationsSeoMediatheque', '', ['metaTitleMediatheque', 'metaDescriptionMediatheque'])->setLabel(false),
            FormField::addPanel("SEO Page listing des offres d'emploi")->setIcon('fa fa-magnifying-glass')->addCssClass('col-12 mb-2'),
            AdditionalTranslationField::new('translationsSeoOffer', '', ['metaTitleOffers', 'metaDescriptionOffers'])->setLabel(false),
            FormField::addPanel("SEO Page Contact")->setIcon('fa fa-magnifying-glass')->addCssClass('col-12 mb-2'),
            AdditionalTranslationField::new('translationsSeoContact', '', ['metaTitleContact', 'metaDescriptionContact'])->setLabel(false),
            FormField::addPanel("SEO Meta Image")->setIcon('fa fa-magnifying-glass')->addCssClass('col-12 mb-2'),
            Field::new('metaImage', "Meta image page d'accueil")->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', true)->setColumns(3),
            Field::new('metaImageNews', "Meta image page actualités")->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', true)->setColumns(3),
            Field::new('metaImageCommunique', "Meta image page communiqué de presse")->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', true)->setColumns(3),
            Field::new('metaImageEvents', "Meta image page évènements")->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', true)->setColumns(3),
            Field::new('metaImageMediatheque', "Meta image médiathèque")->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', true)->setColumns(3),
            Field::new('metaImageOffers', "Meta image page offre d'emplois")->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', true)->setColumns(3),
            Field::new('metaImageContact', "Meta image page contact")->setFormType(VichImageType::class)->onlyOnForms()->setFormTypeOption('allow_delete', true)->setColumns(3),
            FormField::addTab('Analytics')->setIcon('fa fa-chart-line')->addCssClass('col-12'),
            FormField::addPanel('Google Analytics')->setIcon('fa fa-chart-line')->addCssClass('col-12'),
            TextField::new('googleAnalyticsId', "ID de propriété Google Analytics")
                ->setHelp("Exemple : G-XXXXXXXXXX ou UA-XXXXXXXXX-X")
                ->setColumns(12),
            FormField::addTab('Maintenance')->setIcon('fa fa-gear')->addCssClass('col-12'),
            FormField::addPanel('Maintenance')->setIcon('fa fa-gear')->addCssClass('col-12'),
            BooleanField::new('maintenance', 'Mode maintenance actif'),
        ];
    }
}
