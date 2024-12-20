const express = require("express");
const productRouter = require("./routes/product.routes.js");
const usersRouter = require("./routes/usuario.routes.js");
const cors = require("cors");

const app = express();

const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server iniciado en el puerto ${PORT}`));

// ROUTERS
app.use("/productos", productRouter);
app.use("/usuarios", usersRouter);
