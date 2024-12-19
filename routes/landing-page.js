const express = require("express");

const router = express.Router();

const landPageController = require("../controllers/landing-page");

router.get("/", landPageController.getLandPage);

router.get("/community", landPageController.getCommunity);

router.get("/edubot", landPageController.getEduBot);

router.get("/login", landPageController.getLogin);

router.get("/signup", landPageController.getSignup);

router.get("/grade_1", landPageController.getGrade1);

router.get("/grade_2", landPageController.getGrade2);

router.get("/grade_3", landPageController.getGrade3);

router.get("/grade_4", landPageController.getGrade4);

router.get("/subjects/:subject", landPageController.getSubject);

/* ML subject quizs*/
router.get("/quizs/quizs_ml", landPageController.getMLQuiz);

router.get("/quizs/quizs_probability", landPageController.getPQuiz);

router.get("/quizs/quizs_Discrete_Math", landPageController.getDMQuiz);

router.get("/quizs/quizs_Algorithm_Analysis_Design", landPageController.getAAQuiz);


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


router.get("/quizs/Fundamental_Concepts_Rules", landPageController.getPQTopic1);

router.get("/quizs/RandomVariables_ProbabilityDistributions", landPageController.getPQTopic2);

router.get("/quizs/Functions_Random_Variables", landPageController.getPQTopic3);

router.get("/quizs/Mathematical_Expectation", landPageController.getPQTopic4);

router.get("/quizs/Discrete_Probability_Distributions", landPageController.getPQTopic5);

router.get("/quizs/Continuous _Probability_Distributions", landPageController.getPQTopic6);

router.get("/quizs/Moment_Generating_Functions", landPageController.getPQTopic7);

router.get("/quizs/Sampling_Distributions_Data_Descriptions", landPageController.getPQTopic8);

router.get("/quizs/Estimation", landPageController.getPQTopic9);

router.get("/quizs/Test_Hypothesis", landPageController.getPQTopic10);





router.get("/quizs/Sets_Proofs", landPageController.getDMQTopic1);

router.get("/quizs/Formal_Logic", landPageController.getDMQTopic2);

router.get("/quizs/Relations", landPageController.getDMQTopic3);

router.get("/quizs/Functions", landPageController.getDMQTopic4);

router.get("/quizs/Algorithm_Analysis", landPageController.getDMQTopic5);

router.get("/quizs/Graphs", landPageController.getDMQTopic6);






router.get("/quizs/Overview_Algorithms", landPageController.getAAQTopic1);

router.get("/quizs/Sorting_Algorithms", landPageController.getAAQTopic2);

router.get("/quizs/Search_Trees", landPageController.getAAQTopic3);

router.get("/quizs/Hash_Tables", landPageController.getAAQTopic4);

router.get("/quizs/Greedy_Algorithms", landPageController.getAAQTopic5);

router.get("/quizs/Dynamic_Programming", landPageController.getAAQTopic6);

router.get("/quizs/Graph_Algorithms", landPageController.getAAQTopic7);

router.get("/quizs/Amortized_Analysis", landPageController.getAAQTopic8);

router.get("/quizs/NP-Completeness", landPageController.getAAQTopic9);




/* C subject quiz */

router.get("/quizs/quiz_c", landPageController.getCQuiz);

router.get("/quizs/intro_c", landPageController.getCQuiz1);

router.get("/quizs/data_types", landPageController.getCQuiz2);

router.get("/quizs/commands", landPageController.getCQuiz3);

router.get("/quizs/control_statement", landPageController.getCQuiz4);

router.get("/quizs/function", landPageController.getCQuiz5);

router.get("/quizs/memory_class", landPageController.getCQuiz6);

router.get("/quizs/array_string", landPageController.getCQuiz7);

router.get("/quizs/string_processing", landPageController.getCQuiz8);

router.get("/quizs/pointer", landPageController.getCQuiz9);

router.get("/quizs/structure", landPageController.getCQuiz10);

router.get("/quizs/file_io", landPageController.getCQuiz11);

/* Data Structure Quizzes */
router.get("/quizs/quiz_data", landPageController.getDataQuiz);

router.get("/quizs/advanced_cpp", landPageController.getDataQuiz1);

router.get("/quizs/array", landPageController.getDataQuiz2);

router.get("/quizs/stack_queue", landPageController.getDataQuiz3);

router.get("/quizs/inheritance", landPageController.getDataQuiz4);

router.get("/quizs/linked_list", landPageController.getDataQuiz5);

router.get("/quizs/tree", landPageController.getDataQuiz6);

router.get("/quizs/graph", landPageController.getDataQuiz7);

/* OOP quizzes */
router.get("/quizs/quiz_oop", landPageController.getOOPQuiz);

router.get("/quizs/intro_kotlin", landPageController.getOOPQuiz1);

router.get("/quizs/logic_construct", landPageController.getOOPQuiz2);

router.get("/quizs/class_object", landPageController.getOOPQuiz3);

router.get("/quizs/functional_prog", landPageController.getOOPQuiz4);

router.get("/quizs/class_types", landPageController.getOOPQuiz5);

router.get("/quizs/collection_types", landPageController.getOOPQuiz6);

router.get("/quizs/high_classes", landPageController.getOOPQuiz7);

router.get("/quizs/generics", landPageController.getOOPQuiz8);

/* ML subject flashcards */

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

/* C flashcards */
router.get("/flashcards/flash_c", landPageController.getCFlash);

router.get("/flashcards/intro_c", landPageController.getCFlashTopic1);

router.get("/flashcards/data_types", landPageController.getCFlashTopic2);

router.get("/flashcards/commands", landPageController.getCFlashTopic3);

router.get("/flashcards/control_statement", landPageController.getCFlashTopic4);

router.get("/flashcards/function", landPageController.getCFlashTopic5);

router.get("/flashcards/memory_class", landPageController.getCFlashTopic6);

router.get("/flashcards/array_string", landPageController.getCFlashTopic7);

router.get("/flashcards/string_processing", landPageController.getCFlashTopic8);

router.get("/flashcards/pointer", landPageController.getCFlashTopic9);

router.get("/flashcards/structure", landPageController.getCFlashTopic10);

router.get("/flashcards/file_io", landPageController.getCFlashTopic11);

/* Data Structure flashcard */
router.get("/flashcards/flash_data", landPageController.getDataFlashTopic);

router.get("/flashcards/advanced_cpp", landPageController.getDataFlashTopic1);

router.get("/flashcards/array", landPageController.getDataFlashTopic2);

router.get("/flashcards/stack_queue", landPageController.getDataFlashTopic3);

router.get("/flashcards/inheritance", landPageController.getDataFlashTopic4);

router.get("/flashcards/linked_list", landPageController.getDataFlashTopic5);

router.get("/flashcards/tree", landPageController.getDataFlashTopic6);

router.get("/flashcards/graph", landPageController.getDataFlashTopic7);

/* OOP flashcard */
router.get("/flashcards/flash_oop", landPageController.getOOPFlashTopic);

router.get("/flashcards/intro_kotlin", landPageController.getOOPFlashTopic1);

router.get("/flashcards/logic_construct", landPageController.getOOPFlashTopic2);

router.get("/flashcards/class_object", landPageController.getOOPFlashTopic3);

router.get("/flashcards/functional_prog", landPageController.getOOPFlashTopic4);

router.get("/flashcards/class_types", landPageController.getOOPFlashTopic5);

router.get("/flashcards/collection_types", landPageController.getOOPFlashTopic6);

router.get("/flashcards/high_classes", landPageController.getOOPFlashTopic7);

router.get("/flashcards/generics", landPageController.getOOPFlashTopic8);

/* Subjects's exam */

router.get("/exam/ml", landPageController.getMLExam);

router.get("/exam/exam_c", landPageController.getCExam);

router.get("/exam/data_structure", landPageController.getDataExam);

router.get("/exam/Discrete_Math", landPageController.getDMExam);

router.get("/exam/Algorithm_Analysis_Design", landPageController.getAAExam);

router.get("/exam/probability", landPageController.getPExam);

router.get("/exam/exam_oop", landPageController.getOOPExam);

module.exports = router;


