<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251112184301 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE file_manager_file_star (id INT AUTO_INCREMENT NOT NULL, file_id INT NOT NULL, user_id INT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX idx_file_star_file (file_id), INDEX idx_file_star_user (user_id), UNIQUE INDEX unique_file_user_star (file_id, user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE file_manager_folder_star (id INT AUTO_INCREMENT NOT NULL, folder_id INT NOT NULL, user_id INT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX idx_folder_star_folder (folder_id), INDEX idx_folder_star_user (user_id), UNIQUE INDEX unique_folder_user_star (folder_id, user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE file_manager_file_star ADD CONSTRAINT FK_498EE63B93CB796C FOREIGN KEY (file_id) REFERENCES file_manager_file (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_file_star ADD CONSTRAINT FK_498EE63BA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_folder_star ADD CONSTRAINT FK_B8981D21162CB942 FOREIGN KEY (folder_id) REFERENCES file_manager_folder (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_folder_star ADD CONSTRAINT FK_B8981D21A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('DROP INDEX idx_file_starred ON file_manager_file');
        $this->addSql('ALTER TABLE file_manager_file DROP is_starred');
        $this->addSql('DROP INDEX idx_folder_starred ON file_manager_folder');
        $this->addSql('ALTER TABLE file_manager_folder DROP is_starred');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE file_manager_file_star DROP FOREIGN KEY FK_498EE63B93CB796C');
        $this->addSql('ALTER TABLE file_manager_file_star DROP FOREIGN KEY FK_498EE63BA76ED395');
        $this->addSql('ALTER TABLE file_manager_folder_star DROP FOREIGN KEY FK_B8981D21162CB942');
        $this->addSql('ALTER TABLE file_manager_folder_star DROP FOREIGN KEY FK_B8981D21A76ED395');
        $this->addSql('DROP TABLE file_manager_file_star');
        $this->addSql('DROP TABLE file_manager_folder_star');
        $this->addSql('ALTER TABLE file_manager_file ADD is_starred TINYINT(1) DEFAULT 0 NOT NULL');
        $this->addSql('CREATE INDEX idx_file_starred ON file_manager_file (is_starred)');
        $this->addSql('ALTER TABLE file_manager_folder ADD is_starred TINYINT(1) DEFAULT 0 NOT NULL');
        $this->addSql('CREATE INDEX idx_folder_starred ON file_manager_folder (is_starred)');
    }
}
