const { Router } = require("express");
const usersControllers = require("../controllers/usuarios.controllers.js");

const router = Router();

router.get("/", usersControllers.getUsers);
router.get("/:id", usersControllers.getUserById);
router.delete("/:id", usersControllers.deleteUser);
router.post("/login", usersControllers.loginUser);

module.exports = router;
