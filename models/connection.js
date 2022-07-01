const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '23765962',
  database: 'StoreManager',
});

module.exports = connection;