const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,

} = require("../controllers/productController")


// CRUD
router.get("/products", getProducts); // -> READ
router.post("/products", createProduct); // -> CREATE
router.get("/products/:productId", getProductById); // -> READ
router.put("/products/:productId", updateProductById); // -> UPDATE
router.delete("/products/:productId", deleteProductById); // -> DELETE

module.exports = router;
