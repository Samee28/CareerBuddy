/*
  Warnings:

  - You are about to drop the column `lastUpdate` on the `IndustryInsights` table. All the data in the column will be lost.
  - Changed the type of `demandLevel` on the `IndustryInsights` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `marketOutlook` on the `IndustryInsights` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `nextUpdate` on table `IndustryInsights` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "IndustryInsights" DROP COLUMN "lastUpdate",
ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "demandLevel",
ADD COLUMN     "demandLevel" TEXT NOT NULL,
DROP COLUMN "marketOutlook",
ADD COLUMN     "marketOutlook" TEXT NOT NULL,
ALTER COLUMN "nextUpdate" SET NOT NULL;
