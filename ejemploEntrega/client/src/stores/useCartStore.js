import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addProductoToCart: (producto) =>
    set((state) => ({ cart: [...state.cart, producto] })),

  deleteCart: () => set(() => ({ cart: [] })),
}));
