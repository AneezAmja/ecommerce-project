const express = require("express");
const { getProducts, getIndividualProduct, purchaseProducts, updateProduct } = require("../controllers/productsController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// /api/products/
router.get("/", getProducts);
router.get("/:id", getIndividualProduct);
router.post("/purchase", protect, purchaseProducts);
router.post("/update-stock", purchaseProducts);


module.exports = router