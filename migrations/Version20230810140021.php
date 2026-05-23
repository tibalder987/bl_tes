<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use App\Utilities\GlobalConstants;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230810140021 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE footer (id INT AUTO_INCREMENT NOT NULL, logo_name VARCHAR(255) DEFAULT NULL, address LONGTEXT DEFAULT NULL, phone_contact VARCHAR(255) DEFAULT NULL, email_contact VARCHAR(255) DEFAULT NULL, facebook VARCHAR(255) DEFAULT NULL, instagram VARCHAR(255) DEFAULT NULL, youtube VARCHAR(255) DEFAULT NULL, twitter VARCHAR(255) DEFAULT NULL, linkedin VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE footer_link (id INT AUTO_INCREMENT NOT NULL, footer_id INT DEFAULT NULL, position INT NOT NULL, INDEX IDX_6A05B20A2412A144 (footer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE footer_link_translation (id INT AUTO_INCREMENT NOT NULL, page_id INT DEFAULT NULL, translatable_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, external_path VARCHAR(255) DEFAULT NULL, locale VARCHAR(5) NOT NULL, INDEX IDX_286018CCC4663E4 (page_id), INDEX IDX_286018CC2C2AC5D3 (translatable_id), UNIQUE INDEX footer_link_translation_unique_translation (translatable_id, locale), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE footer_link ADD CONSTRAINT FK_6A05B20A2412A144 FOREIGN KEY (footer_id) REFERENCES footer (id)');
        $this->addSql('ALTER TABLE footer_link_translation ADD CONSTRAINT FK_286018CCC4663E4 FOREIGN KEY (page_id) REFERENCES page (id)');
        $this->addSql('ALTER TABLE footer_link_translation ADD CONSTRAINT FK_286018CC2C2AC5D3 FOREIGN KEY (translatable_id) REFERENCES footer_link (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE footer_link DROP FOREIGN KEY FK_6A05B20A2412A144');
        $this->addSql('ALTER TABLE footer_link_translation DROP FOREIGN KEY FK_286018CCC4663E4');
        $this->addSql('ALTER TABLE footer_link_translation DROP FOREIGN KEY FK_286018CC2C2AC5D3');
        $this->addSql('DROP TABLE footer');
        $this->addSql('DROP TABLE footer_link');
        $this->addSql('DROP TABLE footer_link_translation');
    }

    public function postUp(Schema $schema): void
    {
        $this->connection->insert('footer', ['id' => GlobalConstants::FOOTER_ID]);
    }
}
