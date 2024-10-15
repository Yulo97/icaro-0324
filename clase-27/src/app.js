const express = require("express");
const usuariosRouter = require("./routes/usuarios.routes.js");
const viewsRouter = require("./routes/views.routes.js");

const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server UP en el puerto " + PORT);
});

// Router
app.use("/usuarios", usuariosRouter);
app.use("/views", viewsRouter);
