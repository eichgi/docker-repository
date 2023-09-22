-- CreateTable
CREATE TABLE "Tweets" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "publishedAt" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tweets_pkey" PRIMARY KEY ("id")
);
