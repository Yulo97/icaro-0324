import { CambioDeTema } from "./components/CambioDeTema";
import { Contacto } from "./components/Contacto";
import { Routes, Route } from "react-router-dom";
import { Menus } from "./components/Menus";

function App() {
  return (
    <>
      <Menus />
      <Routes>
        <Route path="/" element={<h1>Hola Mundo</h1>} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tema" element={<CambioDeTema />} />
      </Routes>
    </>
  );
}

export default App;
