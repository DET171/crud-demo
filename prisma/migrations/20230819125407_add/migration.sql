/*
  Warnings:

  - Added the required column `dob` to the `Director` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Director" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dob" DATETIME NOT NULL
);
INSERT INTO "new_Director" ("id", "name") SELECT "id", "name" FROM "Director";
DROP TABLE "Director";
ALTER TABLE "new_Director" RENAME TO "Director";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
