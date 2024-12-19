const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");
const { body } = require("express-validator");

const User = require("../models/users");

router.get("/signup", authController.getSignup);

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password")
      .matches(/^.{8,32}$/) //regex
      .withMessage("Password must be between 8 and 32 characters.") // Length check
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter.") // Lowercase check
      .matches(/\d/) //regex
      .withMessage("Password must contain at least one number.") // Number check
      .trim(),
  ],
  authController.postSignup
);

router.get("/login", authController.getLogin);

router.post("/login", authController.postLogin);

router.post("/logout", authController.postLogout);

module.exports = router;
