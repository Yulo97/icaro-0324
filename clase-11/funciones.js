import fs from "fs";
import inquirer from "inquirer";

export const verUsuarios = () => {
  const usuarios = JSON.parse(fs.readFileSync("./usuarios.json", "UTF-8"));
  console.log(usuarios);
};

export const crearUsuario = (usuario) => {
  const usuarios = JSON.parse(fs.readFileSync("./usuarios.json", "UTF-8"));

  usuarios.push(usuario);

  fs.writeFileSync("./usuarios.json", JSON.stringify(usuarios));

  console.log("Usuario agregado");
};

export const eliminarUsuario = (nombre) => {
  const usuarios = JSON.parse(fs.readFileSync("./usuarios.json", "UTF-8"));

  const userIndex = usuarios.findIndex((user) => user.name === nombre);

  if (userIndex === -1) {
    console.log("El usuario no existe");
  } else {
    usuarios.splice(userIndex, 1);

    fs.writeFileSync("./usuarios.json", JSON.stringify(usuarios));

    console.log("Se elimino el usuario con el indice", userIndex);
  }
};

export const actualizarUsuario = async (name) => {
  const usuarios = JSON.parse(fs.readFileSync("./usuarios.json", "UTF-8"));

  const userFound = usuarios.find((user) => user.name === name);

  if (userFound) {
    const input = await inquirer.prompt([
      {
        name: "name",
        message: "¿Cual es el nuevo nombre?",
      },
      {
        name: "lastname",
        message: "¿Cual es el nuevo apellido?",
      },
    ]);

    userFound.name = input.name;
    userFound.lastname = input.lastname;

    fs.writeFileSync("./usuarios.json", JSON.stringify(usuarios));
  } else {
    console.log("El usuario a actualizar no existe");
  }
};

export const buscarUsuario = async (name) => {
  const usuarios = JSON.parse(fs.readFileSync("./usuarios.json"));

  const userFound = usuarios.find((item) => item.name === name);

  if (!userFound) {
    console.log("Usuario no encontrado");
  } else {
    console.log(userFound);
  }
};

export const filtrarPorNombres = async (name) => {
  const usuarios = JSON.parse(fs.readFileSync("./usuarios.json"));

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(name.toLowerCase())
  );

  console.log(usuariosFiltrados);
};
