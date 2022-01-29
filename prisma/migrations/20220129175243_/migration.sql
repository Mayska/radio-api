-- AlterTable
ALTER TABLE "Radios" ADD COLUMN "url_flux_secondary" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Home" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "url_img" TEXT,
    "actif" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Home" ("category", "id", "name", "url", "url_img") SELECT "category", "id", "name", "url", "url_img" FROM "Home";
DROP TABLE "Home";
ALTER TABLE "new_Home" RENAME TO "Home";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
