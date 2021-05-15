const db = require('../config/connection');
const { Card } = require('../models');

const CARD_DATA = require('./data');

db.once('open', async () => {
  await Card.deleteMany({});

  await Card.collection.insertMany(CARD_DATA);

  console.log('all done!');
  process.exit(0);
})