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

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

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

