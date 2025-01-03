import { useState } from "react";
import { Titular } from "./components/Titular";
import { CardProduct } from "./components/CardProduct";
import { Drawer, Button } from "antd";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const onClose = () => {
    setOpenDrawer(false);
  };

  const abrirDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <Titular />
      <Button onClick={abrirDrawer} size="large" type="primary" danger>
        Carrito
      </Button>
      <CardProduct />
      <Drawer open={openDrawer} onClose={onClose} placement="right">
        <h2>Hola mundo!</h2>
      </Drawer>
    </>
  );
}

export default App;
