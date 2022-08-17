const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // la schema de un product
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;