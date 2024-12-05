import React, { useState } from "react";

export const Titular = () => {
  const [nombre, setNombre] = useState("Pepe");
  const [edad, setEdad] = useState(0);

  const cambiarNombre = (event) => {
    setNombre(event.target.value);
  };

  const sumarEdad = () => {
    if (edad + 1 >= 10) {
      return alert("El maximo de edad es 9");
    }
    setEdad(edad + 1);
  };

  const restarEdad = () => {
    if (edad + 1 <= 1) {
      return alert("El minimo de edad es 0");
    }
    setEdad(edad - 1);
  };

  return (
    <div>
      <h1>Hola {nombre}</h1>
      <h3>Tu edad es {edad}</h3>
      <h2>Bienvenido a mi sitio de React</h2>

      <input type="text" placeholder="Nombre" onChange={cambiarNombre} />

      <div>
        <h4>Manipular Edad</h4>
        <button onClick={sumarEdad}>+</button>
        <button onClick={restarEdad}>-</button>
      </div>

      <span>----------------------------------------------------</span>
    </div>
  );
};
