require('dotenv').config();
const router = require('./app/routers');
const bodyParser=require("body-parser");
const cors = require('cors');




const express = require('express');
const app = express();
app.use(cors('*'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server launched on http://localhost:${process.env.PORT}`);
});