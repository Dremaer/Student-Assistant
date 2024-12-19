const bcrypt = require("bcrypt");
const User = require("../models/users");

const { validationResult } = require("express-validator");

exports.getLogin = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.status(200).render("login", {
    pageTitle: "Login",
    path: "/login",
    errorMessage: message,
  });
};

exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render("login", {
      path: "/login",
      pageTitle: "Login",
    });
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      req.flash("error", "Invalid email or password");
      res.redirect("/auth/login");
    }
    const bcryptPassword = await bcrypt.compare(password, user.password);
    if (bcryptPassword) {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    } else {
      req.flash("error", "Invalid email or password");
      res.redirect("/auth/login");
    }
  } catch (err) {
    console.log(err);
  }
};

// Logging out
exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};

exports.getSignup = (req, res, next) => {
  res.status(200).render("signup", {
    pageTitle: "signup",
  });
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render("signup", {
      pageTitle: "Signup",
    });
  }
  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = new User({
        email: email,
        password: hashedPw,
      });
      return user.save();
    })
    .then((result) => {
      res.redirect("/auth/login");
    })
    .catch((err) => {
      const error = new Error(err);
      error.statusCode = 500;
      throw error;
    });
};
