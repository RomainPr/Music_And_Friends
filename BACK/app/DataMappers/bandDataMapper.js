const pool = require("../database/client");

const bandDataMapper = {
  getAllBands: async () => {
    const results = await pool.query(`SELECT "band"."id",
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
    return results.rows;
  },
  getBandById: async (id) => {
    const results = await pool.query(
      `SELECT "band"."id",
    ARRAY_AGG (DISTINCT "band"."role") AS "role" ,

    ARRAY_AGG (DISTINCT "band"."band_name") AS "name",
    ARRAY_AGG (DISTINCT "band"."description") AS "description" ,ARRAY_AGG (DISTINCT "instrument"."name") AS "instrument",ARRAY_AGG (DISTINCT "style"."name") AS "styles",ARRAY_AGG (DISTINCT "band"."city") AS "city"
        FROM "band","instrument","band_got_instrument","style","band_got_style"
        WHERE"band"."id"="band_got_instrument"."band_id"
        AND "instrument"."id"="band_got_instrument"."instrument_id" 
        AND "style"."id"="band_got_style"."style_id"
        AND "band"."id"=$1
        GROUP BY "band"."id"
        ORDER BY "band"."id"`,
      [id]
    );
    return results.rows;
  },
  createNewBand: async (data) => {
    const results = await pool.query(
      `INSERT INTO "band"(band_name,admin_firstname,admin_lastname,password,description,city,phone,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [
        data.band_name,
        data.admin_firstname,
        data.admin_lastname,
        data.password,
        data.description,
        data.city,
        data.phone,
        data.email,
      ]
    );

    return results.rows;
  },
  deleteBandById: async (id) => {
    const results = await pool.query(
      `DELETE FROM "band" WHERE id=$1 RETURNING *`,
      [id]
    );
    console.log(results.rows);
    return results.rows;
  },
};

module.exports=bandDataMapper
