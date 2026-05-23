<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240513080207 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE configuration_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, meta_title VARCHAR(255) DEFAULT NULL, meta_description VARCHAR(255) DEFAULT NULL, meta_title_news VARCHAR(255) DEFAULT NULL, meta_description_news VARCHAR(255) DEFAULT NULL, meta_title_communique VARCHAR(255) DEFAULT NULL, meta_description_communique VARCHAR(255) DEFAULT NULL, meta_title_events VARCHAR(255) DEFAULT NULL, meta_description_events VARCHAR(255) DEFAULT NULL, meta_title_mediatheque VARCHAR(255) DEFAULT NULL, meta_description_mediatheque VARCHAR(255) DEFAULT NULL, meta_title_offers VARCHAR(255) DEFAULT NULL, meta_description_offers VARCHAR(255) DEFAULT NULL, meta_title_contact VARCHAR(255) DEFAULT NULL, meta_description_contact VARCHAR(255) DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_DFFE27172C2AC5D3 (translatable_id), UNIQUE INDEX configuration_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE configuration_translation ADD CONSTRAINT FK_DFFE27172C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES configuration (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE article_translation CHANGE elements elements JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE configuration DROP meta_title, DROP meta_description, DROP meta_title_news, DROP meta_description_news, DROP meta_title_communique, DROP meta_description_communique, DROP meta_title_events, DROP meta_description_events, DROP meta_title_mediatheque, DROP meta_description_mediatheque, DROP meta_title_offers, DROP meta_description_offers, DROP meta_title_contact, DROP meta_description_contact');
        $this->addSql('ALTER TABLE home_page_translation CHANGE elements elements JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE page_translation CHANGE elements elements JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE configuration_translation DROP FOREIGN KEY FK_DFFE27172C2AC5D3');
        $this->addSql('DROP TABLE configuration_translation');
        $this->addSql('ALTER TABLE article_translation CHANGE elements elements JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE configuration ADD meta_title VARCHAR(255) DEFAULT NULL, ADD meta_description VARCHAR(255) DEFAULT NULL, ADD meta_title_news VARCHAR(255) DEFAULT NULL, ADD meta_description_news VARCHAR(255) DEFAULT NULL, ADD meta_title_communique VARCHAR(255) DEFAULT NULL, ADD meta_description_communique VARCHAR(255) DEFAULT NULL, ADD meta_title_events VARCHAR(255) DEFAULT NULL, ADD meta_description_events VARCHAR(255) DEFAULT NULL, ADD meta_title_mediatheque VARCHAR(255) DEFAULT NULL, ADD meta_description_mediatheque VARCHAR(255) DEFAULT NULL, ADD meta_title_offers VARCHAR(255) DEFAULT NULL, ADD meta_description_offers VARCHAR(255) DEFAULT NULL, ADD meta_title_contact VARCHAR(255) DEFAULT NULL, ADD meta_description_contact VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE home_page_translation CHANGE elements elements JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE page_translation CHANGE elements elements JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE `user` CHANGE roles roles JSON NOT NULL');
    }
}
