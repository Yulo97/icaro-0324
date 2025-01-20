import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Product.module.css";
import axios from "axios";
import { Image, Button } from "antd";

export const Product = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const fetchProduct = async () => {
    const response = await axios.get("http://localhost:3000/productos/" + id);
    console.log(response.data);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (product) {
    return (
      <div className={styles.producto}>
        <Image
          style={{ width: "300px", borderRadius: "10px" }}
          src={`http://localhost:3000/images/${product.image}`}
        />

        <div className={styles.contenido}>
          <h1>{product.title}</h1>
          <h2>Precio: $ {product.price}</h2>
          <p>Descripcion: {product.description}</p>
          <p>ID: {product.id}</p>
          <p>Stock: {product.id}</p>
          <Button>Agregar al Carrito</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Producto Inexistente...</h1>
      </div>
    );
  }
};
