const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID!
    username: String
    email: String
    bookCount: Int
    saveBooks: [Book]
}
type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID
    user: User
  }
  input saveBook {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;