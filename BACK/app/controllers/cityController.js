const { cityDataMapper } = require("../DataMappers");
const cityController= {
    getAllCities : async (request, response ) => { 
    try { 
        const results = await cityDataMapper.getAllCityes();
        response.json({results})
        
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: error.message });
    }
    }

}

module.exports=cityController