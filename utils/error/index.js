exports.catchError = fn => (req, res, next) => fn(req, res, next).catch(next);

exports.errorHandler = (err, req, res, next) => {
  if (!err) return next(err);
  const { message } = err;
  let { status } = err;
  status = status || 500;
  return res.status(status).json({ status, message });
};
