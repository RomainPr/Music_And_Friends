const { instrumentDataMapper } = require("../DataMappers");

const instrumentController = {
  getAllInstruments: async (request, response) => {
    try {
      const results = await instrumentDataMapper.getAllInstruments();
      console.log(results)
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
};

module.exports = instrumentController;
