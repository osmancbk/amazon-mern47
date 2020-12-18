const { check } = require("express-validator");
const checkEmail = check("userEmail", "Please enter a valid e-mail").isEmail();
const checkPassword = check(
  "userPassword",
  "Please enter a password with 6 and more chars"
).isLength({ min: 6 });
exports.emailPasswordValidation = [checkEmail, checkPassword];


