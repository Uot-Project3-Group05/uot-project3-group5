const { gql } = require('apollo-server-express');
// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    badges: [String]
    games:[Game]
  }

  type Game {
    _id: ID
    score: Int
    userId: String
    deck: String
    matrix:[[Int]]
  }

  type Deck {
    _id: ID
    deckname: String
    description: String
    cards: [Card]
  }
  type Card {
    cardId: Int
    front:String
    back: String
  }
  input CardInput {
    cardId: Int
    front: String
    back: String
  }
  input GameDeckInput {
    deckname: String
    description: String
    cards: [CardInput]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
    decks: [Deck]
    deck(_id: ID!): Deck
    users:[User]
    user(username: String!): User
    getGame(deck: String!): Game
    getAllGame: [Game]
    
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGame(deck: String!): Game
    updateGame(deck: String!, score: Int!, matrix: [[Int]]): Game
  }
`;

// type Game {
//   _id: ID
//   score: Int
//   deck: [Deck]
//   matrix:[[Int]]
// }

// export the typeDefs
module.exports = typeDefs;