const { Pool, Client } = require('pg')
require('dotenv').config();

const pool = new Pool({
  password: "js4life",
  connectionString:process.env.DATABASE_URL,
  ssl: {
      rejectUnauthorized: false,
     
  }

});
pool.query(`INSERT INTO "ad" ("title","description","category","instrument","style","user_is_author","band_is_author","place_is_author") VALUES ('un titre','une description','unecategory','uninstru','unstyle',null,null,'1')`)


module.exports=pool;