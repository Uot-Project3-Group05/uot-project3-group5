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
    }

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
      data.score = 0;
      data.matrix = [[], [], [], [], []];
      // return Game.create(data);

      if (user) {
        // const isExists = await User.findOne
        const createGame = await User.create(
          { _id: user._id }, 
          { $addToSet: { games: data } },
          { new: true }
        )

        return createGame;
      }
    }
  }
}

module.exports = resolvers;