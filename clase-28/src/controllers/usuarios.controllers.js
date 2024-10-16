const getUsers = (req, res) => {
  res.send("Estos son todos los usuarios");
};

const getUserById = (req, res) => {
  const id = req.params.id;

  const usuario = db_user.find((user) => user.id == id);

  if (usuario) return res.json(usuario);

  res.status(404).json({ message: "Usuario no encontrado" });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  const usuario = db_user.find((user) => user.id == id);

  if (usuario)
    return res.json({
      status: "success",
      message: "usuario eliminado",
      usuario: usuario,
    });

  res.status(404).json({ message: "Usuario no encontrado" });
};

const login = (req, res) => {
  const { user, pass } = req.body;

  const indexUser = db_user.findIndex(
    (item) => item.pass == pass && item.user == user
  );

  if (indexUser === -1)
    return res
      .status(403)
      .json({ status: "failure", message: "Usuario o Contraseña incorrecta" });

  res.json({ status: "success", message: "Login correcto" });
};

const db_user = [
  {
    id: "1",
    user: "moni",
    pass: "asd",
    role: "user",
  },
  {
    id: "2",
    user: "pepe",
    pass: "123",
    role: "admin",
  },
  {
    id: "3",
    user: "coki",
    pass: "123",
    role: "user",
  },
  {
    id: "4",
    user: "paola",
    pass: "123456",
    role: "user",
  },
];

module.exports = { getUserById, getUsers, login, deleteUser };
