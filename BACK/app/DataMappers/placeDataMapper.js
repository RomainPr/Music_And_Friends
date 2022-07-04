const pool = require("../database/client");

const placeDataMapper = {
  getAllPlaces: async () => {
    const results = await pool.query(`SELECT * FROM "place"`);
    return results.rows;
  },
  getPlaceById: async (id) => {
    const results = await pool.query(`SELECT * FROM "place" WHERE id=$1`, [id]);
    return results.rows;
  },
  createNewPlace: async (data) => {
    const results = await pool.query(
      `INSERT INTO "place"(name,description,city,adress,phone,zipcode,email,password,firstname,lastname) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
      [
        data.name,
        data.description,
        data.city,
        data.adress,
        data.phone,
        data.zipcode,
        data.email,
        data.password,
        data.firstname,
        data.lastname
      ]
    );
    return results.rows;
  },
  deletePlaceById: async (id) => {
    const results = await pool.query(
      `DELETE FROM "place" WHERE id=$1 RETURNING *`,
      [id]
    );
    return results.rows;
  },
};

module.exports = placeDataMapper;
