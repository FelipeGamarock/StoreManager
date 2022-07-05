const productsService = require('../services/productsService');

const getAll = async (req, res, next) => {
  try {
    const data = await productsService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await productsService.getById(id);
    return res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, _next) => {
  const { name } = req.body;
  const item = await productsService.add({ name });
  return res.status(201).json(item);
};

module.exports = { getAll, getById, add };