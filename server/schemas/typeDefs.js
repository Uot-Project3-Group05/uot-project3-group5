const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    badges: [String]
    deck:[Deck]
  }

  type Game {
    _id: ID
    username: String
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
  type Query {
    me: User
    users:[User]
    user(username: String!): User
  }
  type Mutation {
    addUser($username: String!, $email: String!, password: String!): Auth
    login($username: String!, password: String!): Auth
<<<<<<< HEAD

  }
=======
  }


>>>>>>> aa704e5f5dd78afd68ed08c1aeebf7744f890a33
`;

// export the typeDefs
module.exports = typeDefs;