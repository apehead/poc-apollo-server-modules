const { Reviews, Users, Products } = require('./providers');

const resolvers = {
  Query: {
    review: (_, args, { injector }) => injector.get(Reviews).getReview(args.id),
    reviews: (_, __, { injector }) => injector.get(Reviews).getAllReviews(),
    topReviews: (_, args, { injector }) =>
      injector.get(Reviews).getTopReviews({ first: args.first })
  },
  Review: {
    author: (review, _, { injector }) =>
      injector.get(Users).getUser(review.authorId),
    product: (review, _, { injector }) =>
      injector.get(Products).getProduct(review.productId)
  },
  User: {
    reviews: (user, _, { injector }) =>
      injector.get(Reviews).getUserReviews(user.id)
  },
  Product: {
    reviews: (product, _, { injector }) =>
      injector.get(Reviews).getProductReviews(product.id)
  }
};

module.exports = resolvers;
