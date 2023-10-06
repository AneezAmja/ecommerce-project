const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: Number,
    imageURL: String,
    stockQuantity: Number,
    productDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductDetail',
    },
    createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true
}) 


const Products = mongoose.model('Products', productsSchema);

module.exports = Products;