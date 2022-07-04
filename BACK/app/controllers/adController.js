const { response } = require("express");
const { adDataMapper } = require("../DataMappers");

const adController = {
  getAllAds: async (request, response) => {
    try {
      const results = await adDataMapper.getAllAds();
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  getAdById: async (request, response) => {
    try {
      const id = request.params.id;
      const results = await adDataMapper.getAdById(id);
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  postAdAsPlace: async (request, response) => {
    try {
      const id=request.params.id
      const data = request.body;
      const results = await adDataMapper.postAdAsPlace(id,data);
      response.json({results});
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  postAdAsUser: async (request,response) => {
    try {
      const id = request.params.id
      const data = request.body;
      const results = await adDataMapper.postAdAsUser(id,data);
      response.json({results});
      
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  }

};

module.exports = adController;
