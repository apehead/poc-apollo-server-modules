const { Reviews } = require('./providers');

const resolvers = {
  Query: {
    review: (_, args) => Reviews.getReview(args.id),
    reviews: () => Reviews.getAllReviews(),
    topReviews: (_, args) => Reviews.getTopReviews({ first: args.first })
  },
  // This approach doesn't break modularity because we don't pass around Models or DataLoaders.
  // A review module doesn't need to know about fetching an author or a product.
  //
  // Instead, we delegate this task to the corresponding modules that own these types: user and product modules.
  // We return a partial representation of these objects allowing owners to retrieve the resource if needed.
  // In many cases, the partial representation is a primary key or unique dentifier. We use the id here.
  // Owners must implement the __resolveObject resolver to allow this behavior.
  Review: {
    // Author partial representation
    author: review => ({ id: review.authorId }),
    // Product partial representation
    product: review => ({ id: review.productId })
  },
  User: {
    reviews: user => Reviews.getUserReviews(user.id)
  },
  Product: {
    reviews: product => Reviews.getProductReviews(product.id)
  }
};

module.exports = resolvers;
