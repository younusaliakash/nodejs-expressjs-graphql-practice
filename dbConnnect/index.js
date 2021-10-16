const { MongoClient } = require('mongodb');
require("dotenv").config();

// Connection URL
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
const client = new MongoClient(url);

// Database Name
const dbName = 'graphqlpracticedb';


// Use connect method to connect to the server
client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('graphqldoc');

module.exports = { collection }
