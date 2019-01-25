const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    review(id: ID!): Review
    reviews: [Review]
    topReviews(first: Int = 3): [Review]
  }

  type Review {
    id: ID!
    body: String
    author: User
    product: Product
  }

  type User {
    reviews: [Review]
  }

  type Product {
    reviews: [Review]
  }
`;

module.exports = typeDefs;
