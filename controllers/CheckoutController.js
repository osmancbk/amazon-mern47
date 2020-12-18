var jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const { validationResult } = require('express-validator');
const Product = require('../models/ProductModel');

exports.addProduct = async (req, res) => {

    const user = await User.findById({ _id: req.decodedUser._id })
    user.checkoutList.push(req.params.id);
    console.log(user);
    res.send(user);

    try {
        // validation
        const validationErr = validationResult(req);
        if (validationErr.errors.length > 0) {
            return res.status(400).json({ errors: validationErr.array() });
        }

        //update
        const updatedCategory = await User.findOneAndUpdate(
            { _id: user.id },
            {
                checkoutList: user.checkoutList,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        // res.status(200).send('Category updated ')
        res.status(200).json(updatedCategory);

    } catch (err) {
        return res.status(500).json({ errors: [{ message: err.message }] });
    }

}

exports.deleteProduct = async (req, res) => {
    const user = await User.findById({ _id: req.decodedUser._id });

    const index = user.checkoutList.indexOf(req.params.id);
    if (index !== -1)
        user.checkoutList.splice(index, 1);


    try {
        // validation
        const validationErr = validationResult(req);
        if (validationErr.errors.length > 0) {
            return res.status(400).json({ errors: validationErr.array() });
        }

        //update
        const updatedCategory = await User.findOneAndUpdate(
            { _id: user.id },
            {
                checkoutList: user.checkoutList,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        // res.status(200).send('Category updated ')
        res.status(200).json(updatedCategory);

    } catch (err) {
        return res.status(500).json({ errors: [{ message: err.message }] });
    }



    console.log(user);
    res.send(user);

}
exports.getCheckoutList = async (req, res) => {
    const checkoutList = [];
    const user = await User.findById({ _id: req.decodedUser._id });
    for (let i = 0; i < user.checkoutList.length; i++) {

        try {
            const checkout = await Product.findById({ _id: user.checkoutList[i] });
            checkoutList.push(checkout);

        }
        catch (err) {
            return res.status(500).json({ errors: [{ message: err.message }] });
        }
        //res.send(checkout);
    }
    res.status(200).json(checkoutList);
}