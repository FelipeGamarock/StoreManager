const errorMiddleware = (error, req, res, _next) => {
  if (error.message.includes('characters')) return res.status(422).json({ message: error.message });
  if (error.message.includes('required')) return res.status(400).json({ message: error.message });
  return res.status(404).json({ message: error.message });
};

module.exports = errorMiddleware;