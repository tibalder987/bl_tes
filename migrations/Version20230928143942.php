<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230928143942 extends AbstractMigration
{

    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category_translation ADD path VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category_translation DROP path');
    }

    public function postUp(Schema $schema): void
    {
        $stmt = $this->connection->prepare("SELECT * FROM category_translation");
        $resultSet = $stmt->executeQuery();

        // We can't use Doctrine's ORM to fetch the item, because there is no Entity for legacy table `roles`
        while ($row = $resultSet->fetchAssociative()) {
            $categoryTranslationId = $row['id'];
            $this->connection->update('category_translation', ['path' => $categoryTranslationId], ['id' => $categoryTranslationId]);
        }
    }
}
