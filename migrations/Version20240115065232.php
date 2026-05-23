<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240115065232 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE survey_participation (id INT AUTO_INCREMENT NOT NULL, survey_access_id INT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_C04E61B7EABC25E2 (survey_access_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE survey_participation_detail (id INT AUTO_INCREMENT NOT NULL, survey_participation_id INT NOT NULL, survey_question_id INT NOT NULL, survey_question_answer_id INT DEFAULT NULL, value_txt VARCHAR(255) DEFAULT NULL, value_int INT DEFAULT NULL, INDEX IDX_60C13DEF4BD21B14 (survey_participation_id), INDEX IDX_60C13DEFA6DF29BA (survey_question_id), INDEX IDX_60C13DEFB234F028 (survey_question_answer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE survey_participation ADD CONSTRAINT FK_C04E61B7EABC25E2 FOREIGN KEY (survey_access_id) REFERENCES survey_access (id)');
        $this->addSql('ALTER TABLE survey_participation_detail ADD CONSTRAINT FK_60C13DEF4BD21B14 FOREIGN KEY (survey_participation_id) REFERENCES survey_participation (id)');
        $this->addSql('ALTER TABLE survey_participation_detail ADD CONSTRAINT FK_60C13DEFA6DF29BA FOREIGN KEY (survey_question_id) REFERENCES survey_question (id)');
        $this->addSql('ALTER TABLE survey_participation_detail ADD CONSTRAINT FK_60C13DEFB234F028 FOREIGN KEY (survey_question_answer_id) REFERENCES survey_question_answer (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE survey_participation DROP FOREIGN KEY FK_C04E61B7EABC25E2');
        $this->addSql('ALTER TABLE survey_participation_detail DROP FOREIGN KEY FK_60C13DEF4BD21B14');
        $this->addSql('ALTER TABLE survey_participation_detail DROP FOREIGN KEY FK_60C13DEFA6DF29BA');
        $this->addSql('ALTER TABLE survey_participation_detail DROP FOREIGN KEY FK_60C13DEFB234F028');
        $this->addSql('DROP TABLE survey_participation');
        $this->addSql('DROP TABLE survey_participation_detail');
    }
}
