const validarDatos = () => {
    const edad = document.getElementById("edad").value

    if(edad < 0 || edad > 100 || !edad){
        return alert("Ingresa tus datos correctamente!")
    }

    alert("Gracias por poner tus datos correctamente")
}