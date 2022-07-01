const productsService = require('../services/productsService');

const getAll = async (req, res, next) => {
  try {
    const data = await productsService.getAll();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };