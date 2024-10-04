const express = require("express");

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

app.get("/", (req, res) => {
  res.render("index.ejs", { nombre: "Alberto" });
});

app.get("/peliculas/0", (req, res) => {
  res.render("pelicula.ejs", peliculas[0]);
});

app.get("/peliculas/1", (req, res) => {
  res.render("pelicula.ejs", peliculas[1]);
});

app.get("/peliculas/2", (req, res) => {
  res.render("pelicula.ejs", peliculas[2]);
});

/////////////////// PELICULAS ////////////////////

const peliculas = [
  {
    titulo: "Buenas compañia",
    genero: "comedia",
    protagonista: "Homero SImpsons",
    imagen:
      "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/b0OfuUs4lHGWG4VNlHcXwL5a.jpg",
    argumento:
      " Tres amigos estaban cargando combustible en una estacion de servicio cuando son confundidos por la policia....",
  },
  {
    titulo: "Otra vez",
    genero: "comedia",
    imagen:
      "https://images.pexels.com/photos/9600001/pexels-photo-9600001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    protagonista: "Homero SImpsons",
    argumento: " bla bla bla bla....",
  },
  {
    titulo: "sarasa",
    genero: "terror",
    imagen:
      "https://images.pexels.com/photos/9600001/pexels-photo-9600001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    protagonista: "Homer",
    argumento: " bla bla bla bla....",
  },
];

/////////////////// PELICULAS ////////////////////
