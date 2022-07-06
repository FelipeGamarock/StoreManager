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

const add = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [{ insertId: id }] = await connection.execute(query, [name]);
  return { id, name };
};

const edit = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);
  return true;
};

const remove = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id=?;';
  await connection.execute(query, [id]);
  return true;
};

module.exports = { getAll, getById, add, remove, edit };