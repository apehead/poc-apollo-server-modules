const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  modules: [
    require('./modules/account'),
    require('./modules/product'),
    require('./modules/review')
  ],
  context: () => ({ currentUser: 'u-me' })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
