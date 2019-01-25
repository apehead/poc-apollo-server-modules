const { Users } = require('./providers');

const resolvers = {
  Query: {
    user: (_, args, { injector }) => injector.get(Users).getUser(args.id),
    me: (_, __, { injector, currentUser }) =>
      injector.get(Users).getUser(currentUser)
  }
};

module.exports = resolvers;
