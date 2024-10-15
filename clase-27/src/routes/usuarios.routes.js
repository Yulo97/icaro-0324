const { Router } = require("express");
const userControllers = require("../controllers/usuarios.controllers.js");

const router = Router();

router.get("/", userControllers.getAllUsers);
router.post("/", userControllers.addUser);
router.delete("/:name", userControllers.deleteUser);

module.exports = router;
