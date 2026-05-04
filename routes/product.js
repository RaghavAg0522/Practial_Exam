const router = require("express").Router();
const { createProduct, getProducts } = require("../controllers/productController");
const auth = require("../middleware/auth");

router.post("/", auth, createProduct);
router.get("/", getProducts);

module.exports = router;