// Allows us to use errorHandler
const asyncHandler = require("express-async-handler");
const Cart = require("../models/Cart");
const ProductDetail = require("../models/ProductDetail");
const Products = require("../models/Products");
const mongoose = require("mongoose");

/****************************************************************
 *                                                              *
 *              cartController                                  *
 *                                                              *
 *   This controller manages the user's shopping cart within    *
 *   an e-commerce application. It provides functionality for   *
 *   retrieving the user's cart, adding items to the cart,      *
 *   removing items from the cart, and updating item quantities *
 *   in the cart.                                               *
 *                                                              *
 ****************************************************************/

// @desc   Get cart
// @route  GET /api/cart
// @access Public
const getCart = asyncHandler(async (req, res) => {

  // const cart = await Cart.find();

  const userId = req.user.id; 

  const cart = await Cart.find({ user: userId });

  if (!cart) {
    res.status(400);
    throw new Error("Error retrieving cart");
  }

  res.status(200).json(cart);
});

const addToCart = asyncHandler(async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Products.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const userId = req.user.id;

    let cartItem = await Cart.findOne({ user: userId });

    if (!cartItem) {
      cartItem = new Cart({
        user: userId,
        items: [],
      });
    }

    const existingItem = cartItem.items.find(
      (item) => item.productId.toString() === product._id.toString()
    );

    // Calculate total quantity including the current request
    const totalQuantity = (existingItem ? existingItem.quantity : 0) + Number(quantity);

    if (totalQuantity > product.stockQuantity) {
      return res.status(400).json({ message: "Total quantity exceeds stock" });
    }

    if (existingItem) {
      existingItem.quantity += Number(quantity);
    } else {
      // If the product doesn't exist, add a new item
      cartItem.items.push({
        productId: product._id,
        productName: product.name,
        productImage: product.imageURL,
        productPrice: product.price,
        quantity,
      });
    }

    await cartItem.save();

    res.status(200).json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});


// @desc   Remove from cart
// @route  POST /api/removeFromCart
// @access Public
const removeFromCart = asyncHandler(async (req, res) => {
  try {
    const { productId } = req.body;

    // Find the product by its _id
    const product = await Products.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cartItem = await Cart.findOne({ 'items.productId': product._id });

    if (cartItem) {
      // Find the index of the item with the matching productId in cartItem
      const itemIndex = cartItem.items.findIndex((item) => item.productId.equals(product._id));

      if (itemIndex !== -1) {
        // Calculate the quantity to subtract (e.g., the entire quantity of the item)
        const quantityToSubtract = cartItem.items[itemIndex].quantity;

        if (product.stockQuantity >= quantityToSubtract) {
          // Subtract the quantity from the cart item
          cartItem.items[itemIndex].quantity -= quantityToSubtract;

          if (cartItem.items[itemIndex].quantity <= 0) {
            // If the item's quantity becomes 0 or negative, remove it from the items array
            cartItem.items.pull({ _id: cartItem.items[itemIndex]._id });

            // Update the cartItem's quantity
            cartItem.quantity -= quantityToSubtract;

            // Save the updated cartItem
            await cartItem.save();
          } else {
            // Save the updated cartItem if the item's quantity is still positive
            await cartItem.save();
          }
        } else {
          return res.status(400).json({ message: "Insufficient stock" });
        }
      } else {
        // Handle the case where the item is not in the cart
        return res.status(400).json({ message: "Item not in cart" });
      }

      res.status(200).json({ message: "Item removed from cart" });
    } else {
      // Handle the case where the cartItem is not found
      return res.status(400).json({ message: "Cart item not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
};
