/*
  Warnings:

  - You are about to drop the column `quizscore` on the `Assessment` table. All the data in the column will be lost.
  - Added the required column `quizScore` to the `Assessment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "quizscore",
ADD COLUMN     "quizScore" DOUBLE PRECISION NOT NULL;
