import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Contacto } from "./components/pages/Contacto";
import { Home } from "./components/pages/Home";
import { Productos } from "./components/pages/Productos";
import { Navbar } from "./components/template/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tienda" element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;
