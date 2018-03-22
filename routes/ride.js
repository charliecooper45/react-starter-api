const Ride = require('../controllers/ride');
const { catchError } = require('../utils/error');

module.exports = (api) => {
  api.route('/rides').get(catchError(Ride.list));
  api.route('/rides/').post(catchError(Ride.create));
  api.route('/rides/:id').delete(catchError(Ride.delete));
};
