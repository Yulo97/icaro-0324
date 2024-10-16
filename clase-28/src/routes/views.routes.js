const { Router } = require("express");
const { viewLogin, viewPanel } = require("../controllers/views.controllers.js");
const { isAdmin } = require("../middlewares/validacion.js");

const router = Router();

router.get("/login", viewLogin);
router.post("/panel", isAdmin, viewPanel);

module.exports = router;
