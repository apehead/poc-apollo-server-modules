const { GraphQLModule } = require('@graphql-modules/core');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { Products, Purchases } = require('./providers');

const productModule = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [Products, Purchases]
});

module.exports = productModule;
