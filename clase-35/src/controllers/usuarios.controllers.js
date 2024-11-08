const connection = require("../../src/db/db.js");

const getUsuarios = async (req, res) => {
  connection.query("SELECT * from usuarios", (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};

module.exports = {
  getUsuarios,
};
