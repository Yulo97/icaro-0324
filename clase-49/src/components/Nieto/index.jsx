import React from "react";
import { useTemaStore } from "../../stores/useTemaStore";

export const Nieto = () => {
  const { tema, toggleTema } = useTemaStore();

  const handleClick = () => {
    toggleTema();
  };

  return (
    <button onClick={handleClick}>{tema === "oscuro" ? "🌙" : "🌞"}</button>
  );
};
