const db = require('../config/connection');
const { Deck, Card } = require('../models');

const DECK_DATA = require('./data');
const DECK2_DATA = require('./flagdata');

db.once('open', async () => {
  await Deck.deleteMany({});

  await Deck.collection.insertOne(DECK_DATA);
  await Deck.collection.insertOne(DECK2_DATA);

  console.log('all done!');
  process.exit(0);
})