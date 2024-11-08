const { Router } = require("express")
const usuariosControllers = require("../controllers/usuarios.controllers.js")

const router = Router()

router.get("/", usuariosControllers.getUsuarios)

module.exports = router
