import { useState, useEffect } from "react";
import axios from "axios";

export const Personaje = () => {
  const [id, setId] = useState(1);
  const [personaje, setPersonaje] = useState({
    name: "Pepe",
    species: "Humano",
    gender: "Masculino",
    image: "https://rickandmortyapi.com/api/character/avatar/50.jpeg",
  });

  // Funcion para cambiar el ID
  const changeId = (event) => {
    const { value } = event.target;

    setId(value);
  };

  // Funcion para traernos el personaje
  const fetchPersonaje = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    setPersonaje(response.data);
  };

  useEffect(() => {
    fetchPersonaje();

    console.log("Consultando personaje: " + id);
  }, [id]);

  return (
    <>
      <label htmlFor="inputId"></label>
      <input
        type="number"
        id="inputId"
        name="inputId"
        onChange={changeId}
        value={id}
      />

      <h4>Nombre: {personaje.name}</h4>
      <h4>Especie: {personaje.species}</h4>
      <h4>Genero: {personaje.gender} </h4>
      <img src={personaje.image} alt="" />
    </>
  );
};
