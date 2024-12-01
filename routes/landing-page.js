const express = require("express");

const router = express.Router();

const landPageController = require("../controllers/landing-page");

router.get("/", landPageController.getLandPage);

router.get("/community", landPageController.getCommunity);

router.get("/edubot", landPageController.getEduBot);

router.get("/quizs", landPageController.getMLQuiz);

router.get("/data_mining_process", landPageController.getMLQTopic1);

router.get("/grade_1", landPageController.getGrade1);

router.get("/grade_2", landPageController.getGrade2);

router.get("/grade_3", landPageController.getGrade3);

router.get("/grade_4", landPageController.getGrade4);

router.get("/subjects/:subject", landPageController.getSubject);

module.exports = router;


