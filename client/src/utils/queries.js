import { gql } from '@apollo/client';

export const ME = gql`
  {
    me {
      _id
      username
      email
      badges
      games {
        _id
        score
        decks {
          _id
          deckname
          description
          cards {
            cardId
            front
            back
          }
        }
      }
    }
  }
`;

export const GET_USERS = gql`
  {
    users {
      _id
      username
      email
      badges
      games {
        _id
        score
        decks {
          _id
          deckname
          description
          cards {
            cardId
            front
            back
          }
        }
      }
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      badges
      games {
        _id
        score
        decks {
          _id
          deckname
          description
          cards {
            cardId
            front
            back
          }
        }
      }
    } 
  }
`;

export const GET_DECK_ID = gql`
  query deck($id: ID! ) {
    deck(_id: $id) {
        _id
        deckname
        description
        cards {
          front
          back
          cardId
        }
    }
  }
`;

export const GET_DECKS = gql`
  {
    decks {
      _id
      deckname
      description
      cards {
        front
        back
        cardId
      }
    }
  }
`;

export const GET_GAME_BY_DECK_NAME = gql`
  query getGame($deck: String!) {
    getGame(deck: $deck) {
      _id
      score
      deck
      userId
      deck
      matrix
    }
  }
`;

export const GET_ALL_DECKS_BY_USER = gql`
    {
      getAllGame {
        userId
        deck
        score
        matrix
      }
    }
`;

