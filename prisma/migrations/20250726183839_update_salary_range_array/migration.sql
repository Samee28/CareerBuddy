/*
  Warnings:

  - The `salaryRanges` column on the `IndustryInsights` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "IndustryInsights" DROP COLUMN "salaryRanges",
ADD COLUMN     "salaryRanges" JSONB[];
