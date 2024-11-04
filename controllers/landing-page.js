exports.getLandPage = (req, res, next) => {
  res.render("main_screen", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body;

  if (username === "yourUsername" && password === "yourPassword") {
    res.redirect("/dashboard"); 
  } else {
    res.render("main_screen", {
      pageTitle: "Student Assistant",
      path: "/",
      errorMessage: "Invalid username or password", 
    });
  }
};