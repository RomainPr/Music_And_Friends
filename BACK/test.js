const {Pool} = require('pg');
const pool= new Pool ({
    host:process.env.PG_HOST
});
pool.connect();
