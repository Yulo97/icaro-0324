const { Router } = require("express");
const personajesControllers = require("../controllers/personajes.controllers");

const router = Router();

router.get("/", personajesControllers.getPersonajes);
router.post("/", personajesControllers.addPersonaje);

module.exports = router;
