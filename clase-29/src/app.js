const express = require("express");
const usersRouter = require("./routes/usuarios.routes.js");
const viewsRouter = require("./routes/views.routes.js");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

const unDia = 1000 * 60 * 60 * 24;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  sessions({
    secret: "123456",
    saveUninitialized: true,
    cookie: { maxAge: unDia },
    resave: false,
  })
);

// Router
app.use("/usuarios", usersRouter);
app.use("/", viewsRouter);
