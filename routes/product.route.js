const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

const router = express.Router();

// Routes
router.get("/", getProducts); // Get all products
router.get("/:id", getProduct); // Get product by ID
router.post("/", createProduct); // Create product
router.put("/:id", updateProduct); // Update product
router.delete("/:id", deleteProduct); // Delete product

module.exports = router;
