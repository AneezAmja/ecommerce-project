const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    products:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Products
    },
    totalAmmount: Number,
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
