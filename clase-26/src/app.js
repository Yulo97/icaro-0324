const express = require("express");
const usuariosRouter = require("./routes/usuarios.routes.js")
const productosRouter = require("./routes/productos.routes.js")

const app = express();

const PORT = 3000;

app.listen(PORT, console.log(`Servidor escuchando en el puerto ${PORT}`));

app.set("view engine", "ejs")
app.use("/public", express.static("public"))

// Router
app.use("/usuarios", usuariosRouter)
app.use("/productos", productosRouter)