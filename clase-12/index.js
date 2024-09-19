const productos = [
  {
    nombre: "Tetera",
    precio: 1300,
  },
  {
    nombre: "Tetera",
    precio: 2300,
  },
  {
    nombre: "Tetera",
    precio: 1500,
  },
  {
    nombre: "Tetera",
    precio: 800,
  },
  {
    nombre: "Tetera",
    precio: 799,
  },
];

const arrayNuevo = productos.map((item) => ({ precio: item.precio * 1.5, nombre: item.nombre }));

const productosFiltrados = productos.filter((item) => item.precio < 1000);

const numeros = [1, 2, 3, "pepe", 5, 6];

const indice = numeros.findIndex((item) => item === 1);
const indice2 = numeros.indexOf(1);

console.log(indice);
console.log(indice2);
