const gql = require('graphql-tag');

const typeDefs = gql`
  extend type Query {
    product(id: ID!): Product
    products: [Product]
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  extend type User {
    recentPurchases: [Product]
  }
`;

module.exports = typeDefs;
