const express = require("express");

const router = express.Router();

const landPageController = require("../controllers/landing-page");

router.get("/", landPageController.getLandPage);

router.get("/community", landPageController.getCommunity);

router.get("/edubot", landPageController.getEduBot);

router.get("/grade_1", landPageController.getGrade1);

router.get("/grade_2", landPageController.getGrade2);

router.get("/grade_3", landPageController.getGrade3);

router.get("/grade_4", landPageController.getGrade4);

router.get("/subjects/:subject", landPageController.getSubject);

/*Subjects's quizs*/
router.get("/quizs/quizs_ml", landPageController.getMLQuiz);

router.get("/quizs/data_mining_process", landPageController.getMLQTopic1);

router.get("/quizs/data_search", landPageController.getMLQTopic2);

router.get("/quizs/tree_model", landPageController.getMLQTopic3);

router.get("/quizs/bayesian_model", landPageController.getMLQTopic4);

router.get("/quizs/ann", landPageController.getMLQTopic5);

router.get("/quizs/regression_analysis", landPageController.getMLQTopic6);

router.get("/quizs/ensemble_training", landPageController.getMLQTopic7);

router.get("/quizs/linear_regression", landPageController.getMLQTopic8);

router.get("/quizs/clustering", landPageController.getMLQTopic9);

router.get("/quizs/assosiation_analysis", landPageController.getMLQTopic10);

/* Subjects's flashcards */
router.get("/flashcards/flash_ml", landPageController.getMLFlah);

router.get("/flashcards/data_mining", landPageController.getMLFlahTopic1);

router.get("/flashcards/data_search", landPageController.getMLFlahTopic2);

router.get("/flashcards/tree_model", landPageController.getMLFlahTopic3);

router.get("/flashcards/bayesian_model", landPageController.getMLFlahTopic4);

router.get("/flashcards/ann", landPageController.getMLFlahTopic5);

router.get("/flashcards/regression_analysis", landPageController.getMLFlahTopic6);

router.get("/flashcards/ensemble_training", landPageController.getMLFlahTopic7);

router.get("/flashcards/linear_regression", landPageController.getMLFlahTopic8);

router.get("/flashcards/clustering", landPageController.getMLFlahTopic9);

router.get("/flashcards/assosiation_analysis", landPageController.getMLFlahTopic10);

/* Subjects's exam */
router.get("/exam/ml", landPageController.getMLExam);

module.exports = router;


