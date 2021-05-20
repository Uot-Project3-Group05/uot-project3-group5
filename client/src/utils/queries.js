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
        deck {
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
        deck {
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
        deck {
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


