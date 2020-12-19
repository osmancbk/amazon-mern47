const Product = require("../models/ProductModel")

const User = require("../models/UserModel");

exports.getProducts = async(req,res)=>{
    const products = await Product.find()
    // console.log("product-->",products)
    res.status(200).json({products});
}
exports.getDetails = async(req,res)=>{
    const product = await Product.findById({ _id: req.params.id })
    console.log("product-->",product)
    res.status(200).json({product});
}


