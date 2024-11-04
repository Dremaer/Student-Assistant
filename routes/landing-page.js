const path = require("path");

const express = require("express");

const router = express.Router();

const landPageController = require("../controllers/landing-page");

router.get("/", landPageController.getLandPage);

module.exports = router;
