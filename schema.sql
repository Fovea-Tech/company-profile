-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title_id" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "category_en" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "desc_id" TEXT NOT NULL,
    "desc_en" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "tech" TEXT NOT NULL,
    "challenge_id" TEXT NOT NULL,
    "challenge_en" TEXT NOT NULL,
    "solution_id" TEXT NOT NULL,
    "solution_en" TEXT NOT NULL,
    "results_id" TEXT NOT NULL,
    "results_en" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question_id" TEXT NOT NULL,
    "question_en" TEXT NOT NULL,
    "answer_id" TEXT NOT NULL,
    "answer_en" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

