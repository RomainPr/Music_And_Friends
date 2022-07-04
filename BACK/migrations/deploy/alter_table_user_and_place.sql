-- Deploy music-and-friends:alter_table_user_and_place to pg

BEGIN;

ALTER TABLE "place" ADD COLUMN "firstname" TEXT;
ALTER TABLE "place" ADD COLUMN "lastname" TEXT;

ALTER TABLE "user" ADD COLUMN "description" TEXT;

COMMIT;
