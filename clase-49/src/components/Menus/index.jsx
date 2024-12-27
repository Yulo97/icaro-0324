import React from "react";
import { Link } from "react-router-dom";

export const Menus = () => {
  return (
    <ul>
      <li>
        <Link to={"/"}>Inicio</Link>
      </li>
      <li>
        <Link to={"/contacto"}>Contacto</Link>
      </li>
      <li>
        <Link to={"/tema"}>Temas</Link>
      </li>
    </ul>
  );
};
