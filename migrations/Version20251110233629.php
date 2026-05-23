<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251110233629 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE file_manager_share DROP FOREIGN KEY FK_CB17A9E55489CD19');
        $this->addSql('ALTER TABLE file_manager_share DROP FOREIGN KEY FK_CB17A9E5162CB942');
        $this->addSql('ALTER TABLE file_manager_share DROP FOREIGN KEY FK_CB17A9E593CB796C');
        $this->addSql('ALTER TABLE file_manager_share DROP FOREIGN KEY FK_CB17A9E5D14FE63F');
        $this->addSql('DROP TABLE file_manager_share');
        $this->addSql('ALTER TABLE file_manager_permission DROP permission');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE file_manager_share (id INT AUTO_INCREMENT NOT NULL, file_id INT DEFAULT NULL, folder_id INT DEFAULT NULL, shared_with_id INT NOT NULL, shared_by_id INT NOT NULL, permission VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, shared_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_CB17A9E55489CD19 (shared_by_id), INDEX idx_share_file (file_id), INDEX idx_share_folder (folder_id), INDEX idx_share_user (shared_with_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE file_manager_share ADD CONSTRAINT FK_CB17A9E55489CD19 FOREIGN KEY (shared_by_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_share ADD CONSTRAINT FK_CB17A9E5162CB942 FOREIGN KEY (folder_id) REFERENCES file_manager_folder (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_share ADD CONSTRAINT FK_CB17A9E593CB796C FOREIGN KEY (file_id) REFERENCES file_manager_file (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_share ADD CONSTRAINT FK_CB17A9E5D14FE63F FOREIGN KEY (shared_with_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_manager_permission ADD permission VARCHAR(50) DEFAULT NULL');
    }
}
