const { Router } = require("express");
const usuariosControllers = require("../controllers/usuarios.controllers.js");

const router = Router();

router.get("/", usuariosControllers.getUsuarios);
router.get("/:id", usuariosControllers.getUsuarioById);
router.post("/", usuariosControllers.addUsuario);

module.exports = router;
