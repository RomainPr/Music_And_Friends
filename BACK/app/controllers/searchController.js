const { searchDataMapper } = require("../DataMappers");

const searchController = {
  getEverything: async (request,response) => {
    try {
      const results = await searchDataMapper.getEverything();
      console.log(results);
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
};

module.exports = searchController;
