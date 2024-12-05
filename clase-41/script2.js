const btnAgregarProducto = document.getElementById("btnAgregarProducto");
const btnVerCarrito = document.getElementById("btnVerCarrito");
const btnEliminarCarrito = document.getElementById("btnEliminarCarrito");
const mensajeSaludo = document.getElementById("saludo");

const nombreGuardado = localStorage.getItem("nombre");

if (!nombreGuardado) {
  const nombre = prompt("Dime tu nombre") || "";

  localStorage.setItem("nombre", nombre);
  mensajeSaludo.innerText = "Hola " + nombre;
} else {
  mensajeSaludo.innerText = "Hola " + nombreGuardado;
}

let carrito = JSON.parse(localStorage.getItem("cart")) || [];

btnAgregarProducto.addEventListener("click", () => {
  const producto = {
    nombre: "Televisor",
    precio: 50300,
  };

  carrito.push(producto);
  localStorage.setItem("cart", JSON.stringify(carrito));
});

btnVerCarrito.addEventListener("click", () => {
  console.log(JSON.parse(localStorage.getItem("cart")));
});

btnEliminarCarrito.addEventListener("click", () => {
  carrito = [];

  localStorage.removeItem("cart");
});
