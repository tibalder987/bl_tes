<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240114160038 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE survey (id INT AUTO_INCREMENT NOT NULL, public TINYINT(1) DEFAULT 1 NOT NULL, active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE survey_access (id INT AUTO_INCREMENT NOT NULL, survey_id INT NOT NULL, link VARCHAR(255) NOT NULL, INDEX IDX_2E67E338B3FE509D (survey_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE survey_question (id INT AUTO_INCREMENT NOT NULL, survey_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, active TINYINT(1) DEFAULT 1 NOT NULL, INDEX IDX_EA000F69B3FE509D (survey_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE survey_question_answer (id INT AUTO_INCREMENT NOT NULL, survey_question_id INT DEFAULT NULL, INDEX IDX_7554B719A6DF29BA (survey_question_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE survey_question_answer_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_71EEB542C2AC5D3 (translatable_id), UNIQUE INDEX survey_question_answer_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE survey_question_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_63CF5EBB2C2AC5D3 (translatable_id), UNIQUE INDEX survey_question_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE survey_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, intro LONGTEXT DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_C919A6A2C2AC5D3 (translatable_id), UNIQUE INDEX survey_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE survey_access ADD CONSTRAINT FK_2E67E338B3FE509D FOREIGN KEY (survey_id) REFERENCES survey (id)');
        $this->addSql('ALTER TABLE survey_question ADD CONSTRAINT FK_EA000F69B3FE509D FOREIGN KEY (survey_id) REFERENCES survey (id)');
        $this->addSql('ALTER TABLE survey_question_answer ADD CONSTRAINT FK_7554B719A6DF29BA FOREIGN KEY (survey_question_id) REFERENCES survey_question (id)');
        $this->addSql('ALTER TABLE survey_question_answer_translation ADD CONSTRAINT FK_71EEB542C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES survey_question_answer (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE survey_question_translation ADD CONSTRAINT FK_63CF5EBB2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES survey_question (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE survey_translation ADD CONSTRAINT FK_C919A6A2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES survey (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE survey_access DROP FOREIGN KEY FK_2E67E338B3FE509D');
        $this->addSql('ALTER TABLE survey_question DROP FOREIGN KEY FK_EA000F69B3FE509D');
        $this->addSql('ALTER TABLE survey_question_answer DROP FOREIGN KEY FK_7554B719A6DF29BA');
        $this->addSql('ALTER TABLE survey_question_answer_translation DROP FOREIGN KEY FK_71EEB542C2AC5D3');
        $this->addSql('ALTER TABLE survey_question_translation DROP FOREIGN KEY FK_63CF5EBB2C2AC5D3');
        $this->addSql('ALTER TABLE survey_translation DROP FOREIGN KEY FK_C919A6A2C2AC5D3');
        $this->addSql('DROP TABLE survey');
        $this->addSql('DROP TABLE survey_access');
        $this->addSql('DROP TABLE survey_question');
        $this->addSql('DROP TABLE survey_question_answer');
        $this->addSql('DROP TABLE survey_question_answer_translation');
        $this->addSql('DROP TABLE survey_question_translation');
        $this->addSql('DROP TABLE survey_translation');
    }
}
