import { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(10);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ margin: "30px" }}>
      <div style={{ marginBottom: "10px" }}>Contador</div>

      <button onClick={restar}> - </button>
      <span style={{ margin: "10px" }}> {contador} </span>
      <button onClick={sumar}> + </button>
    </div>
  );
};
