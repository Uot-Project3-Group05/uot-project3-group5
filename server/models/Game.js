const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
    
    score : {
        type: Number
    },
    userId: {
        type: String
    },
    deck: {
        type: String,
        unique: true,
    },
    matrix: [ [{ type: Number }] ]     
});

        // type: Schema.Types.ObjectId,
        // ref: 'Deck'
// matrix: [
//     [{type: Number}],
//     [{type: Number}],
//     [{type: Number}],
//     [{type: Number}],
//     [{type: Number}]
// ]     

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
