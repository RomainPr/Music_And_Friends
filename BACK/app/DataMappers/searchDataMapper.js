const pool = require("../database/client");

const searchDataMapper = {
    getEverything : async () => {
        const resultsUser = await pool.query(`SELECT "user"."id",
        ARRAY_AGG (DISTINCT "user"."role") AS "role" ,
        ARRAY_AGG (DISTINCT "user"."firstname") AS "firstname",
        ARRAY_AGG (DISTINCT "user"."lastname")AS "lastname",
        ARRAY_AGG (DISTINCT "user"."pseudo")AS "name",
        ARRAY_AGG (DISTINCT "user"."email") AS "email",
        ARRAY_AGG (DISTINCT "user"."description")AS "description",
        ARRAY_AGG (DISTINCT "user"."password")AS "password",
        ARRAY_AGG (DISTINCT "user"."city")AS "city",
        ARRAY_AGG (DISTINCT "user"."phone")AS "phone",
        ARRAY_AGG (DISTINCT "instrument"."name") AS "instrument",
        ARRAY_AGG (DISTINCT "style"."name") AS "styles"
            FROM "user","instrument","user_got_instrument","style","user_got_style"
            WHERE"user"."id"="user_got_instrument"."user_id"
            AND "instrument"."id"="user_got_instrument"."instrument_id" 
            AND "style"."id"="user_got_style"."style_id"
            
            
            GROUP BY "user"."id"
            ORDER BY "user"."id";`);
        const resultsBand = await pool.query(`SELECT "band"."id",
        ARRAY_AGG (DISTINCT "band"."role") AS "role" ,
        ARRAY_AGG (DISTINCT "band"."band_name") AS "name",
        ARRAY_AGG (DISTINCT "band"."description") AS "description",
        ARRAY_AGG (DISTINCT "instrument"."name") AS "instrument",
        ARRAY_AGG (DISTINCT "style"."name") AS "styles",
        ARRAY_AGG (DISTINCT "band"."city") AS "city"
            FROM "band","instrument","band_got_instrument","style","band_got_style"
            WHERE"band"."id"="band_got_instrument"."band_id"
            AND "instrument"."id"="band_got_instrument"."instrument_id" 
            AND "style"."id"="band_got_style"."style_id"
            GROUP BY "band"."id"
            ORDER BY "band"."id"`);
        const resultsPlace = await pool.query(`SELECT "role","name","description","city","adress","email" FROM "place"`);
        const resultsAds = await pool.query(`SELECT "ad"."title", ARRAY_AGG(DISTINCT "ad"."description") AS "ad_description",ARRAY_AGG(DISTINCT "ad"."id") AS "ad_id", ARRAY_AGG (DISTINCT "instrument"."name") AS "ad_instrument",ARRAY_AGG (DISTINCT "style"."name") AS "ad_style"
        FROM "ad","instrument","ad_got_instrument","style","ad_got_style"
        WHERE"ad"."id"="ad_got_instrument"."ad_id"
        AND "instrument"."id"="ad_got_instrument"."ad_id" 
        AND "style"."id"="ad_got_style"."ad_id"
        GROUP BY "ad"."title"
        ORDER BY "ad"."title";`);
        const finalResults=[];
        finalResults.push(resultsUser.rows,resultsBand.rows,resultsPlace.rows,resultsAds.rows);
        return finalResults;
    }
}

module.exports=searchDataMapper;