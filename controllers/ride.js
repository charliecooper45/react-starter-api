const Ride = require('../models/ride');
const { ObjectId } = require('mongoose').Types;

exports.list = async (req, res) => {
  const rides = await Ride.find();
  res.json(rides);
};

exports.create = async (req, res) => {
  const ride = new Ride(req.body);
  await ride.save();
  res.status(201).json(ride);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Ride.remove({ _id: ObjectId(id) });
  res.status(200).json({ id, message: 'Ride deleted' });
};
