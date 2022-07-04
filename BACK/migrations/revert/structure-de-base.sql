-- Revert music-and-friends:structure-de-base from pg

BEGIN;

DROP TABLE "user" CASCADE;
DROP TABLE "band" CASCADE;
DROP TABLE "place" CASCADE;
DROP TABLE "ad" CASCADE;
DROP TABLE "style" CASCADE;
DROP TABLE "instrument" CASCADE;
DROP TABLE "user_got_style" CASCADE;

DROP TABLE "user_got_band" CASCADE;
DROP TABLE "user_got_instrument" CASCADE;
DROP TABLE "band_got_style" CASCADE;

DROP TABLE "band_got_user" CASCADE;
DROP TABLE "band_got_instrument" CASCADE;

DROP TABLE "media" CASCADE;
DROP TABLE "user_got_media";
DROP TABLE "band_got_media";







COMMIT;
