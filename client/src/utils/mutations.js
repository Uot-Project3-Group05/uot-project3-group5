import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token 
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation updateGame($deck: String!, $score: Int!, $matrix: [[Int]]!) {
    updateGame(deck: $deck, score: $score, matrix: $matrix) {
      userId
      deck
      score
      matrix
    }
  }
`;

export const ADD_GAME = gql`
  mutation addGame($deck: String!) {
    addGame(deck: $deck) {
      _id
      score
      deck
      userId
      deck
      matrix
    }
  }
`;