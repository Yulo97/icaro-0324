function miFuncion() {
  var a = "Pepe";
  var b = "Argento";

  if (true) {
    var a = "Pedro";
    let b = "Mica";
  }

  console.log(a);
  console.log(b);
}

function pruebaFor() {
  const array = [1, 2, 3];

  var index = "asd";

  for (var index = 0; index < array.length; index++) {
    const element = array[index];
  }
  console.log(index);
}

const numeros = [5, 6, 7];

let [a, b, c, d = 285] = numeros;

/////////////// DESTRUCTURING /////////////////

const persona = ["Pedro", 80, "Picapiedras"];

const [nombre, , apellido] = persona;

// console.log(nombre);
// console.log(apellido);

// function sumar(a, b) {
//   a + b;
// }

const sumar = (a, b) => a + b;

function sumar2(a, b) {
  return a + b;
}

// console.log(resultado);

///////////////////////

const retornarObjeto = () => ({ nombre: "Pepe", apellido: "Martin" });

/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////

const edad = 17;

let sosMayor = true;

// console.log(edad >= 18 ? true : false);

if (edad >= 18) {
  sosMayor = true;
} else {
  sosMayor = false;
}

let nombrecito = "Giuliano";

console.log(`Mi nombre es "${nombrecito}"`);

console.log("Mi nombre es " + '"' + nombrecito + '"');

// console.log(sosMayor);

/*

M E R N

MySql, Express, React, Node

*/
