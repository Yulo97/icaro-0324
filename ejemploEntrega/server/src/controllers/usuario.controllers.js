const connection = require("../db/db.js");

const getUsers = (req, res) => {
  connection.query("SELECT * FROM usuarioss", (err, result, fields) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: "failure", message: err.message });
    }

    res.status(200).json(result);
  });
};

module.exports = {
  getUsers,
};
