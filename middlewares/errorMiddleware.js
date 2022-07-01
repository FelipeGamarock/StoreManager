const errorMiddleware = (error, req, res, _next) => {
  res.status(404).json({ message: error.message });
};

module.exports = errorMiddleware;