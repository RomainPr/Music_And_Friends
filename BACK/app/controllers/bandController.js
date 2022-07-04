const  bandDataMapper  = require("../DataMappers/bandDataMapper");

const bandController = {
  getAllBands: async (request, response) => {
    try {
      console.log(bandDataMapper);
      const results = await bandDataMapper.getAllBands();
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  getBandById: async (request, response) => {
    try {
      const id = request.params.id;
      const results = await bandDataMapper.getBandById(id);
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  createNewBand: async (request, response) => {
    try {
      const data = request.body;
      const results = bandDataMapper.createNewBand(data);
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  deleteBandById: async (request, response) => {
    try {
      const id = request.params.id;
      const results = await bandDataMapper.deleteBandById(id);

      if (results.length == 0) {
        throw new Error();
      } else {
        response.json({ results });
        response.status(200);
      }
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
};

module.exports = bandController;
