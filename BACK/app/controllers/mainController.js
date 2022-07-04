const mainDataMapper = require("../DataMappers/mainDataMapper");

const mainController = {
  homePage: async (request, response) => {
    try {
      const results = await mainDataMapper.homePage();
      response.json({ results });
      response.send("COUCOU MUSIC AND FRIENDS");
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
};

module.exports = mainController;
