import React from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";

export const CardProduct = ({ product }) => {
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
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
        >
          Comprar
        </Button>
      </div>
    </Card>
  );
};
