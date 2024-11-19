const personaje = {
    nombre: "Pepe",
    edad: 35,
    altura: 1.8,
    poderes: [
        {
            nombre: "kamehameha",
            danio: 5000
        },
        {
            nombre: "rasengan",
            danio: 2500
        },
    ]
}

const titular = document.getElementById("titular")

// console.log(titular)

const itemsDeLista = document.getElementsByName("item-lista")

// console.log(itemsDeLista)

const span = document.getElementsByTagName("span")

// console.log(span[0])

const itemsImpares = document.getElementsByClassName("impar")

// console.log(itemsImpares)

const titulo = document.querySelector("ol .impar")

// console.log(titulo)

const parrafos = document.querySelectorAll("div > p")

// console.log(parrafos[0])

let variable = "hola"

function cambiarTitulo () {
    if(titular.innerHTML === "Hola Mundo"){
        titular.innerHTML = "Chau Mundo"
    }else{ 
        titular.innerHTML = "Hola Mundo"
    }
}

function cambiarImagen() {
    document.getElementById("img").src = "https://picsum.photos/id/235/200/300"
}

titular.style.color = "blue"