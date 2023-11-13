const express = require("express");
const { getProducts, getIndividualProduct, purchaseProduct, updateProduct } = require("../controllers/productsController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// /api/products/
router.route("/").get(getProducts)
router.route("/:id").get(getIndividualProduct)
router.route("/purchase").post(protect, purchaseProduct)
// router.route("/purchase/:productId").post(purchaseProduct)
router.route("/update-stock").post(updateProduct)



module.exports = router