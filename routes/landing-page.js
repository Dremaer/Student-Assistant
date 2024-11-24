const path = require("path");

const express = require("express");

const router = express.Router();

const landPageController = require("../controllers/landing-page");

router.get("/", landPageController.getLandPage);

router.get("/community", landPageController.getCommunity);

router.get("/edubot", landPageController.getEduBot);

router.get("/grade_1", landPageController.getGrade1);

router.get("/discrete_math", landPageController.getDiscreteMaths);

router.get("/programming", landPageController.getProgramming);

router.get("/grade_2", landPageController.getGrade2);

router.get("/data_structure", landPageController.getDataStructure);

router.get("/oop", landPageController.getOOP);

router.get("/probability", landPageController.getProbability);

router.get("/algorithm", landPageController.getAlgorithm);

router.get("/grade_3", landPageController.getGrade3);

router.get("/machine_learning", landPageController.getML);

router.get("/grade_4", landPageController.getGrade4);

router.get("/computer_vision", landPageController.getCV);

module.exports = router;
