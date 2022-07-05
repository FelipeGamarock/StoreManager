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

const add = async (data) => {
  const itemId = await productsModel.add(data);
  return { id: itemId, name: data.name };
};

module.exports = { getAll, getById, add };