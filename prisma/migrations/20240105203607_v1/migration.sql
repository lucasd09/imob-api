/*
  Warnings:

  - You are about to drop the column `status` on the `property` table. All the data in the column will be lost.
  - You are about to drop the `_ownership` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birthdate` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpjcpf` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ierg` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoa` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Ownership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avaliable` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `Renter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpjcpf` to the `Renter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Renter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ierg` to the `Renter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pessoa` to the `Renter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Renter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Renter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `access` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ownership` DROP FOREIGN KEY `_Ownership_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ownership` DROP FOREIGN KEY `_Ownership_B_fkey`;

-- DropForeignKey
ALTER TABLE `ownership` DROP FOREIGN KEY `Ownership_ownerId_fkey`;

-- DropForeignKey
ALTER TABLE `ownership` DROP FOREIGN KEY `Ownership_propertyId_fkey`;

-- AlterTable
ALTER TABLE `owner` ADD COLUMN `birthdate` DATETIME(3) NOT NULL,
    ADD COLUMN `cnpjcpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `ierg` VARCHAR(191) NOT NULL,
    ADD COLUMN `pessoa` ENUM('FISICA', 'JURIDICA') NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ownership` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `property` DROP COLUMN `status`,
    ADD COLUMN `avaliable` BOOLEAN NOT NULL,
    ADD COLUMN `number` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `renter` ADD COLUMN `birthdate` DATETIME(3) NOT NULL,
    ADD COLUMN `cnpjcpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `ierg` VARCHAR(191) NOT NULL,
    ADD COLUMN `pessoa` ENUM('FISICA', 'JURIDICA') NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `access` BOOLEAN NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_ownership`;

-- CreateTable
CREATE TABLE `Contract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` DOUBLE NOT NULL,
    `status` ENUM('EDITING', 'ACTIVE', 'CLOSED') NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `propertyId` INTEGER NOT NULL,
    `renterId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `Contract_propertyId_idx`(`propertyId`),
    INDEX `Contract_renterId_idx`(`renterId`),
    INDEX `Contract_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Billing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('RENT', 'INSURANCE') NOT NULL,
    `contractId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    INDEX `Billing_contractId_idx`(`contractId`),
    INDEX `Billing_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Installment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` INTEGER NOT NULL,
    `value` DOUBLE NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `paid` BOOLEAN NOT NULL,
    `billingId` INTEGER NOT NULL,

    INDEX `Installment_billingId_idx`(`billingId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Owner_userId_idx` ON `Owner`(`userId`);

-- CreateIndex
CREATE INDEX `Ownership_userId_idx` ON `Ownership`(`userId`);

-- CreateIndex
CREATE INDEX `Property_userId_idx` ON `Property`(`userId`);

-- CreateIndex
CREATE INDEX `Renter_userId_idx` ON `Renter`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- RenameIndex
ALTER TABLE `ownership` RENAME INDEX `Ownership_ownerId_fkey` TO `Ownership_ownerId_idx`;

-- RenameIndex
ALTER TABLE `ownership` RENAME INDEX `Ownership_propertyId_fkey` TO `Ownership_propertyId_idx`;
