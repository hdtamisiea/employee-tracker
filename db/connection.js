const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3301,
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'SQL@34205',
  database: 'tracker'
});

module.exports = db;