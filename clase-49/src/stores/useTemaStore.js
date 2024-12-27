import { create } from "zustand";

const useTemaStore = create((set) => ({
  tema: "claro",
  toggleTema: () =>
    set((state) => ({ tema: state.tema === "oscuro" ? "claro" : "oscuro" })),
}));

export { useTemaStore };
