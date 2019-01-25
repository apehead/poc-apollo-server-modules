const { Products, Purchases } = require('./providers');

const resolvers = {
  Query: {
    product: (_, args) => Products.getProduct(args.id),
    products: () => Products.getAllProducts()
  },
  Product: {
    // Allows the delegation for resolving a product by id.
    // It runs before the field resolvers run: centralize data fetching for an object --> modularity
    __resolveObject: object => Products.getProduct(object.id)
  },
  User: {
    recentPurchases: user => Purchases.getUserPurchases(user.id)
  }
};

module.exports = resolvers;
