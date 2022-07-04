const pool = require("../database/client");

const instrumentDataMapper = {
getAllInstruments: async (request,response) => {
    
    const results= await pool.query(`SELECT "name" FROM "instrument";`);
    return results.rows
}
};

module.exports=instrumentDataMapper;