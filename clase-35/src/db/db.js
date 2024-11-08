const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  database: "juego",
  user: "root",
  password: "1234",
});

module.exports = connection;
