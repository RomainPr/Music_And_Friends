const bandController = require("../controllers/bandController");
const pool = require("../database/client");

const cityDataMapper= {
    getAllCityes: async () => {
        const results = []
        const userCities = await pool.query (`SELECT DISTINCT "city" FROM "user";`);
        const placeCities=await pool.query(`SELECT DISTINCT "city" FROM "place";`)
        const bandCities=await pool.query(`SELECT DISTINCT "city" FROM "band";`)
        results.push(userCities.rows,placeCities.rows,bandController.rows);
        return results
    }
}

module.exports=cityDataMapper