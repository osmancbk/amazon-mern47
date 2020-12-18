
const express = require("express");
const router = express.Router();
const userRouter = require("./UserRouter");
const productsRouter = require("./ProductsRouter");

router.use("/user",userRouter); 
router.use("/product", productsRouter);


module.exports = router;

