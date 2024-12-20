const { Router } = require("express");
const usuariosControllers = require("../controllers/usuario.controllers.js");

const router = Router();

router.get("/", usuariosControllers.getUsers);

module.exports = router;
