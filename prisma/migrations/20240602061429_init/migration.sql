/*
  Warnings:

  - The primary key for the `Todo_list` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Todo_list" DROP CONSTRAINT "Todo_list_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Todo_list_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Todo_list_id_seq";
