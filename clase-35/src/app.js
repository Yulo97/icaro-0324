const express = require("express");
const usuariosRouter = require("./routes/usuarios.routes.js");
const personajesRouter = require("./routes/personajes.routes.js");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server funcionando en el puerto", PORT);
});

app.use(express.json());

// Router
app.use("/usuarios", usuariosRouter);
app.use("/personajes", personajesRouter);
