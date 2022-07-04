const pool = require("../database/client");

const mainDataMapper = {
    homePage :async () => {
        const resultsUser = await pool.query('SELECT * FROM "user" ORDER BY random() LIMIT 2');
        const resultsBand= await pool.query('SELECT * FROM "band" ORDER BY random() LIMIT 2');
        const resultsPlace= await pool.query('SELECT * FROM "place" ORDER BY random() LIMIT 2');
        const finalResults= [];
        finalResults.push(resultsUser.rows,resultsBand.rows,resultsPlace.rows);
        return finalResults;
    }
}

module.exports=mainDataMapper;