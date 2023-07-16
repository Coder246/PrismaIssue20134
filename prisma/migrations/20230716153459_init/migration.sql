-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "c" INTEGER NOT NULL,
    "d" INTEGER NOT NULL,
    "e" INTEGER NOT NULL,
    "f" INTEGER NOT NULL,
    "g" INTEGER NOT NULL,
    "h" INTEGER NOT NULL,
    "i" INTEGER NOT NULL,
    "j" INTEGER NOT NULL,
    "k" INTEGER NOT NULL,
    "l" INTEGER NOT NULL,
    "m" INTEGER NOT NULL,
    "n" INTEGER NOT NULL,
    "o" INTEGER NOT NULL,
    "p" INTEGER NOT NULL,
    "q" INTEGER NOT NULL,
    "r" INTEGER NOT NULL,
    "s" INTEGER NOT NULL,
    "t" INTEGER NOT NULL,
    "u" INTEGER NOT NULL,
    "v" INTEGER NOT NULL,
    "w" INTEGER NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "z" INTEGER NOT NULL,
    "testconId" TEXT NOT NULL,
    CONSTRAINT "Test_testconId_fkey" FOREIGN KEY ("testconId") REFERENCES "testcon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "testcon" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_id_key" ON "Test"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Test_testconId_key" ON "Test"("testconId");

-- CreateIndex
CREATE UNIQUE INDEX "testcon_id_key" ON "testcon"("id");
