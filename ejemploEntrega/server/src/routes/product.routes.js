const { Router } = require("express");
const productControllers = require("../controllers/product.controllers.js");

const router = Router();

router.get("/", productControllers.getAllProducts);
router.get("/:id", productControllers.getProductById);
router.post("/", productControllers.createProduct);
router.post("/many-products", productControllers.createManyProducts);
router.put("/:id", productControllers.updateProduct);
router.delete("/:id", productControllers.deleteProductById);

module.exports = router;
