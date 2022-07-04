-- Deploy music-and-friends:seedings_ad_got_style_and_instruments to pg

BEGIN;

INSERT INTO "ad_got_instrument"("ad_id","instrument_id") VALUES
('1','1'),
('1','2'),
('2','4'),
('2','3'),
('2','5');

INSERT INTO "ad_got_style"("ad_id","style_id") VALUES
('1','2'),
('2','3');

COMMIT;
