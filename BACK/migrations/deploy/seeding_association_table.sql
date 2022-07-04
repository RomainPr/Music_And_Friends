-- Deploy music-and-friends:seeding_association_table to pg

BEGIN;

INSERT INTO "user_got_instrument"("user_id","instrument_id") VALUES 
('1','1'),
('1','2'),
('1','5'),
('2','1'),
('2','5'),
('2','2'),
('3','1'),
('3','4'),
('4','8'),
('4','1');

INSERT INTO "user_got_style"("user_id","style_id") VALUES
('1','10'),
('1','2'),
('2','10'),
('3','9'),
('2','5'),
('3','8'),
('4','3'),
('4','6'),
('4','1');

INSERT INTO "band_got_instrument"("band_id","instrument_id") VALUES
('1','1'),
('1','2'),
('1','3'),
('2','4'),
('2','5');

INSERT INTO "band_got_style"("band_id","style_id") VALUES
('1','1'),
('1','2'),
('1','3'),
('2','4'),
('2','5');

INSERT INTO "user_got_band"("user_id","band_id") VALUES
('1','1'),
('1','2'),
('4','1'),
('4','2');

COMMIT;
