-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "codigo" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_codigo_key" ON "Product"("codigo");
