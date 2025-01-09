import React from "react";
import { Drawer, Button } from "antd";
import { useCartStore } from "../../../stores/useCartStore";
import styles from "./Sidebar.module.css";
import { DeleteOutlined } from "@ant-design/icons";

export const Sidebar = ({ open, setOpen }) => {
  const { cart, deleteProduct } = useCartStore();

  const handleDelete = (product) => {
    deleteProduct(product);
  };

  return (
    <Drawer title="CARRITO" open={open} onClose={() => setOpen()}>
      {cart.map((producto, index) => (
        <div key={index} className={styles.itemCart}>
          <div>
            <h3>{producto.title}</h3>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio: ${producto.price}</p>
          </div>
          <Button onClick={() => handleDelete(producto)}>
            <DeleteOutlined />
          </Button>
        </div>
      ))}
    </Drawer>
  );
};
