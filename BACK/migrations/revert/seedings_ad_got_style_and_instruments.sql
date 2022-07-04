-- Revert music-and-friends:seedings_ad_got_style_and_instruments from pg

BEGIN;

TRUNCATE TABLE "ad_got_instrument" CASCADE;
TRUNCATE TABLE "ad_got_style" CASCADE;

COMMIT;
