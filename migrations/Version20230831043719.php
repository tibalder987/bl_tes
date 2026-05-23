<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230831043719 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE job (id INT AUTO_INCREMENT NOT NULL, active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE job_offer (id INT AUTO_INCREMENT NOT NULL, job_id INT NOT NULL, job_type_id INT NOT NULL, date_limit_offer DATETIME DEFAULT NULL, active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_288A3A4EBE04EA9 (job_id), INDEX IDX_288A3A4E5FA33B08 (job_type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE job_offer_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, presentation LONGTEXT NOT NULL, missions LONGTEXT DEFAULT NULL, competences LONGTEXT DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_314D39942C2AC5D3 (translatable_id), UNIQUE INDEX job_offer_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE job_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_D7055E262C2AC5D3 (translatable_id), UNIQUE INDEX job_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE job_type (id INT AUTO_INCREMENT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE job_type_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_229672782C2AC5D3 (translatable_id), UNIQUE INDEX job_type_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE job_offer ADD CONSTRAINT FK_288A3A4EBE04EA9 FOREIGN KEY (job_id) REFERENCES job (id)');
        $this->addSql('ALTER TABLE job_offer ADD CONSTRAINT FK_288A3A4E5FA33B08 FOREIGN KEY (job_type_id) REFERENCES job_type (id)');
        $this->addSql('ALTER TABLE job_offer_translation ADD CONSTRAINT FK_314D39942C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES job_offer (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE job_translation ADD CONSTRAINT FK_D7055E262C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES job (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE job_type_translation ADD CONSTRAINT FK_229672782C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES job_type (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE job_offer DROP FOREIGN KEY FK_288A3A4EBE04EA9');
        $this->addSql('ALTER TABLE job_offer DROP FOREIGN KEY FK_288A3A4E5FA33B08');
        $this->addSql('ALTER TABLE job_offer_translation DROP FOREIGN KEY FK_314D39942C2AC5D3');
        $this->addSql('ALTER TABLE job_translation DROP FOREIGN KEY FK_D7055E262C2AC5D3');
        $this->addSql('ALTER TABLE job_type_translation DROP FOREIGN KEY FK_229672782C2AC5D3');
        $this->addSql('DROP TABLE job');
        $this->addSql('DROP TABLE job_offer');
        $this->addSql('DROP TABLE job_offer_translation');
        $this->addSql('DROP TABLE job_translation');
        $this->addSql('DROP TABLE job_type');
        $this->addSql('DROP TABLE job_type_translation');
    }

    public function postUp(Schema $schema): void
    {
        $this->connection->insert('job_type', ['id' => 1]);
        $this->connection->insert('job_type_translation', ['translatable_id' => 1, 'locale' => 'fr', 'title' => "CDI"]);
        $this->connection->insert('job_type', ['id' => 2]);
        $this->connection->insert('job_type_translation', ['translatable_id' => 2, 'locale' => 'fr', 'title' => "CDD"]);
    }
}
