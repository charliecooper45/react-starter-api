const mongoose = require('mongoose');
const config = require('../../config');

mongoose.Promise = global.Promise;

const connection = mongoose.connect(config.database.uri);

connection
  .then(db => {
    console.log(`Successfully connected to ${config.database.uri} MongoDB cluster in ${config.env} mode.`);
    return db;
  })
  .catch(err => {
    console.log('Error while attempting to connect to database:');
    console.log(err);
  });

module.exports = connection;