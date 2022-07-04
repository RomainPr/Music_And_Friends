SELECT DISTINCT "band"."band_name","instrument"."name","style"."name" FROM "band","instrument","band_got_instrument","style","band_got_style" WHERE"band"."id"="band_got_instrument"."band_id" AND "instrument"."id"="band_got_instrument"."instrument_id" AND "style"."id"="band_got_style"."band_id";  

SELECT "band"."band_name", ARRAY_AGG (DISTINCT "instrument"."name") AS "band_instrument",ARRAY_AGG (DISTINCT "style"."name")
FROM "band","instrument","band_got_instrument","style","band_got_style"
WHERE"band"."id"="band_got_instrument"."band_id"
AND "instrument"."id"="band_got_instrument"."instrument_id" 
AND "style"."id"="band_got_style"."band_id"
GROUP BY "band"."band_name"
ORDER BY "band"."band_name";

SELECT "ad"."title", ARRAY_AGG("ad"."description") AS "ad_description", ARRAY_AGG (DISTINCT "instrument"."name") AS "ad_instrument",ARRAY_AGG (DISTINCT "style"."name") AS "ad_style"
FROM "ad","instrument","ad_got_instrument","style","ad_got_style"
WHERE"ad"."id"="ad_got_instrument"."ad_id"
AND "instrument"."id"="ad_got_instrument"."ad_id" 
AND "style"."id"="ad_got_style"."ad_id"
GROUP BY "ad"."title"
ORDER BY "ad"."title";


-- LA BONNE REQUETE POUR UN GROUPE AVEC SES STYLES ET INSTRU
SELECT "band"."band_name",ARRAY_AGG (DISTINCT "band"."id") AS "id", ARRAY_AGG (DISTINCT "instrument"."name") AS "band_instrument",ARRAY_AGG (DISTINCT "style"."name") AS "band_style"
    FROM "band","instrument","band_got_instrument","style","band_got_style"
    WHERE"band"."id"="band_got_instrument"."band_id"
    AND "instrument"."id"="band_got_instrument"."instrument_id" 
    AND "style"."id"="band_got_style"."style_id"
    AND "band"."id"=1
    GROUP BY "band"."band_name"
    ORDER BY "band"."band_name";