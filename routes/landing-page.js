const path = require("path");

const express = require("express");

const router = express.Router();

const landPageController = require("../controllers/landing-page");

router.get("/", landPageController.getLandPage);

router.get("/community", landPageController.getCommunity);

router.get("/quiz", landPageController.getQuiz);

router.get("/quiz1", landPageController.getQuiz1);

router.get("/quizzes", landPageController.getQuizzes);

router.get("/quizzes_subject", landPageController.getQuizzesSubject);

router.get("/quiz_template", landPageController.getQuizTemplate);

router.get("/edubot", landPageController.getEduBot);


module.exports = router;
