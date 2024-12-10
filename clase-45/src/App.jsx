import "./App.css";
import { Producto } from "./components/Producto";
import { ListaProductos } from "./components/ListaProductos";
import { TituloYParrafo } from "./components/TituloYParrafo";

function App() {
  return (
    <>
      <TituloYParrafo />

      <ListaProductos>
        <Producto
          precio={5000}
          titulo={"Televisor"}
          imagen={"https://picsum.photos/id/100/200/200"}
        />
        <Producto
          precio={3050}
          titulo={"Cafetera"}
          imagen={"https://picsum.photos/id/101/200/200"}
        />
        <Producto
          precio={1500}
          titulo={"Mazo de cartas"}
          imagen={"https://picsum.photos/id/102/200/200"}
        />
      </ListaProductos>
    </>
  );
}

export default App;
