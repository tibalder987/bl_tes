<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251112193250 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX unique_file_permission ON file_manager_permission');
        $this->addSql('DROP INDEX unique_folder_permission ON file_manager_permission');
        $this->addSql('ALTER TABLE file_manager_permission ADD group_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE file_manager_permission ADD CONSTRAINT FK_E19B4A78FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX idx_permission_group ON file_manager_permission (group_id)');
        $this->addSql('CREATE UNIQUE INDEX unique_file_permission ON file_manager_permission (file_id, user_id, role, group_id)');
        $this->addSql('CREATE UNIQUE INDEX unique_folder_permission ON file_manager_permission (folder_id, user_id, role, group_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE file_manager_permission DROP FOREIGN KEY FK_E19B4A78FE54D947');
        $this->addSql('DROP INDEX idx_permission_group ON file_manager_permission');
        $this->addSql('DROP INDEX unique_file_permission ON file_manager_permission');
        $this->addSql('DROP INDEX unique_folder_permission ON file_manager_permission');
        $this->addSql('ALTER TABLE file_manager_permission DROP group_id');
        $this->addSql('CREATE UNIQUE INDEX unique_file_permission ON file_manager_permission (file_id, user_id, role)');
        $this->addSql('CREATE UNIQUE INDEX unique_folder_permission ON file_manager_permission (folder_id, user_id, role)');
    }
}
