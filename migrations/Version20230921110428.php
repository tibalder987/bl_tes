<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230921110428 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE configuration ADD meta_title_news VARCHAR(255) DEFAULT NULL, ADD meta_description_news VARCHAR(255) DEFAULT NULL, ADD meta_image_name_news VARCHAR(255) DEFAULT NULL, ADD meta_title_communique VARCHAR(255) DEFAULT NULL, ADD meta_description_communique VARCHAR(255) DEFAULT NULL, ADD meta_image_name_communique VARCHAR(255) DEFAULT NULL, ADD meta_title_events VARCHAR(255) DEFAULT NULL, ADD meta_description_events VARCHAR(255) DEFAULT NULL, ADD meta_image_name_events VARCHAR(255) DEFAULT NULL, ADD meta_title_mediatheque VARCHAR(255) DEFAULT NULL, ADD meta_description_mediatheque VARCHAR(255) DEFAULT NULL, ADD meta_image_name_mediatheque VARCHAR(255) DEFAULT NULL, ADD meta_title_offers VARCHAR(255) DEFAULT NULL, ADD meta_description_offers VARCHAR(255) DEFAULT NULL, ADD meta_image_name_offers VARCHAR(255) DEFAULT NULL, ADD meta_title_contact VARCHAR(255) DEFAULT NULL, ADD meta_description_contact VARCHAR(255) DEFAULT NULL, ADD meta_image_name_contact VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE configuration DROP meta_title_news, DROP meta_description_news, DROP meta_image_name_news, DROP meta_title_communique, DROP meta_description_communique, DROP meta_image_name_communique, DROP meta_title_events, DROP meta_description_events, DROP meta_image_name_events, DROP meta_title_mediatheque, DROP meta_description_mediatheque, DROP meta_image_name_mediatheque, DROP meta_title_offers, DROP meta_description_offers, DROP meta_image_name_offers, DROP meta_title_contact, DROP meta_description_contact, DROP meta_image_name_contact');
    }
}
