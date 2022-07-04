const { response } = require("express");
const { placeDataMapper } = require("../DataMappers");

const placeController = {
  getAllPlaces: async (request, response) => {
    try {
      const results = await placeDataMapper.getAllPlaces();
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  getPlaceById: async (request, response) => {
    try {
      const id = request.params.id;

      const results = await placeDataMapper.getPlaceById(id);
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  createNewPlace: async (request, response) => {
    try {
      const data = request.body;
      const results = await placeDataMapper.createNewPlace(data);
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  deletePlaceById: async (request, response) => {
    try {
      const id = request.params.id;
      const results = await placeDataMapper.deletePlaceById(id);
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

module.exports = placeController;
