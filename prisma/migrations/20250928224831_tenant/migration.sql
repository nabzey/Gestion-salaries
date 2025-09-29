/*
  Warnings:

  - You are about to drop the `Entreprises` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_entrepriseId_fkey`;

-- DropTable
DROP TABLE `Entreprises`;

-- DropTable
DROP TABLE `Users`;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `poste` VARCHAR(191) NOT NULL,
    `typeContrat` ENUM('JOURNALIER', 'FIXE', 'HONORAIRE') NOT NULL,
    `tauxSalaire` DECIMAL(65, 30) NOT NULL,
    `joursTravailles` INTEGER NULL,
    `coordonneesBancaires` VARCHAR(191) NULL,
    `actif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PayRun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `periode` DATETIME(3) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `status` ENUM('BROUILLON', 'APPROUVE', 'CLOTURE') NOT NULL DEFAULT 'BROUILLON',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payslip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employeeId` INTEGER NOT NULL,
    `payRunId` INTEGER NOT NULL,
    `brut` DECIMAL(65, 30) NOT NULL,
    `deductions` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `net` DECIMAL(65, 30) NOT NULL,
    `status` ENUM('PAYE', 'PARTIEL', 'EN_ATTENTE') NOT NULL DEFAULT 'EN_ATTENTE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `payslipId` INTEGER NOT NULL,
    `montant` DECIMAL(65, 30) NOT NULL,
    `mode` ENUM('ESPECES', 'VIREMENT_BANCAIRE', 'ORANGE_MONEY', 'WAVE') NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payslip` ADD CONSTRAINT `Payslip_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payslip` ADD CONSTRAINT `Payslip_payRunId_fkey` FOREIGN KEY (`payRunId`) REFERENCES `PayRun`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_payslipId_fkey` FOREIGN KEY (`payslipId`) REFERENCES `Payslip`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
