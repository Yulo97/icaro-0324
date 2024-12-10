import React from "react";

export const Producto = ({ imagen, titulo }) => {
  return (
    <>
      <h2>{titulo}</h2>
      <img src={imagen} alt="" />
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        repudiandae atque dolorem omnis, quia maxime eos, odit reiciendis rerum
        fugit minus? Tempore neque ipsam unde dicta temporibus hic reiciendis
        nihil!
      </p>
      <button>Comprar</button>
    </>
  );
};
