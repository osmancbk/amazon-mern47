const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    userFirstName: {
        type: String,
        required: true,
    },
    userLastName: {
        type: String,
        required: false
    },
    userEmail: {
        type: String,
        required: false,
        uniqe: true
    },
    userPassword: {
        type: String,
        required: false,
    },
    registerDate: {
        type: Date,
        default: Date.now,
    },
    checkoutList:  {
        type:Array
    }});

// const User = mongoose.model('user', UserSchema)
// module.exports = User
module.exports = User = mongoose.model('user', UserSchema)

/*
basket: [
    {
      productId: Number,
      quantity: Number,
      name: String,
      price: Number
    }
]

*/