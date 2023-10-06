const mongoose = require("mongoose");

const productDetailSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: Number,
    description: String,
    imageURL: String,
    stockQuantity: Number,
    createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true
}) 


const ProductDetail = mongoose.model('ProductDetail', productDetailSchema);

module.exports = ProductDetail;