const productsModel = require('../models/productsModel');

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

const getById = async (id) => {
  const item = await productsModel.getById(id);
  if (!item) {
    throw new Error('Product not found');
  }
  return item;
};

const add = async (name) => {
  if (!name) {
    throw new Error('"name" is required');
  }
  if (name.length < 5) {
    throw new Error('"name" length must be at least 5 characters long');
  }
  const item = await productsModel.add(name);
  return item;
};

module.exports = { getAll, getById, add };