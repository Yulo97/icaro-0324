import React from "react";
import { useCartStore } from "../../stores/useCartStore";

export const CardProduct = ({ name, price, description, id }) => {
  const { cart, addProductoToCart, deleteCart } = useCartStore();

  const handleAddCart = () => {
    const indexProducto = cart.findIndex((producto) => producto.id === id);
    if (indexProducto === -1) {
      addProductoToCart({ id, name, price, quantity: 1 });
    } else {
      const newCart = cart.map((producto) => {
        if (producto.id === id) {
          return { ...producto, quantity: producto.quantity + 1 };
        }
        return producto;
      });

      deleteCart();

      newCart.forEach((producto) => {
        addProductoToCart(producto);
      });
    }
  };

  console.log(cart);

  return (
    <div className="cardProduct">
      <h3>Producto: {name}</h3>
      <h4>Precio: $ {price}</h4>
      <p>Descripcion: {description}</p>
      <p>ID: {id}</p>
      <button onClick={handleAddCart}>Comprar</button>
    </div>
  );
};
