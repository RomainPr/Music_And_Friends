-- Revert music-and-friends:contrainte from pg

BEGIN;
/*
DROP DOMAIN valid_email CASCADE;
DROP DOMAIN valid_phone CASCADE;
*/
COMMIT;
