const errorMiddleware = (error, req, res, _next) => {
  res.status(400).send('Algo deu errado');
};

module.exports = errorMiddleware;