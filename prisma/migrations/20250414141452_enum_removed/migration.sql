/*
  Warnings:

  - You are about to drop the column `status` on the `Response` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Response" DROP COLUMN "status";

-- DropEnum
DROP TYPE "ResponseMood";
