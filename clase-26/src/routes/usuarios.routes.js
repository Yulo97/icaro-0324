const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
  res.json(dbUsuarios)
})

router.get("/:id", (req, res) => {
    const id = req.params.id

    res.json(dbUsuarios[id])
})

router.get("/vista-usuario/:id", (req, res) => {
    const { id } = req.params

    res.render("usuario.ejs", dbUsuarios[id])
})

const dbUsuarios = [
    { nombre: "Pepe", dni: "123456" },
    { nombre: "Ana", dni: "654321" },
    { nombre: "Lucas", dni: "987654" },
    { nombre: "María", dni: "456789" },
    { nombre: "Julián", dni: "321654" },
    { nombre: "Sofía", dni: "159753" },
    { nombre: "Martín", dni: "852963" },
    { nombre: "Laura", dni: "741258" },
    { nombre: "Tomás", dni: "369258" },
    { nombre: "Valentina", dni: "147852" },
    { nombre: "Diego", dni: "258963" }
];

module.exports = router;