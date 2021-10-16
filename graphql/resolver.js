const { collection } = require('../dbConnnect/index')

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      newdata: async () => {
        const data = await collection.find({}).toArray();
        return data;
      }
    },
  };

module.exports = resolvers;