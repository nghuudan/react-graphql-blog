import gql from 'graphql-tag';

export default gql`
  enum Role {
    ADMIN
    GUEST
  }

  type User {
    id: ID!
    userName: String!
    firstName: String!
    lastName: String!
    joinDate: String!
    role: Role!
  }

  type Query {
    user(id: ID): User
  }
`;
