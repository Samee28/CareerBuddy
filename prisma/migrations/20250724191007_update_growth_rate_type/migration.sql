/*
  Warnings:

  - Changed the type of `growthRate` on the `IndustryInsights` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "IndustryInsights" DROP COLUMN "growthRate",
ADD COLUMN     "growthRate" DOUBLE PRECISION NOT NULL;
