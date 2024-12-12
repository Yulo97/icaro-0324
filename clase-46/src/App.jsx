import "./App.css";
import { useState } from "react";
import { Titular } from "./components/Titular";
import { Contador } from "./components/Contador";
import { Personaje } from "./components/Personaje";

function App() {
  const [titulo, setTitulo] = useState("Esta es mi sitio con React");

  const handleChangeTitle = (event) => {
    const { value } = event.target;

    setTitulo(value);
  };

  return (
    <>
      <Titular texto={titulo} />

      <input type="text" name="inputTitulo" onChange={handleChangeTitle} />

      <Contador />
      <Personaje />
    </>
  );
}

export default App;
