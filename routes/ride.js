const Ride = require('../controllers/ride');

module.exports = (api) => {
  api.route('/rides').get(Ride.list);
};
