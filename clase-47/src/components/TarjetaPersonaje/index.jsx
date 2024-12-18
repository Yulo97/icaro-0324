import React from "react";

const styleCard = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  border: "1px solid black",
  margin: "25px",
  padding: "10px",
};

export const TarjetaPersonaje = ({ name, species, image }) => {
  return (
    <div style={styleCard}>
      <h4>Nombre: {name}</h4>
      <h4>Especie: {species}</h4>
      <img style={{ width: "150px" }} src={image} alt="" />
    </div>
  );
};
