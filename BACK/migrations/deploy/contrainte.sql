-- Deploy music-and-friends:contrainte to pg

BEGIN;
/*
CREATE DOMAIN valid_email AS TEXT CHECK (VALUE ~ '^\S+@\S+\.\S+$/');
CREATE DOMAIN valid_phone AS TEXT CHECK (VALUE ~ '^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})');

ALTER TABLE "user" ALTER COLUMN "email" SET DATA TYPE valid_email;
ALTER TABLE "band" ALTER COLUMN "email" SET DATA TYPE valid_email;
ALTER TABLE "place" ALTER COLUMN "email" SET DATA TYPE valid_email;

ALTER TABLE "user" ALTER COLUMN "phone" SET DATA TYPE valid_phone;
ALTER TABLE "band" ALTER COLUMN "phone" SET DATA TYPE valid_phone;
ALTER TABLE "place" ALTER COLUMN "phone" SET DATA TYPE valid_phone;
*/
COMMIT;

