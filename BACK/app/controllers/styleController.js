const { styleDataMapper } = require("../DataMappers");

const styleController = {
    getAllStyles: async (request, response) => {
        try {
            const results = await styleDataMapper.getAllStyles();
            response.json({results})
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
          }
        }
    }

    module.exports=styleController;