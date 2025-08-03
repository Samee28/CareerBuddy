/*
  Warnings:

  - You are about to drop the column `experince` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "experince",
ADD COLUMN     "experience" INTEGER;
