const mongoose = require('mongoose')
const {productDetails, products} = require('../data/data.js');
const Products = require('../models/Products.js')
const ProductDetail = require('../models/ProductDetail.js')

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        // Inserted fake data
        // await ProductDetail.insertMany(productDetails)
        // await Products.insertMany(products)

        console.log(`db connected ${conn.connection.host}...`)
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB