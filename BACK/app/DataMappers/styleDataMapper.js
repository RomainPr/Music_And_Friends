const pool = require("../database/client");

const styleDataMapper = {
    getAllStyles: async () => {
        const results = await pool.query('SELECT * FROM "style"');
        return results.rows;
    }
}

module.exports=styleDataMapper