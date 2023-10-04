/*
  Warnings:

  - You are about to drop the column `paymentDate` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `paymentVoucher` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `purchaseDate` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `totalValue` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `product` table. All the data in the column will be lost.
  - Made the column `name` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `dueAt` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `type` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productId_fkey`;

-- AlterTable
ALTER TABLE `customer` ADD COLUMN `phone` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `paymentDate`,
    DROP COLUMN `paymentVoucher`,
    DROP COLUMN `productId`,
    DROP COLUMN `purchaseDate`,
    DROP COLUMN `quantity`,
    DROP COLUMN `status`,
    DROP COLUMN `totalValue`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `dueAt` DATETIME(3) NOT NULL,
    ADD COLUMN `paidAt` DATETIME(3) NULL,
    ADD COLUMN `paymentStatus` ENUM('PENDING', 'PAID', 'OVERDUE') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `product` DROP COLUMN `value`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `type` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Price` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `priceId` INTEGER NOT NULL,
    `orderId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_priceId_fkey` FOREIGN KEY (`priceId`) REFERENCES `Price`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
