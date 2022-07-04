-- Revert music-and-friends:alter_table_user_and_place from pg

BEGIN;

ALTER TABLE "place" DROP COLUMN "firstname";
ALTER TABLE "place" DROP COLUMN "lastname";

ALTER TABLE "user" DROP COLUMN "description";
COMMIT;
