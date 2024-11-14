const Personajes = require("../models/personajes.model.js");

const getPersonajes = async (req, res) => {
  const respuesta = await Personajes.findAll();
  res.json(respuesta);
};

const addPersonaje = async (req, res) => {
  const { body } = req;

  try {
    const respuesta = await Personajes.create(body);
    res.json(respuesta);
  } catch (error) {
    res.status(500).json({ status: "error", error: error });
  }
};

module.exports = {
  getPersonajes,
  addPersonaje,
};
