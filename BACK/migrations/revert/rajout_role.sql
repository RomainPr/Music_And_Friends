-- Revert music-and-friends:rajout_role from pg

BEGIN;

ALTER TABLE "user" DROP COLUMN "role";
ALTER TABLE "place" DROP COLUMN "role";
ALTER TABLE "band" DROP COLUMN "role";

COMMIT;
