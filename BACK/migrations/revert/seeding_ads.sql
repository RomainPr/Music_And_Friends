-- Revert music-and-friends:seeding_ads from pg

BEGIN;

TRUNCATE TABLE "ad" CASCADE;
TRUNCATE TABLE "ad_got_instrument" CASCADE;
TRUNCATE TABLE "ad_got_style" CASCADE;

COMMIT;
