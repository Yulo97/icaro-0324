import React from "react";
import { Padre } from "../Padre";
import { useTemaStore } from "../../stores/useTemaStore";

export const CambioDeTema = () => {
  const tema = useTemaStore((state) => state.tema);

  return (
    <>
      <h1>Tema: {tema}</h1>
      <Padre />
    </>
  );
};
