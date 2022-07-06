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

const add = async (req, res, next) => {
  try {
    const { name } = req.body;
    const item = await productsService.add(name);
    return res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const item = await productsService.edit(id, name);
    return res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await productsService.remove(id);
    return res.status(204).json(item);
  } catch (error) {
    next(error);
  }
};
 
module.exports = { getAll, getById, add, remove, edit };