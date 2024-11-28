const form = document.getElementById("formulario")
const spanAlerta = document.getElementById("spanAlerta")
const botonEnviar = document.getElementById("botonEnviar")

botonEnviar.disabled = true;

form.addEventListener("submit", (event) => {
    const inputNombre = form.nombre.value
    const inputApellido = form.apellido.value
    const inputTelefono = form.telefono

    event.preventDefault()
        
    if(!inputNombre || !inputApellido) {
        spanAlerta.textContent = "Debes completar todos los campos"
        return
    }
    
    if(inputTelefono.value.length <= 7 || inputTelefono.value.length >= 12){
        spanAlerta.textContent = "Ingrese un telefono valido"
        return
    }
    
    console.log("Formulario Enviado")
})

form.addEventListener("keypress", (event) => {
    const inputNombre = form.nombre.value
    const inputApellido = form.apellido.value
    const inputTelefono = form.telefono.value

    if(inputNombre && inputApellido && inputTelefono){
        botonEnviar.disabled = false
    }else{
        botonEnviar.disabled = true
    }
})