import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ListProduct } from "./components/ListProducts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ListProduct />
    </>
  );
}

export default App;
