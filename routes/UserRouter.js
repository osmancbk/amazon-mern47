const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const validations = require("../middleWare/validationMW")
const auth = require("../middleWare/jwt")
const CheckoutController = require("../controllers/CheckoutController")

//route=> /user

router.post("/register",validations.emailPasswordValidation,UserController.userRegister);

router.post("/login",validations.emailPasswordValidation,UserController.userLogin);

router.get("/profile",auth,UserController.getProfile)

router.post("/addProduct/:id",auth, CheckoutController.addProduct);

router.get("/checkout/",auth, CheckoutController.getCheckoutList);

router.post('/deleteProduct/:id',auth, CheckoutController.deleteProduct);

module.exports = router;
