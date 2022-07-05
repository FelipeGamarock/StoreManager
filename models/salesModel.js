const connection = require('./connection');

const getAll = async () => {
  const query = `select
    s.id as saleId,
    s.date as date,
    sp.product_id as productId,
    sp.quantity as quantity
  from sales AS s
  inner join sales_products as sp ON sp.sale_id = s.id;`;
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const query = `select
    s.date as date,
    sp.product_id as productId,
    sp.quantity as quantity
  from sales AS s
  inner join sales_products as sp ON sp.sale_id = s.id
  where s.id = ?;`;
  const [item] = await connection.execute(query, [id]);
  return item;
};

module.exports = { getAll, getById };