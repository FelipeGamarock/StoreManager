const salesService = require('../services/salesService');

const getAll = async (req, res, next) => {
  try {
    const data = await salesService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await salesService.getById(id);
    return res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById };