const Product = require('../models/product.module');

module.exports.createProduct = (req, res) => {
    // debemos obtener el cuerpo que envió el usuario y crear un nuevo producto
    res.json({msg: "You should receive the new product created"})
}