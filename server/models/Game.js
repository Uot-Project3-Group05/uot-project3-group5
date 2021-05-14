const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
    
    score : {
        type: Number
    },
    deck : [
        {
        type: Schema.Types.ObjectId,
        ref: 'Deck'
        }
    ]
     
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
