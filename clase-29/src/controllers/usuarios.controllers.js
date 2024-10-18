const { passwordCompare } = require("../utils/password.js");

const getUsers = (req, res) => {
  res.json({ message: "Devolviendo todos los usuario" });
};

const getUserById = (req, res) => {
  const { id } = req.params;

  res.json({ message: `Devolviendo al usuario ${id}` });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  res.json({ message: `Eliminando al usuario ${id}` });
};

const loginUser = (req, res) => {
  const body = req.body;

  const match = passwordCompare(body.pass, usuario.pass);

  if (body.user === usuario.user) {
    if (match) {
      req.session.usuario = usuario;

      return res.redirect("/");
    } else {
      res.send("Contraseña incorrecta");
    }
  } else {
    res.send("El usuario no existe");
  }
};

module.exports = { getUsers, getUserById, loginUser, deleteUser };

const usuario = {
  user: "asd",
  pass: "$2b$10$kKHPy2bsYNH9VM7U2.Huh.xNQkhHargRXvxbDFgJHIUMkQvWIQSg.",
  direccion: "Av. Siempre Viva 123",
  telefono: "438-9579",
  admin: true,
};
