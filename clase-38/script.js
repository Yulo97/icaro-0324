const titular = document.getElementById("titular")
const fondo = document.getElementById("fondo")
const botonSaludar = document.getElementById("buttonSaludar")
const inputMessage = document.getElementById("inputMessage")
const parrafoMessage = document.getElementById("parrafoMessage")
const barraProgreso = document.getElementById("barraProgreso")
const buttonEliminarEvento = document.querySelector("#buttonEliminarEvento")
const link = document.getElementById("link")

let lastX;

const saludar = () => {
    alert("Hola Mundo!")
}

const cambiarFondo = () => {
    if(fondo.style.backgroundColor === "brown") {
        fondo.style.backgroundColor = "white"
    }else{
        fondo.style.backgroundColor = "brown"
    }
}

const cambiarTexto = () => {
    const valor = inputMessage.value
    parrafoMessage.innerHTML = valor
}

const rotarFondo = (event) => {
    const tecla = event.key

    console.log(tecla)

    if(tecla === "v") {
        fondo.style.backgroundColor = "violet"
    }
    if(tecla === "b") {
        fondo.style.backgroundColor = "blue"
    }
    if(tecla === "g") {
        fondo.style.backgroundColor = "green"
    }
}

const moved = (event) => {
    if(event.buttons == 0) {
        window.removeEventListener("mousemove", moved)
    }else{
        let dist = event.clientX - lastX
        let newWidth = Math.max(10, barraProgreso.offsetWidth + dist)
        barraProgreso.style.width = newWidth + "px"
        lastX = event.clientX
    }
}

const moverBarra = (event) => {
    if(event.button == 0){
        lastX = event.clientX;
        window.addEventListener("mousemove", moved)
    }
}

const eliminarEvento = () => {
    botonSaludar.removeEventListener("click", cambiarFondo)
    console.log("Se elimino el evento del boton Cambiar Fondo!")
}

const clickLink = (event) => {
    event.preventDefault()
    alert("Hola")
}


fondo.addEventListener("keydown", rotarFondo)
botonSaludar.addEventListener("click", cambiarFondo)
inputMessage.addEventListener("change", cambiarTexto)
barraProgreso.addEventListener("mousedown", moverBarra)
titular.addEventListener("mouseenter", () => console.log("Entraste al titular"))
titular.addEventListener("mouseleave", () => console.log("Saliste del titular"))
buttonEliminarEvento.addEventListener("click", eliminarEvento)
link.addEventListener("click", clickLink)

