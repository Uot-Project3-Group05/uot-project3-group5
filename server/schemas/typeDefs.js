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
    deckname: Stirng
    description: String
    cards: [Card]
  }

  type Game {

  }
`;