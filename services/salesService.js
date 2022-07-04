const salesModel = require('../models/salesModel');

const getAll = async () => {
  const data = await salesModel.getAll();
  return data;
};

const getById = async (id) => {
  const item = await salesModel.getById(id);
  if (!item) {
    throw new Error('Sale not found');
  }
  return item;
};

module.exports = { getAll, getById };