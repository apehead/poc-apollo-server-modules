const { Users } = require('./providers');

const resolvers = {
  Query: {
    user: (_, args) => Users.getUser(args.id),
    me: (_, __, { currentUser }) => Users.getUser(currentUser)
  },
  User: {
    // Allows the delegation for resolving a user by id.
    // It runs before the field resolvers run: centralize data fetching for an object --> modularity
    __resolveObject: object => Users.getUser(object.id)
  }
};

module.exports = resolvers;
