const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    product(id: ID!): Product
    products: [Product]
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type User {
    recentPurchases: [Product]
  }
`;

module.exports = typeDefs;
