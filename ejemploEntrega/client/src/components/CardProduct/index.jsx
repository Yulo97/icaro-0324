import React from "react";

export const CardProduct = ({ name, price, description }) => {
  return (
    <div>
      <h3>Producto: {name}</h3>
      <h4>Precio: $ {price}</h4>
      <p>Descripcion: {description}</p>

      <span>----------------------</span>
    </div>
  );
};
