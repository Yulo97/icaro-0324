const connection = require("../db/db.js");

const getPersonajes = (req, res) => {
  connection.query("SELECT * from personajes", (err, result, fields) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

const createPersonaje = (req, res) => {
  const body = req.body;

  connection.query(
    `INSERT INTO personajes (nombre, genero, raza, clase, id_user) values (?, ?, ?, ?, ?)`,
    [body.nombre, body.genero, body.raza, body.clase, body.id_user],
    (err, result, fields) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
};

module.exports = { getPersonajes, createPersonaje };
