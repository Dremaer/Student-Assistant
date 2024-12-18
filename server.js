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

// Middleware configuration
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

// Attach the logged-in user to the request if available
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

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Route imports
const landPageRoutes = require("./routes/landing-page");
const auth = require("./routes/auth");

// Define routes
app.use("/", landPageRoutes);
app.use("/auth", auth);

// Connect to MongoDB and start the server
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => console.log("Server is running on port 3000"));
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));