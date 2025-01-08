import { useState, useEffect } from "react";
import { CardProduct } from "../CardProduct";
import axios from "axios";

export const ListProduct = () => {
  const [productos, setProductos] = useState([]);

  const fetch = async () => {
    const response = await axios.get("http://localhost:3000/productos");

    console.log(response.data);
    setProductos(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: 40,
        margin: "50px",
      }}
    >
      {productos.map((product, index) => (
        <CardProduct key={index} product={product} />
      ))}
    </div>
  );
};
