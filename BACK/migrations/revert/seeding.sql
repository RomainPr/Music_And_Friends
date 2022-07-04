-- Revert music-and-friends:seeding from pg

BEGIN;

TRUNCATE TABLE "user" CASCADE;
TRUNCATE TABLE "place" CASCADE ;
TRUNCATE TABLE "band" CASCADE;

COMMIT;
