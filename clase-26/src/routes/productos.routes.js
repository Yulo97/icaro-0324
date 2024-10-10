const { Router } = require("express")

const router = Router()

router.get("/", (req,res )=> {
    res.json(dbProductos)
})


router.get("/:id", (req, res) => {
    const id = req.params.id

    res.json(dbProductos[id])
})

router.get("/vista/:id", (req, res) => {
    const {id} = req.params

    res.render("producto.ejs", dbProductos[id])
})

const dbProductos = [
    { nombre: "Laptop", precio: 1500 },
    { nombre: "Smartphone", precio: 800 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Mouse", precio: 30 },
    { nombre: "Auriculares", precio: 120 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 400 },
    { nombre: "Cámara", precio: 600 },
    { nombre: "Disco Duro Externo", precio: 100 },
    { nombre: "Disco Duro", precio: 90 },
    { nombre: "Disco", precio: 50 },
];

module.exports = router