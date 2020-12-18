const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

//baseurl=> /product

router.get("/homepage",ProductController.getProducts);

router.get("/detail/:id",ProductController.getDetails);







module.exports = router;