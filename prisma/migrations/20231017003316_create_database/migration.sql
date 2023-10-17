-- CreateTable
CREATE TABLE "SM" (
    "id" SERIAL NOT NULL,
    "productId" TEXT NOT NULL,
    "originalPrice" INTEGER NOT NULL,
    "newPrice" INTEGER NOT NULL,
    "aproved" BOOLEAN NOT NULL,
    "manualAproveNeed" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SM_pkey" PRIMARY KEY ("id")
);
