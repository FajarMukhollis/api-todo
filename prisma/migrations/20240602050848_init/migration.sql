-- CreateTable
CREATE TABLE "Todo_list" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type_todo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "time_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time_changed" TIMESTAMP(3),

    CONSTRAINT "Todo_list_pkey" PRIMARY KEY ("id")
);
