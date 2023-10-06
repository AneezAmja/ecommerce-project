// Allows us to use errorHandler
const asyncHandler = require("express-async-handler");
const Products = require("../models/Products");
const ProductDetail = require("../models/ProductDetail");
const mongoose = require("mongoose");

/**************************************************************
 *                                                             *
 *               productController                             *
 *                                                             *
 * This file handles various operations related to product     *
 * data. It is responsible for tasks such as fetching product  *
 * listings, retrieving product details, and managing product  *
 * inventory.                                                  *
 *                                                             *
 **************************************************************/

// @desc   Get products
// @route  GET /api/products
// @access Private
const getProducts = asyncHandler(async (req, res) => {
  // console.log(req)

  //READ
  const products = await Products.find({ stockQuantity: { $gt: 0 } }); //Finding products with stock greater than 0

  if (!products) {
    res.status(400);
    throw new Error("No products found");
  }

  // console.log(products)
  res.status(200).json(products);
});

// @desc   Get products
// @route  GET /api/products/:id
// @access Private
const getIndividualProduct = async (req, res) => {
  const productId = req.params.id;

  //find product
  const individualProduct = await Products.findById(productId).populate(
    "productDetail"
  ); // Fetch the related ProductDetail document

  if (!individualProduct) {
    res.status(400);
    throw new Error("Product not found");
  }

  res.status(200).json(individualProduct);
};

// @desc   Make purchase
// @route  POST /api/products/purchase
// TODO: @route  POST /api/products/purchase/:purchaseId
// @access Private
const purchaseProduct = async (req, res) => {
  const { productId, quantity } = req.body;

  const session = await mongoose.startSession();

  try {
    await session.withTransaction(async () => {
      const product = await Products.findById(productId).session(session);
      const productDetail = await ProductDetail.findById(
        product.productDetail
      ).session(session);

      if (!product || !productDetail) {
        res.status(404);
        throw new Error("Product not found");
      }

      if (product.stockQuantity <= 0 || productDetail.stockQuantity <= 0) {
        res.status(400);
        throw new Error("Empty stock!");
      }

      product.stockQuantity -= Number(quantity);
      productDetail.stockQuantity -= Number(quantity);
      await product.save();
      await productDetail.save();
      res.status(200).json(product);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  } finally {
    session.endSession();
  }
};

// @desc   Update stock
// @route  POST /api/products/update-stock
// @access Private
const updateProduct = async (req, res) => {
  const { productId, quantity } = req.body;

  const session = await mongoose.startSession();

  try {
    await session.withTransaction(async () => {
      const product = await Products.findById(productId).session(session);
      const productDetail = await ProductDetail.findById(
        product.productDetail
      ).session(session);

      if (!product || !productDetail) {
        res.status(404);
        throw new Error("Product not found");
      }

      product.stockQuantity += Number(quantity);
      productDetail.stockQuantity += Number(quantity);
      await product.save();
      await productDetail.save();
      res.status(200).json(product);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  } finally {
    session.endSession();
  }
};

module.exports = {
  getProducts,
  getIndividualProduct,
  purchaseProduct,
  updateProduct,
};
