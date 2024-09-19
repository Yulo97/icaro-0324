const celulares = [];

const agregarCelular = (celular) => celulares.push(celular);

const mostrarCelulares = () => console.log(celulares);

const eliminarCelular = () => celulares.pop();

module.exports = { agregarCelular, mostrarCelulares, eliminarCelular };
