
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")



exports.userRegister = async (req, res) => {
    const { userFirstName, userLastName, userEmail, userPassword } = req.body;
  
    // Field Validation
    const validationErr = validationResult(req);
    console.log("validationErr",validationErr)
    if (validationErr.errors.length > 0) {
      return res.status(400).json({ errors: validationErr.array() });
    }
  
    // User exist check
    const userData = await User.findOne({ userEmail });
    if (userData) {
      return res
        .status(400)
        .json({ errors: [{ message: "User already exists!!" }] });
    }
  
    // Password hash
     const salt = await bcrypt.genSalt(10);
     const newPassword = await bcrypt.hash(userPassword, salt);
  
    // Save User
    const user = new User({
        userFirstName,
        userLastName,
        userEmail,
        userPassword:newPassword,
    });
    await user.save();
  
    //TODO: Error handling for saving
    res.send("Register Completed.");
  };
  

exports.userLogin = async (req, res) => {
        const { userEmail, userPassword } = req.body;
      
        // Field Validation
        const validationErr = validationResult(req);
        if (validationErr.errors.length > 0) {
          return res.status(400).json({ errors: validationErr.array() });
        }
      
        // User exist check
        const userData = await User.findOne({ userEmail });
        if (!userData) {
          return res
            .status(400)
            .json({ errors: [{ message: "User doesn't exists!!" }] });
        }
      
        // Password compare
        const isPasswordMatch = await bcrypt.compare(userPassword, userData.userPassword);

        if (!isPasswordMatch) {
          return res
            .status(400)
            .json({ errors: [{ message: "Invalid credentials" }] });
        }
      
        // JSON WEB TOKEN - JWT
        jwt.sign(
          { userData },
          process.env.JWT_SECRET_KEY,
          { expiresIn: 3600 },
          (err, token) => {
            console.log(token)  
            if (err) {
              return res.status(400).json({ errors: [{ message: "Unknown Error" }] });
            }
            return res.status(202).json({ token });
          }
        );
        // res.send(token)
      };
    



exports.getProfile= async(req,res)=>{
    res.send(req.decodedUser);
}
