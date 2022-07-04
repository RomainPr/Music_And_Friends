const { userDataMapper } = require("../DataMappers");

const userController = {
  getAllMusicians: async (request, response) => {
    try {
      const results = await userDataMapper.getAllMusicians();
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  getMusicianById: async (request, response) => {
    try {
      const id = request.params.id;
      console.log(id)
      const results = await userDataMapper.getMusicianById(id);
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  createNewMusician: async (request, response) => {
    try {
      const data = request.body;
      const results = await userDataMapper.createNewMusician(data);
      response.json({ results });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
  deleteMusicianById: async (request, response) => {
    try {
      const id = request.params.id;
      const results = await userDataMapper.deleteMusicianById(id);
     
      if (results.length==0) {
         throw new Error;
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

module.exports = userController;
