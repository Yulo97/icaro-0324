const express = require("express");
const usuariosRouter = require("./routes/usuarios.routes.js");
const viewsRouter = require("./routes/views.routes.js");
const morgan = require("morgan");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware GLOBAL
app.use(morgan("tiny"));

// Router
app.use("/usuarios", usuariosRouter);
app.use("/views", viewsRouter);

app.get("/", (req, res) => {
  res.send("Bievenido al mi servidor");
});
