import { useState, useEffect } from "react";
import axios from "axios";
import { TarjetaPersonaje } from "../TarjetaPersonaje";

export const ListaPersonajes = () => {
  const [personajes, setPersonajes] = useState([]);

  const buscarPersonajes = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character?page=1"
    );
    setPersonajes(response.data.results);
  };

  useEffect(() => {
    buscarPersonajes();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {personajes
        .filter((item) => item.species === "Alien")
        .map((item, index) => (
          <TarjetaPersonaje
            key={index}
            name={item.name}
            image={item.image}
            species={item.species}
          />
        ))}
    </div>
  );
};
