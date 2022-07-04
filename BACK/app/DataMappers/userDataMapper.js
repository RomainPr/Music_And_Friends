const pool = require("../database/client");

const userDataMapper = {
  getAllMusicians: async () => {
    const results = await pool.query(`SELECT "user"."id",
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
    return results.rows;
  },
  getMusicianById: async (id) => {
    const results = await pool.query(`SELECT "user"."id",
    ARRAY_AGG (DISTINCT "user"."role") AS "role" ,
    ARRAY_AGG (DISTINCT "user"."firstname") AS "firstname" ,
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
        AND "user"."id"=$1
        
        
        GROUP BY "user"."id"
        ORDER BY "user"."id";`, [id]);
    return results.rows;
  },
  createNewMusician: async (data) => {
    const results = await pool.query(
      `INSERT INTO "user"(firstname,lastname,pseudo,phone,email,password,city,description) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [
        data.firstname,
        data.lastname,
        data.pseudo,
        data.phone,
        data.email,
        data.password,
        data.city,
        data.description
      ]
    );
    return results.rows;
  },
  deleteMusicianById: async (id) => {
    const results = await pool.query(`DELETE FROM "user" WHERE id=$1 RETURNING *`,[id]);
    return results.rows;
  }
};

module.exports = userDataMapper;
