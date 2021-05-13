const mongoose = require('mongoose');
const { Schema } = mongoose;
const cardSchema = require('./Card');

const deckSchema = new Schema({
    
    deckname: {
        type: String,
        required: [true,'Deck name is mandatory'],
        unique: true,
        trim: true
      },
      description: {
        type: String,
        required: [true,'Deck description is mandatory'],
        unique: true,
        trim: true
      },

     cards:[cardSchema]
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;