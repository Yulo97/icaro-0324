import React from "react";
import { Card, Button, Image } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { useCartStore } from "../../../stores/useCartStore";
import styles from "./CardProduct.module.css";
import { useNavigate } from "react-router-dom";

export const CardProduct = ({ product }) => {
  const { addCart } = useCartStore();

  const navigate = useNavigate();

  const handleAddCart = () => {
    addCart(product);
    console.log("Producto agregado al carrito");
  };

  const handleViewProduct = () => {
    navigate(`/tienda/${product.id}`);
  };

  return (
    <Card
      className={styles.tarjeta}
      title={product.title}
      bordered={false}
      hoverable
      cover={
        <Image
          alt="example"
          src={`http://localhost:3000/images/${product.image}`}
        />
      }
    >
      <p>Descripcion: {product.description}</p>
      <p>Precio: ${product.price}</p>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <Button
          size="large"
          onClick={handleViewProduct}
          icon={<EyeOutlined key={"ver-producto"} />}
        >
          Ver
        </Button>
        <Button
          size="large"
          icon={<ShoppingCartOutlined key={"agregar-carrito"} />}
          onClick={handleAddCart}
        >
          Comprar
        </Button>
      </div>
    </Card>
  );
};
