const mongoose = require('mongoose');

module.exports = (done) => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  done();
};
