const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  distance: {
    type: Number,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model('Ride', RideSchema);
