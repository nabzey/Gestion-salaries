/*
  Warnings:

  - A unique constraint covering the columns `[dbName]` on the table `Entreprises` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Entreprises` ADD COLUMN `dbName` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Entreprises_dbName_key` ON `Entreprises`(`dbName`);
