const fs = require("fs");

const getAllUsers = (req, res) => {
  const usuarios = fs.readFileSync("usuarios.json", "utf-8");

  res.json(JSON.parse(usuarios));
};

const addUser = (req, res) => {
  const { nombre, apellido } = req.body;

  if (!nombre || !apellido) {
    return res.json({
      status: "failure",
      message: "Debes ingresar los campos correctamente",
    });
  }

  const usuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));

  usuarios.push({ nombre, apellido });

  fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));

  res.json({ status: "success", message: "Usuario creado correctamente" });
};

const deleteUser = (req, res) => {
  const name = req.params.name;
  const usuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));

  const indexUser = usuarios.findIndex(
    (item) => item.nombre.toLowerCase() === name.toLowerCase()
  );

  if (indexUser === -1) {
    return res.json({ status: "failure", message: "Usuario no encontrado" });
  }

  usuarios.splice(indexUser, 1);

  fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));

  res.json({ status: "success", message: "Usuario eliminado correctamente" });
};

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
};
