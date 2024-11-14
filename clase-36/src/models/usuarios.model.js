const sequelize = require("../db/db.js");
const { DataTypes } = require("sequelize");
const Personaje = require("./personajes.model.js");

const Usuario = sequelize.define(
  "usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

// 1:M
Usuario.hasMany(Personaje, {
  foreignKey: { name: "id_user", allowNull: false },
  onDelete: "CASCADE",
});

module.exports = Usuario;
