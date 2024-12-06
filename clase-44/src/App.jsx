import "./App.css";
import { TarjetaAlumno } from "./components/TarjetaAlumno";

function App() {
  const alumnos = [
    {
      nombre: "Pepe",
      fechaNacimiento: "15/04/1997",
    },
    {
      nombre: "Ramiro",
      fechaNacimiento: "04/07/1995",
    },
    {
      nombre: "Alberto",
      fechaNacimiento: "23/06/2000",
    },
    {
      nombre: "Javier",
      fechaNacimiento: "20/11/1998",
    },
    {
      nombre: "Javier",
      fechaNacimiento: "20/11/1998",
    },
    {
      nombre: "Javier",
      fechaNacimiento: "20/11/1998",
    },
  ];

  return (
    <div>
      <h1>Lista de Alumnos</h1>

      {alumnos.map((alumno) => (
        <TarjetaAlumno
          nombre={alumno.nombre}
          fechaNacimiento={alumno.fechaNacimiento}
        />
      ))}
    </div>
  );
}

export default App;
