const clientes = [
  {
    id: 0,
    name: "Pepe",
    edad: 58,
  },
  {
    id: 1,
    name: "Maria",
    edad: 35,
  },
  {
    id: 2,
    name: "Jose",
    edad: 43,
  },
];

function mostrarClientes() {
  console.log(clientes);
}

function agregarCliente(name, edad) {
  clientes.push({ name, edad });
}

function eliminarCliente() {
  return clientes.pop();
}

function buscarCliente(identificador, name = "Pepe") {
  console.log(clientes[identificador]);

  console.log(name);
}

module.exports = {
  mostrarClientes,
  agregarCliente,
  eliminarCliente,
  buscarCliente,
};
