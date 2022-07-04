-- Deploy music-and-friends:seeding to pg

BEGIN;

INSERT INTO "user" ("firstname","lastname","pseudo","phone","email","password","city") VALUES
('James Joseph','Brown', 'The Godfather of Soul', '0687314501','james@brown.fr','monpetitpassword',''),
('Tupac Amaru', 'Shakur', '2Pac', '','2pac@2pac.fr','monpetitpassword', 'New York City'),
('Aretha Louise', 'Franklin', 'The Queen of Soul', '0125798420','aretha@franklin.fr','monpetitpassword','Detroit'),
('Eunice Kathleen', 'Waymon', 'Nina Simone', '06 41 25 75 94','nina@simone.fr','monpetitpassword', 'Carry-le-Rouet');

INSERT INTO "place"("name","description", "city", "adress", "phone", "zipcode","email","password") VALUES
('La Cigale','Une chouette salle de concert à Montmartre', 'Paris', '120 Boulevard de Rochechouart', '0149258999','75018','la cigale@lacigale.fr','monpetitpassword'),
('MusikVerein', 'Siège de la société philarmonique de Vienne', 'Vienne','Musikvereinsplatz 1','','','musikverein@musik.fr','monpetitpassword'),
('La station', 'laboratoire convivial et festif consacré aux scènes artistiques émergente','Paris',' 29 Avenue de la Porte d''Aubervilliers','09 73 26 11 47','75018','lastation@lastation.fr','monpetitpassword');

INSERT INTO "band" ("band_name","admin_firstname","admin_lastname","password","description","city","phone","email") VALUES
('The Beatles','Yoko','Ono','monpetitpassword','Un petit groupe anglais qui monte pas mal en ce moment','Liverpool','','thebeatles@beatles.fr'),
('Queen','Freddy','Mercury','monpetitpassword','Do we really need a description ?', 'Londres','','Queen@queen.fr');


COMMIT;
