const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
    
    cardId: {
        type: Number,
        required: [true,'Card is required']
      },

      front:[
        {
        type: String,
        required: true
         }
      ],
      
      back : [
          {
        type: String,
        required: true      
          }
      ]     
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
