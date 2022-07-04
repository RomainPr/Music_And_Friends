-- Revert music-and-friends:seeding_instrument_ad from pg

BEGIN;

TRUNCATE TABLE "style" CASCADE;
TRUNCATE TABLE "instrument" CASCADE ;
DROP TABLE IF EXISTS "ad_got_instrument" CASCADE;
DROP TABLE IF EXISTS "ad_got_style" CASCADE;


COMMIT;
