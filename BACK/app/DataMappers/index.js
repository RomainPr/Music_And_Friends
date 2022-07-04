const userDataMapper=require('./userDataMapper');
const bandDataMapper=require('./bandDataMapper');
const placeDataMapper=require('./placeDataMapper');
const adDataMapper=require('./adDataMapper');
const searchDataMapper=require('./searchDataMapper');
const instrumentDataMapper=require('./instrumentDataMapper');
const styleDataMapper=require('./styleDataMapper')
const cityDataMapper=require('./cityDataMapper');
const database=require('../database/client');


module.exports = {userDataMapper,bandDataMapper,placeDataMapper,adDataMapper,searchDataMapper,styleDataMapper, cityDataMapper,instrumentDataMapper};