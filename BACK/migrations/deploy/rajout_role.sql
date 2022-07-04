-- Deploy music-and-friends:rajout_role to pg

BEGIN;

ALTER TABLE "user" ADD COLUMN "role" TEXT NOT NULL DEFAULT 'musicien';
ALTER TABLE "place" ADD COLUMN "role" TEXT NOT NULL DEFAULT 'place';
ALTER TABLE "band" ADD COLUMN "role" TEXT NOT NULL DEFAULT 'band';





COMMIT;
