import React from "react";

export const TarjetaAlumno = ({ nombre, fechaNacimiento }) => {
  const handleReprobar = () => {
    alert(`El alumno ${nombre} fue reprobado.`);
  };

  return (
    <div className="tarjetaAlumno">
      <h4>Nombre de Alumno: {nombre}</h4>
      <h4>Fecha de Nacimiento: {fechaNacimiento}</h4>
      <button onClick={handleReprobar}>Reprobar</button>
    </div>
  );
};
