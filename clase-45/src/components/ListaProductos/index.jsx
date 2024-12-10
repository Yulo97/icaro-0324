import React from "react";

export const ListaProductos = ({ children }) => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>PRODUCTOS</h3>
      <div className="contenedorProductos">{children}</div>
    </>
  );
};
