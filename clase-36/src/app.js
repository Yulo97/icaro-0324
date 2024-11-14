const express = require("express");
const routerUsuarios = require("./routes/usuarios.routes.js");
const routerPersonajes = require("./routes/personajes.routes.js");

const sequelize = require("./db/db.js");

const app = express();

const PORT = 3000;

// Middlewares
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server funcionando en el puerto ${PORT}`);
});

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Conexion establecida a la base de datos");
  } catch (error) {
    console.error("Ocurrio un error al conectarse a la DB", error);
  }
};

syncDatabase();

// Router
app.use("/usuarios", routerUsuarios);
app.use("/personajes", routerPersonajes);
