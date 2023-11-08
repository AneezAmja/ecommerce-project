const express = require("express");
const { getCart, addToCart, removeFromCart,updatingCartSingle  } = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// /api/cart/
router.get("/", protect, getCart)
router.post("/addToCart", protect, addToCart);
router.post("/removeFromCart", protect, removeFromCart);
router.put("/updatingCartSingle", protect, updatingCartSingle);




module.exports = router