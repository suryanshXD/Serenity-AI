-- CreateEnum
CREATE TYPE "ResponseMood" AS ENUM ('POSITIVE', 'NEGATIVE');

-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "status" "ResponseMood";
