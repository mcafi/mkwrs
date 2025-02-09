-- CreateTable
CREATE TABLE "Xd" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,

    CONSTRAINT "Xd_pkey" PRIMARY KEY ("id")
);
