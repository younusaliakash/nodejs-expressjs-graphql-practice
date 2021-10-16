const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
type Newreturn {
    a: Int
    b: Int
    c: Int
}
type Query {
  hello: String
  newdata: [Newreturn]
}
`;

module.exports = typeDefs;