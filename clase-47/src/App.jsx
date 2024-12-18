import { useState } from 'react'
import { ListaPersonajes } from './components/ListaPersonajes'
import './App.css'

function App() {
  const [nombre, setNombre] = useState("")

  return (
    <>
      <h1>Hola {nombre === "" ? "Persona sin nombre" : nombre}</h1>
      <ListaPersonajes></ListaPersonajes>
    </>
  )
}

export default App
