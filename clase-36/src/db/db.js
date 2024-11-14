const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("videojuego", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
