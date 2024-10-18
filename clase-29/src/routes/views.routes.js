const { Router } = require("express");
const viewsControllers = require("../controllers/views.controllers.js");
const { autenticacion, isAdmin } = require("../middlewares/userValidations.js");

const router = Router();

router.get("/login", viewsControllers.renderLogin);
router.get("/", autenticacion, viewsControllers.renderIndex);
router.get("/admin", [autenticacion, isAdmin], viewsControllers.renderAdmin);

module.exports = router;
