-- Deploy music-and-friends:seeding_ads to pg

BEGIN;

INSERT INTO "ad" ("title","description","category","instrument","style","user_is_author","band_is_author","place_is_author") VALUES
('recherche bassiste','on recherche un bassiste qui sait jouer de la basse, si possible','groupe cherche musiciens','basse','divers','1','1','1'),
('recherche chorale post-punk','hey je cherche une chorale post-punk','personne cherche groupe','tous','bah post-punk je l''ai déja dis non ?','4','1','1');




COMMIT;
