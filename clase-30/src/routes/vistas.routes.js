const { Router }  = require("express")
const vistasControllers = require("../controllers/vistas.controllers.js")
const {  autenticacion } = require("../middlewares/validaciones.js")

const router = Router()

router.get("/login", vistasControllers.renderLogin)
router.get("/", autenticacion, vistasControllers.renderIndex)

module.exports = router