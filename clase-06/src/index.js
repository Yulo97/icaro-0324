const express = require("express");
const session = require("express-session");
const app = express();

app.listen(3000, function () {
  console.log("Servidor escuchando en el puerto 3000");
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "yourSecretKey", // Cambia esto por una clave secreta segura
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Si usas HTTPS, cambia a true
  })
);

app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get(
  "/",
  (req, res, next) => {
    if (req.session.usuario) {
      next();
    } else {
      res.redirect("/login");
    }
  },
  (req, res) => {
    console.log(req.session.usuario);
    res.render("index.ejs", req.session.usuario);
  }
);

app.post("/login", (req, res) => {
  const body = req.body;

  if (body.user == "asd" && body.pass == "123") {
    req.session.usuario = body;

    res.redirect("/");
  } else {
    res.send("Usuario inexistente");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});
