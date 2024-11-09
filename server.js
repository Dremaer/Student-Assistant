const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const mongodbBlog = require("connect-mongodb-session")(session);
const flash = require("connect-flash");
const User = require("./models/users");

const app = express();

const MONGODB_URI = "mongodb+srv://jt1402:12345@ferghana.by4zc.mongodb.net/";
const blog = new mongodbBlog({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "as312zxvds@!@$!!@sadsa",
    resave: false,
    saveUninitialized: false,
    store: blog,
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.set("view engine", "ejs");
app.set("views", "views");

const landPageRoutes = require("./routes/landing-page");
const authPageRoutes = require("./routes/auth");


app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", landPageRoutes);
app.use("/auth", authPageRoutes);

app.get("/community", (req, res) => {
  res.render("community"); 
});
app.get('/main_screen', (req, res) => {
  res.render('main_screen'); 
});
app.get('/edubot', (req, res) => {
  res.render('edubot'); 
});
app.get('/auth', (req, res) => {
  res.render('auth'); 
});
app.get('/quizzes', (req, res) => {
  res.render('quizzes');
});
app.get('/quizzes_subject', (req, res) => {
  res.render('quizzes_subject');
})


mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000, () => console.log("Server is running on port 3000"));
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));
