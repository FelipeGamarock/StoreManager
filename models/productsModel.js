const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?;';
  const [[item]] = await connection.execute(query, [id]);
  return item;
};

const add = async (data) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [{ insertId: id }] = await connection.execute(query, [data.name]);
  return id;
};
module.exports = { getAll, getById, add };