const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductDetail",
          required: true,
        },
        productName: {
          type: mongoose.Schema.Types.String,
          ref: "ProductDetail",
          required: true,
        },
        productImage: {
          type: mongoose.Schema.Types.String,
          ref: "ProductDetail",
          required: true,
        },
        productPrice: {
          type: mongoose.Schema.Types.Number,
          ref: "ProductDetail",
          required: true,
        },
        quantity: { type: Number, default: 1 },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
