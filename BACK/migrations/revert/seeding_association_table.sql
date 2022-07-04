-- Revert music-and-friends:seeding_association_table from pg

BEGIN;

TRUNCATE TABLE "user_got_instrument" CASCADE;
TRUNCATE TABLE "user_got_style" CASCADE;
TRUNCATE TABLE "band_got_instrument" CASCADE;
TRUNCATE TABLE "band_got_style" CASCADE;
TRUNCATE TABLE "user_got_band" CASCADE;


COMMIT;
