

fetch("https://pokeapi.co/api/v2/pokemon/charmeleon")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        console.log(data)

        let kilos = Math.ceil(data.weight * 0.453592)

        document.getElementById("nombre").innerHTML = data.name.toUpperCase()
        document.getElementById("orden").innerHTML =  "Numero: " + data.order
        document.getElementById("altura").innerHTML = "Altura: " + data.height + " pies"
        document.getElementById("peso").innerHTML = "Peso: " + kilos + " kg"
        document.getElementById("imagen").src = data.sprites.front_default
    })



const fetchPokemon = () => {
    const nombrePokemon = document.getElementById("inputPokemon").value

    console.log("Buscar Pokemon: ", nombrePokemon)


    fetch("https://pokeapi.co/api/v2/pokemon/" + nombrePokemon)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
    
            let kilos = Math.ceil(data.weight * 0.453592)
    
            document.getElementById("nombre").innerHTML = data.name.toUpperCase()
            document.getElementById("orden").innerHTML =  "Numero: " + data.order
            document.getElementById("altura").innerHTML = "Altura: " + data.height + " pies"
            document.getElementById("peso").innerHTML = "Peso: " + kilos + " kg"
            document.getElementById("imagen").src = data.sprites.front_default
        })
}