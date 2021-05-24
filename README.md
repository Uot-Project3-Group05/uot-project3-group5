<<<<<<< HEAD
## Mind Decks

Need to learn things quickly without your brain imploding?

Mind Decks modernizes classical flashcards to be an efficient and fun way to study on the go or at home. 

This is our submission for our final group project for UofT Bootcamp. We have used the skills and technologies
we have learned over the past six weeks, including Performant JS, NoSQL databases, Progressive Web Applications,
React single-page applications, GraphQL APIs, Concurrent servers in a MERN app and Authentication.

Mobile-first design is built on the fact that users increasingly use their mobile devices to interact with web applications. An application that provides users with the best performance and flexibility is likely to win out over its competitors. 

## User Story

AS a LEARNER
I WANT to efficiently remember facts in a gamified way
SO THAT I can consistently recall facts at will

GIVEN sets of decks to study from
WHEN I select a deck
THEN the game loads this deck's contents to be reviewed
WHEN a flashcard shows up
THEN I can select an answer from three possible options
WHEN I select an incorrect answer
THEN the card will show more frequently in the future
WHEN I select a correct answer
THEN the card will show less frequently in the future
WHEN I complete a game (of 15 cards)
THEN I get a summary of how much points I have earned in this session
WHEN I do particularly well in each game
THEN more cards from the deck will be added to the pool
WHEN my score reaches certain milestones
THEN I will have earned a badge to show off on my profile

GIVEN my competitive nature in this gamified environment
WHEN I open my profile page
THEN I see my avatar, cumulative score, and badges I have earned
WHEN I open the leaderboard page
THEN I can see how my score compares with other players
WHEN I click on another player's profile
THEN I can see their avatar, cumulative score, and badges

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Objective and Concept

User table will contain all info about each player
Each user will have multiple deck objects
Deck objects will copied from the database & injected in the Game Table
A player will load up a play session from the Game
Game will be updated at the end of each play session

## Process
A deck is composed of cards, with information related to a specific topic,
Each card has a front & back. Depending on the game mode, one side will have the question & the other side
will have the answer, 
Each card is assigned a mystery level from 1-5 depending on how well the user does during the rounds of play,
Each round consists of 10 questions with 3 possible answers for each question,
Once answered correctly, the mastery level of a card increases, if incorrect the level decreases,
New cards are introduced to the user 15 at a time whenever the user has 70% of their cards at levels 4-5,
To complete a deck, 100% of the cards in the deck need to be at level 4 or 5 

## Technology Used

Server Side: Apollo-Server-Express, Bcrypt, Express, GraphQL, Jsonwebtoken, Mongoose

Client-Side: @apollo/client, @apollo/react-hooks, @chakra-ui/icons, @chakra-ui/react, @emotion/react, @emotion/styled, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, apollo-boost, framer-motion, graphql, graphql-tag, jwt-decode, react, react-dom, react-icons, react-router-dom, react-scripts, web-vitals

## Available Scripts
=======
# Mind Decks

Need to learn things quickly without your brain imploding?
>>>>>>> main

Mind Decks modernizes classical flashcards to be an efficient and fun way to study on the go or at home.

![App preview](https://user-images.githubusercontent.com/11519585/119285344-d5a7b000-bc0f-11eb-9d5a-38ca27b08db5.png)

## Table of Contents

- [Description](#description)
- [Purpose](#purpose)
- [Deployment](#deployment)
- [Usage](#usage)
- [Technologies](#technologies)
- [Features](#features)
- [Licenses ](#licenses)
- [Installation](#installation)
- [Contributors](#contributors)

## Description

This is our submission for our final group project for UofT Bootcamp. We have used the skills and technologies we have learned over the past six weeks, including Performant JS, NoSQL databases, Progressive Web Applications, React single-page applications, GraphQL APIs, Concurrent servers in a MERN app and Authentication.

Mobile-first design is built on the fact that users increasingly use their mobile devices to interact with web applications. An application that provides users with the best performance and flexibility is likely to win out over its competitors.

![Demonstration](https://user-images.githubusercontent.com/11519585/119285613-6a121280-bc10-11eb-99d6-dda4f7362f9f.gif)

## Purpose

```
AS a LEARNER I WANT to efficiently remember facts in a gamified way
SO THAT I can consistently recall facts at will

GIVEN sets of decks to study from
WHEN I select a deck
THEN the game loads this deck's contents to be reviewed
WHEN a flashcard shows up THEN I can select an answer from three possible options
WHEN I select an incorrect answer
THEN the card will show more frequently in the future
WHEN I select a correct answer
THEN the card will show less frequently in the future
WHEN I complete a game (of 15 cards)
THEN I get a summary of how much points I have earned in this session WHEN I do particularly well in each game
THEN more cards from the deck will be added to the pool
WHEN my score reaches certain milestones
THEN I will have earned a badge to show off on my profile

GIVEN my competitive nature in this gamified environment
WHEN I open my profile page THEN I see my avatar, cumulative score, and badges I have earned
WHEN I open the leaderboard page
THEN I can see how my score compares with other players
WHEN I click on another player's profile THEN I can see their avatar, cumulative score, and badges
```

## Deployment

A deployed version of this app can be access in the link below:

https://group5-project3-uot-duolingo.herokuapp.com/

## Usage

- Create an account to access the different decks available.
- Answering flashcard questions incorrectly will make them appear more often. Conversely, answering them correctly will make them appear less often.
- As the user's mastery with each deck increases, more cards from the set will be added.
- Relax and do your best! The app is designed to be a low-stressed way to learn and practice. Go with the flow, and with enough time commitment, you will naturally be able to answer all the questions flawlessly!

## Technologies

| Server-Side           | Client-Side   |
| --------------------- | ------------- |
| Apollo-Server-Express | Apollo        |
| Bcrypt                | Chakra-UI     |
| Express               | React         |
| GraphQL               | Framer Motion |
| JSON Web Tokens       |               |
| Mongoose              |               |

## Features

- Application is both desktop and mobile friendly.
- PWA allows the app to be used on the go.
- Persistent stat-tracking saved to the user's profile.
- Digital badges to be awarded to be shown off when mastering flashcard decks.

## Licenses

Published under the ISC license.

## Installation

- Run `git clone` from this respository: https://github.com/Uot-Project3-Group05/uot-project3-group5.git
- Run `npm i` to install dependencies.
- `npm start` will create a development build to experiment with.
- Access the local dev build on http://localhost:3000/ (default).

## Contributors

**Made with ❤️ by Group 5**

<<<<<<< HEAD
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Deployed-Url:
https://group5-project3-uot-duolingo.herokuapp.com/

## Contribution
Made with ❤️ by Group 5

Johnny Wu,
Kris Pennimpede,
Esteban Romero,
Ojashri Basnyat,
Ali Taghva, 
Shawn Evans,
Anagha Pawar, and
Terrence Chan

=======
Johnny Wu, Kris Pennimpede, Esteban Romero, Ojashri Basnyat, Ali Taghva, Shawn Evans, Anagha Pawar, and Terrence Chan
>>>>>>> main
