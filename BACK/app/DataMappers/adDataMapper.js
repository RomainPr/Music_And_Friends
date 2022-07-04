const pool = require("../database/client");

const adDataMapper = {
  getAllAds: async () => {
    const results = await pool.query(`SELECT "ad"."title",ARRAY_AGG (DISTINCT "ad"."id") AS "id" ,ARRAY_AGG(DISTINCT "ad"."description") AS "ad_description", ARRAY_AGG (DISTINCT "instrument"."name") AS "ad_instrument",ARRAY_AGG (DISTINCT "style"."name") AS "ad_style"
    FROM "ad","instrument","ad_got_instrument","style","ad_got_style"
    WHERE"ad"."id"="ad_got_instrument"."ad_id"
    AND "instrument"."id"="ad_got_instrument"."ad_id" 
    AND "style"."id"="ad_got_style"."ad_id"
    GROUP BY "ad"."title"
    ORDER BY "ad"."title";`);
    return results.rows;
  },
  getAdById: async (id) => {
    const results = await pool.query(`SELECT "ad"."title", ARRAY_AGG (DISTINCT "ad"."id") AS "id",ARRAY_AGG(DISTINCT "ad"."description") AS "ad_description", ARRAY_AGG (DISTINCT "instrument"."name") AS "ad_instrument",ARRAY_AGG (DISTINCT "style"."name") AS "ad_style"
    FROM "ad","instrument","ad_got_instrument","style","ad_got_style"
    WHERE"ad"."id"="ad_got_instrument"."ad_id"
    AND "instrument"."id"="ad_got_instrument"."ad_id" 
    AND "style"."id"="ad_got_style"."ad_id"
    AND "ad"."id"=${id}
    GROUP BY "ad"."title"
    ORDER BY "ad"."title";`);
    return results.rows;
  },
  postAdAsPlace: async (id, data) => {
    const results = await pool.query(
      `INSERT INTO "ad" ("title","description","category","instrument","style","user_is_author","band_is_author","place_is_author") VALUES ('$1','$2','$3','$4','$5',null,null,'$6) RETURNING *`,
      [
        data.title,
        data.description,
        data.category,
        data.instrument,
        data.style,
        null,
        null,
        id,
      ]
    );
    return results.rows;
  },
  postAdAsUser: async (id, data) => {
    const results = await pool.query(
        `INSERT INTO "ad" ("title","description","category","instrument","style","user_is_author","band_is_author","place_is_author") VALUES ('$1','$2','$3','$4','$5',$6,null,null) RETURNING *`,
        [
          data.title,
          data.description,
          data.category,
          data.instrument,
          data.style,
          id,
          null,
          null,
        ]
      );
      return results.rows;

  }
};

module.exports = adDataMapper;
