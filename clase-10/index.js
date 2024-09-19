// Importaciones
const { agregarCelular, mostrarCelulares, eliminarCelular } = require("./funciones");

let celular1 = {
  modelo: "X3",
  marca: "POCO",
  precio: 200,
};

let celular2 = {
  modelo: "G5",
  marca: "Motorola",
  precio: 150,
};

const usuario = {
  name: "Pepe",
  password: "1234",
  role: "admin",
};

function login(user) {
  if (user.name === "Pepe" && user.password === "1234" && user.role === "admin") {
    console.log("Login Correcto");
  } else {
    console.log("Login Incorrecto");
  }
}

const usuarios = [
  {
    name: "Pepe",
    pass: "1234",
    role: "admin",
  },
  {
    name: "Alberto",
    pass: "12345",
    role: "normal",
  },
  {
    name: "Jose",
    pass: "1234",
    role: "normal",
  },
  {
    name: "Gustavo",
    pass: "1234",
    role: "admin",
  },
  {
    name: "Gaston",
    pass: "1234",
    role: "normal",
  },
];

const resultado = usuarios.findIndex((item) => item.name === "Gustavo");

// console.log(resultado);

const arrayUsuariosNoAdmin = usuarios.filter(
  (item) => item.pass === "1234" && item.role === "normal"
);

// console.log(arrayUsuariosNoAdmin);

const nuevoArreglo = [];

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].role === "admin" && item.pass === "1234") {
    nuevoArreglo.push(usuarios[i]);
  }
}

console.log(nuevoArreglo);
