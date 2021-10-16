const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const db = require('./dbConnnect')
const routes = require('./routes')
require("dotenv").config();
const app = express();
const port = 4000;



app.use('/api', routes)






app.listen(port, () => {
    console.log(`Server Is Running at ${port}`)
})