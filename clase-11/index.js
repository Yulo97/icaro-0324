import inquirer from "inquirer";
import {
  verUsuarios,
  crearUsuario,
  eliminarUsuario,
  actualizarUsuario,
  buscarUsuario,
  filtrarPorNombres,
} from "./funciones.js";

const iniciar = async () => {
  const input = await inquirer.prompt({
    type: "list",
    name: "accion",
    message: "¿Que quieres hacer?",
    choices: ["leer", "crear", "eliminar", "actualizar", "buscar", "filtrar", "help"],
  });

  if (input.accion === "leer") {
    verUsuarios();
  }

  if (input.accion === "crear") {
    const input = await inquirer.prompt([
      {
        name: "name",
        message: "¿Como se llama el usuario?",
      },
      {
        name: "lastname",
        message: "¿Como se apellida el usuario?",
      },
    ]);

    console.log("Este es un mensaje de consola");

    // crearUsuario(input);
  }

  if (input.accion === "eliminar") {
    const input = await inquirer.prompt({
      name: "name",
      message: "¿Como se llama el usuario que quieres eliminar?",
    });

    eliminarUsuario(input.name);
  }

  if (input.accion === "actualizar") {
    const input = await inquirer.prompt({
      name: "name",
      message: "¿Como se llama el usuario que quieres actualizar?",
    });

    actualizarUsuario(input.name);
  }

  if (input.accion === "help") {
    console.log("Selecciona LEER para ver los usuarios");
    console.log("Selecciona CREAR para crear un usuario");
    console.log("Selecciona ELIMINAR eliminar un usuario");
    console.log("Selecciona ACTUALIZAR para modificar un usuario");
  }

  if (input.accion === "buscar") {
    const input = await inquirer.prompt({
      name: "name",
      message: "¿Como se llama el usuario queres buscar?",
    });

    buscarUsuario(input.name);
  }

  if (input.accion === "filtrar") {
    const input = await inquirer.prompt({
      name: "name",
      message: "¿Como se llama los usuarios que queres buscar?",
    });

    filtrarPorNombres(input.name);
  }
};

iniciar();
