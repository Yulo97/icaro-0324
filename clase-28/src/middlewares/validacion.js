const isAdmin = (req, res, next) => {
  const { user, pass } = req.body;

  if ((!user, !pass)) return res.send("Debes proporcionar credenciales");

  const indexUser = db_user.findIndex(
    (item) => item.pass == pass && item.user == user
  );

  if (indexUser === -1) return res.send("Usuario no encontrado");

  if (db_user[indexUser].role === "admin") {
    next();
  } else {
    res.send("El usuario no es admin");
  }
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

module.exports = { isAdmin };
