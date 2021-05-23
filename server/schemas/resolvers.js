const { AuthenticationError } = require('apollo-server-express');
const { User, Deck, Game } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, params, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select('-__v -password');
        return userData;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    users: async () => {
      return User.find();
    },

    user: async(parent, { username }) => {
      return User.findOne({ username: username})
    },

    // Get one Deck
    deck: async (parent, id ) => {
      console.log(id)
      return Deck.findOne({ _id: id});
      
    },
    // Get many decks
    decks: async () => {
      return Deck.find();
    },


    // get game by userid and deckname

    getGame: async (parent, { deck: deckname } , context) => {
      if (context.user) {
        const gameData = await Game.findOne({ $and: [ {userId: context.user._id} , { deck: deckname } ] })
        return gameData;
      }

      throw new AuthenticationError('You need to be logged in!');
    },


    
},
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      if(!email)
      {
        throw new AuthenticationError('Please enter email');
      }

      if(!password)
      {
        throw new AuthenticationError('Please enter password');
      }

      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Invalid credentials!');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Invalid credentials!');
      }
      const token = signToken(user);
      return { token, user };
    },

    addGame: async (parent, data, { user }) => {
      if (user) {
        data.score = 0;
        data.userId = user._id
        data.matrix = [[], [], [], [], []];
        const createGame = await Game.create(data)
        return createGame;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    updateGame: async (parent, { userId, score, matrix, deck }, { user }) => {
      if (user) {
        userId = user._id;

        const updatedGame = Game.findOneAndUpdate(
          { deck: deck },
          { $set: {"score": score, "matrix": matrix} },
          { new: true }
        );

        return updatedGame;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
}

module.exports = resolvers;