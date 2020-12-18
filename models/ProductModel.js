const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema({
    productTitle: {
        type: String,
    },
    productName: {
        type: String,
        required: true,//
    },
    productInfo: {
        type: String,
    },
    productPrice: {
        type: Number,
        required: true,//
    },
    productRank: {
        type: String,
    },
    productImage: {
        type: String,
    },
    productCategory: {
        type: String,
    },
});

module.exports = Product = mongoose.model("product", ProductSchema);
