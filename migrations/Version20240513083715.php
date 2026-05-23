<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240513083715 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE page DROP meta_title, DROP meta_description');
        $this->addSql('ALTER TABLE page_translation ADD meta_title VARCHAR(255) DEFAULT NULL, ADD meta_description VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE page ADD meta_title VARCHAR(255) DEFAULT NULL, ADD meta_description VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE page_translation DROP meta_title, DROP meta_description');
    }
}
