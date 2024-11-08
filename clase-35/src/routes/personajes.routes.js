const { Router } = require("express");
const personajesControllers = require("../controllers/personajes.controllers.js");

const router = Router();

router.get("/", personajesControllers.getPersonajes);
router.post("/", personajesControllers.createPersonaje);

module.exports = router;
