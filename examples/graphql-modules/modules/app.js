const { GraphQLModule } = require('@graphql-modules/core');

const appModule = new GraphQLModule({
  imports: [require('./account'), require('./product'), require('./review')]
});

module.exports = appModule;
