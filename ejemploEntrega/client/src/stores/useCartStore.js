import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  addCart: (product) =>
    set((state) => {
      // Verificar si el producto ya existe en el carrito
      const productIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (productIndex !== -1) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              cantidad: item.cantidad + 1,
            };
          }

          return item;
        });

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }

      const updatedCart = [...state.cart, { ...product, cantidad: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  deleteProduct: (product) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== product.id);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  // deleteCart: () => set(() => ({ cart: [] })),
}));
