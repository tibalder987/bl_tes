<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230811050701 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE media (id INT AUTO_INCREMENT NOT NULL, media_document_type_id INT DEFAULT NULL, media_type INT DEFAULT 1 NOT NULL, active TINYINT(1) DEFAULT 1 NOT NULL, file_name VARCHAR(255) NOT NULL, file_type VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_6A2CA10C2B8AF27A (media_document_type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media_document_type (id INT AUTO_INCREMENT NOT NULL, active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media_document_type_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_53BCF6AF2C2AC5D3 (translatable_id), UNIQUE INDEX media_document_type_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE media_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_430137FC2C2AC5D3 (translatable_id), UNIQUE INDEX media_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10C2B8AF27A FOREIGN KEY (media_document_type_id) REFERENCES media_document_type (id)');
        $this->addSql('ALTER TABLE media_document_type_translation ADD CONSTRAINT FK_53BCF6AF2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES media_document_type (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE media_translation ADD CONSTRAINT FK_430137FC2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES media (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE media DROP FOREIGN KEY FK_6A2CA10C2B8AF27A');
        $this->addSql('ALTER TABLE media_document_type_translation DROP FOREIGN KEY FK_53BCF6AF2C2AC5D3');
        $this->addSql('ALTER TABLE media_translation DROP FOREIGN KEY FK_430137FC2C2AC5D3');
        $this->addSql('DROP TABLE media');
        $this->addSql('DROP TABLE media_document_type');
        $this->addSql('DROP TABLE media_document_type_translation');
        $this->addSql('DROP TABLE media_translation');
    }
}
