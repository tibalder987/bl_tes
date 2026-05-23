<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use App\Utilities\GlobalConstants;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230810123245 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE home_page (id INT AUTO_INCREMENT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE home_page_translation (id INT AUTO_INCREMENT NOT NULL, translatable_id INT DEFAULT NULL, elements LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', locale VARCHAR(5) NOT NULL, INDEX IDX_C82918482C2AC5D3 (translatable_id), UNIQUE INDEX home_page_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE home_page_translation ADD CONSTRAINT FK_C82918482C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES home_page (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE home_page_translation DROP FOREIGN KEY FK_C82918482C2AC5D3');
        $this->addSql('DROP TABLE home_page');
        $this->addSql('DROP TABLE home_page_translation');
    }

    public function postUp(Schema $schema): void
    {
        $this->connection->insert('home_page', ['id' => GlobalConstants::HOMEPAGE_ID]);
        $this->connection->insert('home_page_translation', ['translatable_id' => GlobalConstants::HOMEPAGE_ID, 'locale' => 'fr']);
    }
}
