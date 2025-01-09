import React from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { useCartStore } from "../../../stores/useCartStore";

export const CardProduct = ({ product }) => {
  const { addCart } = useCartStore();

  const handleAddCart = () => {
    addCart(product);
    console.log("Producto agregado al carrito");
  };

  return (
    <Card
      title={product.title}
      bordered={false}
      hoverable
      style={{
        width: 300,
      }}
      cover={
        <img
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
        <Button size="large" icon={<EyeOutlined key={"ver-producto"} />}>
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
