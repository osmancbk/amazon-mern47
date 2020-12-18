const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
    checkoutId: {
        type: String,
    },
    checkoutProductId: {
        type: Array,
       
    },
    checkoutUserId: {
        type: String,
    },
   
});

module.exports = Checkout = mongoose.model("checkout", CheckoutSchema);
