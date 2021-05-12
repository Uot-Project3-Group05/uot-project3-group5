const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    badget: [Object]
    deck: Deck
  }

  type Card {
    cardId: ID
  }

  type Deck {
    _id: ID
    deckname: String
    description: String
    cards: [Card]
  }

  type Game {
    username: String
    score: Int
    deck: [Deck]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser($username: String!, $email: String!, password: String!): Auth
    login($username: String!, password: String!): Auth
  }
`;