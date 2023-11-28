const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const path = require('path');


connectDB()
const app = express();



//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/assets', express.static(path.join(__dirname, 'data', 'assets')));
app.use('/uploads/images/avatars', express.static(path.join(__dirname, 'public', 'images', 'avatars')));


app.use("/api/products", require("./routes/productsRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
