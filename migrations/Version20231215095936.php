<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231215095936 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE faq (id INT AUTO_INCREMENT NOT NULL, theme_id INT NOT NULL, ahead TINYINT(1) NOT NULL, active TINYINT(1) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_E8FF75CC59027487 (theme_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE faq_theme (id INT AUTO_INCREMENT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE faq_theme_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, path VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_C6A36D9C2C2AC5D3 (translatable_id), UNIQUE INDEX faq_theme_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE faq_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, question VARCHAR(255) NOT NULL, answer LONGTEXT NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_50A668562C2AC5D3 (translatable_id), UNIQUE INDEX faq_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE faq ADD CONSTRAINT FK_E8FF75CC59027487 FOREIGN KEY (theme_id) REFERENCES faq_theme (id)');
        $this->addSql('ALTER TABLE faq_theme_translation ADD CONSTRAINT FK_C6A36D9C2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES faq_theme (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE faq_translation ADD CONSTRAINT FK_50A668562C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES faq (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE faq DROP FOREIGN KEY FK_E8FF75CC59027487');
        $this->addSql('ALTER TABLE faq_theme_translation DROP FOREIGN KEY FK_C6A36D9C2C2AC5D3');
        $this->addSql('ALTER TABLE faq_translation DROP FOREIGN KEY FK_50A668562C2AC5D3');
        $this->addSql('DROP TABLE faq');
        $this->addSql('DROP TABLE faq_theme');
        $this->addSql('DROP TABLE faq_theme_translation');
        $this->addSql('DROP TABLE faq_translation');
    }
}
