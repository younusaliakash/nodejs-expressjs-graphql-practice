const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const db = require('./dbConnnect')
const routes = require('./routes')
const { ApolloServer, gql } = require('apollo-server-express');
require("dotenv").config();
const app = express();
const port = 4000;

const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolver')

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
