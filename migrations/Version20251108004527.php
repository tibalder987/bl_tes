<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251108004527 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE file_manager_file (id INT AUTO_INCREMENT NOT NULL, parent_folder_id INT DEFAULT NULL, owner_id INT NOT NULL, name VARCHAR(255) NOT NULL, original_name VARCHAR(255) NOT NULL, mime_type VARCHAR(100) DEFAULT NULL, size BIGINT NOT NULL, path VARCHAR(500) NOT NULL, extension VARCHAR(50) DEFAULT NULL, is_starred TINYINT(1) DEFAULT 0 NOT NULL, is_trashed TINYINT(1) DEFAULT 0 NOT NULL, deleted_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', metadata JSON DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX idx_file_parent_folder (parent_folder_id), INDEX idx_file_owner (owner_id), INDEX idx_file_starred (is_starred), INDEX idx_file_trashed (is_trashed), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE file_manager_folder (id INT AUTO_INCREMENT NOT NULL, parent_folder_id INT DEFAULT NULL, owner_id INT NOT NULL, name VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, is_starred TINYINT(1) DEFAULT 0 NOT NULL, is_trashed TINYINT(1) DEFAULT 0 NOT NULL, deleted_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_B758B6E4989D9B62 (slug), INDEX idx_folder_parent (parent_folder_id), INDEX idx_folder_owner (owner_id), INDEX idx_folder_starred (is_starred), INDEX idx_folder_trashed (is_trashed), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE file_manager_permission (id INT AUTO_INCREMENT NOT NULL, file_id INT DEFAULT NULL, folder_id INT DEFAULT NULL, user_id INT DEFAULT NULL, granted_by_id INT NOT NULL, role VARCHAR(50) DEFAULT NULL, permission VARCHAR(50) NOT NULL, INDEX IDX_E19B4A783151C11F (granted_by_id), INDEX idx_permission_file (file_id), INDEX idx_permission_folder (folder_id), INDEX idx_permission_user (user_id), UNIQUE INDEX unique_file_permission (file_id, user_id, role), UNIQUE INDEX unique_folder_permission (folder_id, user_id, role), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE file_manager_share (id INT AUTO_INCREMENT NOT NULL, file_id INT DEFAULT NULL, folder_id INT DEFAULT NULL, shared_with_id INT NOT NULL, shared_by_id INT NOT NULL, permission VARCHAR(50) NOT NULL, shared_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_CB17A9E55489CD19 (shared_by_id), INDEX idx_share_file (file_id), INDEX idx_share_folder (folder_id), INDEX idx_share_user (shared_with_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE file_manager_file ADD CONSTRAINT FK_29082FE3E76796AC FOREIGN KEY (parent_folder_id) REFERENCES file_manager_folder (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_file ADD CONSTRAINT FK_29082FE37E3C61F9 FOREIGN KEY (owner_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_folder ADD CONSTRAINT FK_B758B6E4E76796AC FOREIGN KEY (parent_folder_id) REFERENCES file_manager_folder (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_folder ADD CONSTRAINT FK_B758B6E47E3C61F9 FOREIGN KEY (owner_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_permission ADD CONSTRAINT FK_E19B4A7893CB796C FOREIGN KEY (file_id) REFERENCES file_manager_file (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_permission ADD CONSTRAINT FK_E19B4A78162CB942 FOREIGN KEY (folder_id) REFERENCES file_manager_folder (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_permission ADD CONSTRAINT FK_E19B4A78A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_permission ADD CONSTRAINT FK_E19B4A783151C11F FOREIGN KEY (granted_by_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_share ADD CONSTRAINT FK_CB17A9E593CB796C FOREIGN KEY (file_id) REFERENCES file_manager_file (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_share ADD CONSTRAINT FK_CB17A9E5162CB942 FOREIGN KEY (folder_id) REFERENCES file_manager_folder (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_share ADD CONSTRAINT FK_CB17A9E5D14FE63F FOREIGN KEY (shared_with_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_share ADD CONSTRAINT FK_CB17A9E55489CD19 FOREIGN KEY (shared_by_id) REFERENCES `user` (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE file_manager_file DROP FOREIGN KEY FK_29082FE3E76796AC');
        $this->addSql('ALTER TABLE file_manager_file DROP FOREIGN KEY FK_29082FE37E3C61F9');
        $this->addSql('ALTER TABLE file_manager_folder DROP FOREIGN KEY FK_B758B6E4E76796AC');
        $this->addSql('ALTER TABLE file_manager_folder DROP FOREIGN KEY FK_B758B6E47E3C61F9');
        $this->addSql('ALTER TABLE file_manager_permission DROP FOREIGN KEY FK_E19B4A7893CB796C');
        $this->addSql('ALTER TABLE file_manager_permission DROP FOREIGN KEY FK_E19B4A78162CB942');
        $this->addSql('ALTER TABLE file_manager_permission DROP FOREIGN KEY FK_E19B4A78A76ED395');
        $this->addSql('ALTER TABLE file_manager_permission DROP FOREIGN KEY FK_E19B4A783151C11F');
        $this->addSql('ALTER TABLE file_manager_share DROP FOREIGN KEY FK_CB17A9E593CB796C');
        $this->addSql('ALTER TABLE file_manager_share DROP FOREIGN KEY FK_CB17A9E5162CB942');
        $this->addSql('ALTER TABLE file_manager_share DROP FOREIGN KEY FK_CB17A9E5D14FE63F');
        $this->addSql('ALTER TABLE file_manager_share DROP FOREIGN KEY FK_CB17A9E55489CD19');
        $this->addSql('DROP TABLE file_manager_file');
        $this->addSql('DROP TABLE file_manager_folder');
        $this->addSql('DROP TABLE file_manager_permission');
        $this->addSql('DROP TABLE file_manager_share');
    }
}
