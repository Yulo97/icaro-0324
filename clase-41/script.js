// Obtener el protocolo de conexion
const protocolo = window.location.protocol;
console.log(protocolo);

// Obtener el host
console.log(window.location.hostname);

// Obtener la URL
console.log(window.location.href);

// Hace una redireccion
const btnGoogle = document.getElementById("btnGoogle");

btnGoogle.addEventListener("click", () => {
  window.location = "https://google.com.ar/";
});
