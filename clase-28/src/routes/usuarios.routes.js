const { Router } = require("express");
const usuariosControllers = require("../controllers/usuarios.controllers.js");
const { isAdmin } = require("../middlewares/validacion.js");

const router = Router();

router.get("/", usuariosControllers.getUsers);
router.get("/:id", usuariosControllers.getUserById);
router.delete("/:id", isAdmin, usuariosControllers.deleteUser);
router.post("/login", usuariosControllers.login);

module.exports = router;
