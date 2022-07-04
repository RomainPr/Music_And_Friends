-- Deploy music-and-friends:seeding_instrument_ad to pg

BEGIN;

INSERT INTO "instrument"("name") VALUES 
('Piano'),
('Guitare'),
('Batterie'),
('Triangle'),
('Basse'),
('Orgue Marin de Zadar'),
('Double flûte contrebasse'),
('Thérémine'),
('Guimbarde');

INSERT INTO "style"("name") VALUES
('Rock'),
('Pop'),
('Classique'),
('Opera'),
('Anarcho-post-punk'),
('Cumbia'),
('Acid Techno Trans'),
('Deathcountry'),
('Fanfare'),
('Funk');

CREATE TABLE "ad_got_instrument"(

    "ad_id" INTEGER NOT NULL REFERENCES "ad"("id"),
    "instrument_id" INTEGER NOT NULL REFERENCES "instrument"("id"),
    PRIMARY KEY ("ad_id","instrument_id")
);

CREATE TABLE IF NOT EXISTS "ad_got_style"(

    "ad_id" INTEGER NOT NULL REFERENCES "ad"("id"),
    "style_id" INTEGER NOT NULL REFERENCES "style"("id"),
    PRIMARY KEY ("ad_id","style_id")
);



COMMIT;
