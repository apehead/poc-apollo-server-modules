const { GraphQLModule } = require('@graphql-modules/core');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { Users } = require('./providers');

const accountModule = new GraphQLModule({
  typeDefs,
  resolvers,
  context: () => ({ currentUser: 'u-me' }),
  providers: [Users]
});

module.exports = accountModule;
