const { GraphQLModule } = require('@graphql-modules/core');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { Reviews, Users, Products } = require('./providers');

const reviewModule = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [Reviews, Users, Products]
});

module.exports = reviewModule;
