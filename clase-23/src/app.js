const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

let contador = 0;

///////////////////////// ARREGLO HP ///////////////////////
const personajes = [
  {
    nombre: "Harry Potter",
    descripcion:
      "El protagonista de la serie, un joven mago que asiste a Hogwarts y lucha contra el malvado Lord Voldemort.",
  },
  {
    nombre: "Severus Snape",
    descripcion:
      "Un profesor de Potions en Hogwarts que inicialmente se presenta como un personaje oscuro, pero cuya verdadera naturaleza es revelada en la saga.",
  },
  {
    nombre: "Luna Lovegood",
    descripcion:
      "Una estudiante de Hogwarts conocida por su personalidad inusual y su fe en cosas inexplicables, como los Cirenos.",
  },
  {
    nombre: "Ginny Weasley",
    descripcion:
      "La hermana mayor de Fred, George, Ron y Percy Weasley, quien se destaca en la saga por su valentía y liderazgo.",
  },
  {
    nombre: "Ron Weasley",
    descripcion:
      "Un amigo cercano de Harry desde el principio de la serie, conocido por su sentido del humor y su lealtad incondicional a sus amigos.",
  },
  {
    nombre: "Lord Voldemort",
    descripcion:
      "El principal antagonista de la saga, un mago oscuro que busca dominar el mundo mágico y eliminar a todos aquellos que no sean como él.",
  },
  {
    nombre: "Hermione Granger",
    descripcion:
      "Una estudiante brillante y trabajadora de Hogwarts que se convierte en una de las amigas más cercanas de Harry y Ron.",
  },
  {
    nombre: "Draco Malfoy",
    descripcion:
      "Un estudiante rival de Harry en Hogwarts, conocido por su familia noble y su actitud maliciosa.",
  },
  {
    nombre: "Sirius Black",
    descripcion:
      "El tío de Harry que es condenado injustamente a prisión y se libera durante la saga para ayudar a Harry a descubrir la verdad sobre sus padres.",
  },
  {
    nombre: "Albus Dumbledore",
    descripcion:
      "El director sabio e inigualable de Hogwarts, quien juega un papel crucial en el desarrollo de la historia y la lucha contra Voldemort.",
  },
];
///////////////////////// ARREGLO HP ///////////////////////

app.listen(PORT, () => {
  console.log(`Server up in port ${PORT}`);
});

app.get("/", (req, res) => {
  // REQ: La peticion del cliente al servidor
  // RES: La respuesta del servidor al cliente
  contador++;
  console.log("Alguien hizo una peticion en '/'");
  res.send("Bienvenido a mi SERVIDOR");
});

app.get("/contacto", (req, res) => {
  contador++;
  console.log("Alguien hizo una peticion en '/contacto'");
  res.send("Contacto");
});

app.get("/mostrar-contador", (req, res) => {
  res.send(`Sitio web visitado ${contador} veces`);
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/personajes-hp", (req, res) => {
  // Establecer la conexion al a DB

  // Devolver los personajes
  res.json(personajes);
});

app.get("/personajes-hp/harry", (req, res) => {
  res.json(personajes[0]);
});

app.get("/personajes-hp/snape", (req, res) => {
  res.json(personajes[1]);
});
