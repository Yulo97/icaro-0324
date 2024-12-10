import { Card } from "./components/Card";
import { Producto } from "./components/Producto";
import { UserPassword } from "./components/UserPassword";
import "./App.css";

function App() {
  return (
    <>
      <Card orientacion={"horizontal"}>
        <Card orientacion={"horizontal"} tamaño={"pequeño"}>
          <UserPassword />
        </Card>
      </Card>

      <Card orientacion={"vertical"} tamaño={"pequeño"}>
        <Producto
          titulo={"Producto"}
          imagen={"https://picsum.photos/150/150"}
        />
      </Card>
    </>
  );
}

export default App;
