const { Router } = require("express")
const usuariosControllers = require("../controllers/usuarios.controllers.js")

const router = Router()

//Endpoints
router.post("/login", usuariosControllers.loginUser)

module.exports = router

