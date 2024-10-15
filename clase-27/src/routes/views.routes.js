const { Router } = require("express");
const viewsControllers = require("../controllers/views.controllers.js");

const router = Router();

router.get("/login", viewsControllers.renderLogin);
router.post("/saludo", viewsControllers.renderSaludo);

module.exports = router;
