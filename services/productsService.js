const productsModel = require('../models/productsModel');

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

module.exports = { getAll };