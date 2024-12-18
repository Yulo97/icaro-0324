const { Router } = require("express");
const productControllers = require("../controllers/product.controllers.js");

const router = Router();

router.get("/", productControllers.getAllProducts);
router.delete("/", productControllers.deleteProductById);

module.exports = router;
