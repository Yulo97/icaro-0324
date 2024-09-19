let alumnos = [1, "Pepe", 3, "Jose"];

let personaje = {
  nombre: "Morty",
  altura: 1.6,

  saltar() {
    console.log(`${this.nombre} salta`);
  },
};

// if (personaje.nombre == "Morty" || personaje.altura > 1.7) {
//   console.log("Entraste al cuerpo del IF");
// } else {
//   console.log("Saliste por el Else");
// }

// if (5 > 5 || 6 == 6) {
//   console.log("Entraste al cuerpo del IF");
// } else {
//   console.log("Saliste por el Else");
// }

let comparacion = 10 > 10;

// if (!comparacion) {
//   console.log("Entraste al IF");
// } else {
//   console.log("Entraste al Else");
// }

// if (process.argv[2] === "dev") {
//   console.log("Se realizo la conexion a la base de datos de Desarrollo");
// }

// if (process.argv[2] === "test") {
//   console.log("Se realizo la conexion a la base de datos de Testing");
// }

console.log(process.argv[2]);
