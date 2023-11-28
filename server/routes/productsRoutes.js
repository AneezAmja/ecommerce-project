const express = require("express");
const { getProducts, getIndividualProduct, purchaseProducts, updateProduct } = require("../controllers/productsController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { protect } = require("../middleware/authMiddleware");

// /api/products/
router.route("/").get(getProducts)
router.route("/:id").get(getIndividualProduct)
// router.route("/purchase").post(purchaseProducts)
router.post("/purchase", protect, purchaseProducts);

// router.route("/purchase/:productId").post(purchaseProduct)
router.route("/update-stock").post(updateProduct)



module.exports = router