const Ride = require('../models/ride');
const { ObjectId } = require('mongoose').Types;

exports.list = async (req, res) => {
  const rides = await Ride.find({});
  res.json(rides);
};

exports.create = async (req, res) => {
  const ride = new Ride(req.body);
  await ride.save();
  res.status(201).json(ride);
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;

  const { n } = await Ride.remove({ _id: ObjectId(id) });
  if (n === 0) {
    next(`Ride with ID ${id} not found`);
  } else {
    res.status(200).json({ id, message: 'Ride deleted' });
  }
};
