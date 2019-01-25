const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    user(id: ID!): User
    me: User
  }

  type User {
    id: ID!
    name: String!
    birthDate: String
  }
`;

module.exports = typeDefs;
