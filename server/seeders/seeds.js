const db = require('../config/connection');
const { Deck, Card } = require('../models');
const DECK_DATA = require('./data');
db.once('open', async () => {
  await Deck.deleteMany({});
  await Deck.collection.insertMany(DECK_DATA);
  console.log('all done!');
  process.exit(0);
})