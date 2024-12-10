import React from "react";

export const UserPassword = () => {
  return (
    <>
      <label htmlFor="usuario">Usuario</label>
      <input type="text" id="usuario" />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" />
      <button>Enviar</button>
    </>
  );
};
