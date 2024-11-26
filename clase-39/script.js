const astronauta = document.getElementById("astro")
const buttonColor = document.getElementById("color")

let indiceColor = 0;
let escala = 1;
let y = 50;
let x = 50;

document.addEventListener("keypress", (event) => {
    if(event.key == "s"){
        y += 10
        astronauta.style.top = y + "%";
    }
    if(event.key == "d"){
        x -= 10
        astronauta.style.transform = "rotateY(0deg)"
        astronauta.style.right =  x + "%";
    }
    if(event.key == "w"){
        y -= 10
        astronauta.style.top = y + "%";
    }
    if(event.key == "a"){
        x += 10
        astronauta.style.transform = "rotateY(180deg)"
        astronauta.style.right = x + "%";
    }

    if(event.key == "-"){
        escala -= 0.3
        astronauta.style.transform = `scale(${escala})`
    }
    
    if(event.key == "+"){
        escala += 0.3
        astronauta.style.transform = `scale(${escala})`
    }
})

buttonColor.addEventListener("click", () => {

    if(indiceColor >= 10){
        indiceColor = 0
    }else{
        indiceColor += 1
    }
    document.body.style.backgroundColor = colors[indiceColor]

})

const colors = [
    "#FF5733", // Rojo anaranjado
    "#33FF57", // Verde brillante
    "#3357FF", // Azul fuerte
    "#FF33A1", // Rosa vibrante
    "#FFD433", // Amarillo brillante
    "#33FFF6", // Turquesa
    "#8E33FF", // Púrpura intenso
    "#FF8E33", // Naranja suave
    "#33FF8E", // Verde pastel
    "#5733FF"  // Azul púrpura
  ];
