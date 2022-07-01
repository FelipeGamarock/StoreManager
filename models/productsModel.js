const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM products;';
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?;';
  const [[item]] = await connection.execute(query, [id]);
  return item;
};

module.exports = { getAll, getById };