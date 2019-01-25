const { Products, Purchases } = require('./providers');

const resolvers = {
  Query: {
    product: (_, args, { injector }) =>
      injector.get(Products).getProduct(args.id),
    products: (_, __, { injector }) => injector.get(Products).getAllProducts()
  },
  User: {
    recentPurchases: (user, _, { injector }) =>
      injector.get(Purchases).getUserPurchases(user.id)
  }
};

module.exports = resolvers;
