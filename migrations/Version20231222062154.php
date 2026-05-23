<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231222062154 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE configuration ADD address LONGTEXT DEFAULT NULL, ADD phone_contact VARCHAR(255) DEFAULT NULL, ADD email_contact VARCHAR(255) DEFAULT NULL, ADD facebook VARCHAR(255) DEFAULT NULL, ADD instagram VARCHAR(255) DEFAULT NULL, ADD youtube VARCHAR(255) DEFAULT NULL, ADD twitter VARCHAR(255) DEFAULT NULL, ADD linkedin VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE footer DROP address, DROP phone_contact, DROP email_contact, DROP facebook, DROP instagram, DROP youtube, DROP twitter, DROP linkedin');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE configuration DROP address, DROP phone_contact, DROP email_contact, DROP facebook, DROP instagram, DROP youtube, DROP twitter, DROP linkedin');
        $this->addSql('ALTER TABLE footer ADD address LONGTEXT DEFAULT NULL, ADD phone_contact VARCHAR(255) DEFAULT NULL, ADD email_contact VARCHAR(255) DEFAULT NULL, ADD facebook VARCHAR(255) DEFAULT NULL, ADD instagram VARCHAR(255) DEFAULT NULL, ADD youtube VARCHAR(255) DEFAULT NULL, ADD twitter VARCHAR(255) DEFAULT NULL, ADD linkedin VARCHAR(255) DEFAULT NULL');
    }
}
