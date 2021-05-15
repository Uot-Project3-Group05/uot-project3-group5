const { gql } = require('apollo-server-express');
// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    badges: [String]
    games:[[Game]]
  }
  type Game {
    _id: ID
    score: Int
    deck: [Deck]
  }
  type Deck {
    _id: ID
    deckname: String
    description: String
    cards: [Card]
  }
  type Card {
      _id: ID
      front:[String]
      back: [String]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
    users:[User]
    user(username: String!): User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
`;
// export the typeDefs
module.exports = typeDefs;