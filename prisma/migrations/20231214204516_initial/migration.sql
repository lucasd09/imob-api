-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Owner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Renter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NOT NULL,
    `status` ENUM('AVAILABLE', 'RENTED') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ownership` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cut` DOUBLE NOT NULL,
    `isMainOwner` BOOLEAN NOT NULL,
    `propertyId` INTEGER NOT NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_Ownership` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_Ownership_AB_unique`(`A`, `B`),
    INDEX `_Ownership_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ownership` ADD CONSTRAINT `Ownership_propertyId_fkey` FOREIGN KEY (`propertyId`) REFERENCES `Property`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ownership` ADD CONSTRAINT `Ownership_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Owner`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Ownership` ADD CONSTRAINT `_Ownership_A_fkey` FOREIGN KEY (`A`) REFERENCES `Owner`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Ownership` ADD CONSTRAINT `_Ownership_B_fkey` FOREIGN KEY (`B`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
