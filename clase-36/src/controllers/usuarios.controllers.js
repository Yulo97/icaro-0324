const Usuario = require("../models/usuarios.model.js");

const getUsuarios = async (req, res) => {
  const response = await Usuario.findAll();
  res.json(response);
};

const addUsuario = async (req, res) => {
  const { body } = req;

  const response = await Usuario.create(body);

  res.json(response);
};

const getUsuarioById = async (req, res) => {
  const { id } = req.params;

  const response = await Usuario.findByPk(id);

  if (!response)
    return res.json({ status: "warning", message: "Usuario no encontrado" });
  res.json(response);
};

module.exports = {
  getUsuarios,
  addUsuario,
  getUsuarioById,
};
