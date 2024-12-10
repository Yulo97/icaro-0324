import React from "react";

export const Producto = ({ imagen, titulo, precio }) => {
  return (
    <div className="tarjetaProducto">
      <h2>Titulo: {titulo}</h2>
      <h2>Precio: {precio}</h2>
      <img src={imagen} alt="imagen del producto" />
    </div>
  );
};
