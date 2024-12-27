import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardProduct } from "../CardProduct";

export const ListProduct = () => {
  const [productos, setProductos] = useState([]);

  const fetch = async () => {
    const response = await axios.get("http://localhost:3000/productos/");
    setProductos(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {productos.map((producto, index) => (
        <CardProduct
          key={index}
          id={producto.id}
          name={producto.title}
          description={producto.description}
          price={producto.price}
        />
      ))}
    </div>
  );
};
