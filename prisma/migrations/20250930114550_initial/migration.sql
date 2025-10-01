-- CreateTable
CREATE TABLE `Entreprises` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `paiement` VARCHAR(191) NOT NULL DEFAULT 'XOF',
    `dbName` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Entreprises_dbName_key`(`dbName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'CAISSIER') NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `entrepriseId` INTEGER NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_entrepriseId_fkey` FOREIGN KEY (`entrepriseId`) REFERENCES `Entreprises`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
