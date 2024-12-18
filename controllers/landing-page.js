exports.getLandPage = (req, res, next) => {
  res.render("main_screen", {
    pageTitle: "project",
    path: "/",
  });
};

exports.getCommunity = (req, res, next) => {
  res.render("community", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getEduBot = (req, res, next) => {
  res.render("edubot", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getLogin = (req, res, next) => {
  res.render("login", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getSignup = (req, res, next) => {
  res.render("signup", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getGrade1 = (req, res, next) => {
  res.render("grade_1", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getGrade2 = (req, res, next) => {
  res.render("grade_2", {
    pageTitle: "project",
    path: "/landPage",
  });
};


exports.getGrade3 = (req, res, next) => {
  res.render("grade_3", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getGrade4 = (req, res, next) => {
  res.render("grade_4", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getSubject = (req, res, next) => {
  const subject = req.params.subject;
  console.log(`Rendering subject: ${subject}`);
  res.render(`subjects/${subject}`, {
    pageTitle: `${subject.replace("_", " ")}`,
    path: `/subjects/${subject}`,
  });
};

/* ML subject quizs */
exports.getMLQuiz = (req, res, next) => {
  res.render("quizs/quizs_ml", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getPQuiz = (req, res, next) => {
  res.render("quizs/quizs_probability", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getDMQuiz = (req, res, next) => {
  res.render("quizs/quizs_Discrete_Math", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getAAQuiz = (req, res, next) => {
  res.render("quizs/quizs_Algorithm_Analysis_Design", {
    pageTitle: "project",
    path: "/landPage",
  });
};







exports.getMLQTopic1 = (req, res, next) => {
  res.render("quizs/data_mining_process", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic2 = (req, res, next) => {
  res.render("quizs/data_search", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic3 = (req, res, next) => {
  res.render("quizs/tree_model", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic4 = (req, res, next) => {
  res.render("quizs/bayesian_model", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic5 = (req, res, next) => {
  res.render("quizs/ann", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic6 = (req, res, next) => {
  res.render("quizs/regression_analysis", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic7 = (req, res, next) => {
  res.render("quizs/ensemble_training", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic8 = (req, res, next) => {
  res.render("quizs/linear_regression", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic9 = (req, res, next) => {
  res.render("quizs/clustering", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic10 = (req, res, next) => {
  res.render("quizs/assosiation_analysis", {
    pageTitle: "project",
    path: "/landPage",
  });
};





exports.getPQTopic1 = (req, res, next) => {
  res.render("quizs/Fundamental_Concepts_Rules", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPQTopic2 = (req, res, next) => {
  res.render("quizs/RandomVariables_ProbabilityDistributions", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getPQTopic3 = (req, res, next) => {
  res.render("quizs/quizs/Functions_Random_Variables", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getPQTopic4 = (req, res, next) => {
  res.render("quizs/Mathematical_Expectation", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getPQTopic5 = (req, res, next) => {
  res.render("quizs/Discrete_Probability_Distributions", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getPQTopic6 = (req, res, next) => {
  res.render("quizs/Continuous _Probability_Distributions", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getPQTopic7 = (req, res, next) => {
  res.render("quizs/Moment_Generating_Functions", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getPQTopic8 = (req, res, next) => {
  res.render("quizs/Sampling_Distributions_Data_Descriptions", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getPQTopic9 = (req, res, next) => {
  res.render("quizs/Estimation", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getpQTopic10 = (req, res, next) => {
  res.render("quizs/Test_Hypothesis", {
    pageTitle: "project",
    path: "/landPage",
  });
};





exports.getDMQTopic1 = (req, res, next) => {
  res.render("quizs/Sets_Proofs", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getDMQTopic2 = (req, res, next) => {
  res.render("quizs/Formal_Logic", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getDMQTopic3 = (req, res, next) => {
  res.render("quizs/Relations", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getDMQTopic4 = (req, res, next) => {
  res.render("quizs/Functions", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getDMQTopic5 = (req, res, next) => {
  res.render("quizs/Algorithm_Analysis", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getDMQTopic6 = (req, res, next) => {
  res.render("quizs/Graphs", {
    pageTitle: "project",
    path: "/landPage",
  });
};






exports.getAAQTopic1 = (req, res, next) => {
  res.render("quizs/Overview_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getAAQTopic2 = (req, res, next) => {
  res.render("quizs/Sorting_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getAAQTopic3 = (req, res, next) => {
  res.render("quizs/Search_Trees", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getAAQTopic4 = (req, res, next) => {
  res.render("quizs/Hash_Tables", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getAAQTopic5 = (req, res, next) => {
  res.render("quizs/Greedy_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getAAQTopic6 = (req, res, next) => {
  res.render("quizs/Dynamic_Programming", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getAAQTopic7 = (req, res, next) => {
  res.render("quizs/Greedy_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getAAQTopic8 = (req, res, next) => {
  res.render("quizs/Amortized_Analysis", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getAAQTopic9 = (req, res, next) => {
  res.render("quizs/NP-Completeness", {
    pageTitle: "project",
    path: "/landPage",
  });
};




/* C subject quiz */
exports.getCQuiz = (req, res, next) => {
  res.render("quizs/quiz_c", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz1 = (req, res, next) => {
  res.render("quizs/intro_c", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz2 = (req, res, next) => {
  res.render("quizs/data_types", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz3 = (req, res, next) => {
  res.render("quizs/commands", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz4 = (req, res, next) => {
  res.render("quizs/control_statement", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz5 = (req, res, next) => {
  res.render("quizs/function", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz6 = (req, res, next) => {
  res.render("quizs/memory_class", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz7 = (req, res, next) => {
  res.render("quizs/array_string", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz8 = (req, res, next) => {
  res.render("quizs/string_processing", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz9 = (req, res, next) => {
  res.render("quizs/pointer", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz10 = (req, res, next) => {
  res.render("quizs/structure", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCQuiz11 = (req, res, next) => {
  res.render("quizs/file_io", {
    pageTitle: "project",
    path: "/landPage",
  });
};

/* Data Structure Quizzes */
exports.getDataQuiz = (req, res, next) => {
  res.render("quizs/quiz_data", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataQuiz1 = (req, res, next) => {
  res.render("quizs/advanced_cpp", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataQuiz2 = (req, res, next) => {
  res.render("quizs/array", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataQuiz3 = (req, res, next) => {
  res.render("quizs/stack_queue", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataQuiz4 = (req, res, next) => {
  res.render("quizs/inheritance", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataQuiz5 = (req, res, next) => {
  res.render("quizs/linked_list", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataQuiz6 = (req, res, next) => {
  res.render("quizs/tree", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataQuiz7 = (req, res, next) => {
  res.render("quizs/graph", {
    pageTitle: "project",
    path: "/landPage",
  });
};

/* ML subject flashcards  */
exports.getMLFlah = (req, res, next) => {
  res.render("flashcards/flash_ml", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic1 = (req, res, next) => {
  res.render("flashcards/data_mining", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic2 = (req, res, next) => {
  res.render("flashcards/data_search", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic3 = (req, res, next) => {
  res.render("flashcards/tree_model", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic4 = (req, res, next) => {
  res.render("flashcards/bayesian_model", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic5 = (req, res, next) => {
  res.render("flashcards/ann", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic6 = (req, res, next) => {
  res.render("flashcards/regression_analysis", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic7 = (req, res, next) => {
  res.render("flashcards/ensemble_training", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic8 = (req, res, next) => {
  res.render("flashcards/linear_regression", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic9 = (req, res, next) => {
  res.render("flashcards/clustering", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLFlahTopic10 = (req, res, next) => {
  res.render("flashcards/assosiation_analysis", {
    pageTitle: "project",
    path: "/landPage",
  });
};

/* C flashcard */
exports.getCFlash = (req, res, next) => {
  res.render("flashcards/flash_c", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic1 = (req, res, next) => {
  res.render("flashcards/intro_c", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic2 = (req, res, next) => {
  res.render("flashcards/data_types", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic3 = (req, res, next) => {
  res.render("flashcards/commands", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic4 = (req, res, next) => {
  res.render("flashcards/control_statement", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic5 = (req, res, next) => {
  res.render("flashcards/function", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic5 = (req, res, next) => {
  res.render("flashcards/function", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic6 = (req, res, next) => {
  res.render("flashcards/memory_class", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic7 = (req, res, next) => {
  res.render("flashcards/array_string", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic8 = (req, res, next) => {
  res.render("flashcards/string_processing", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic9 = (req, res, next) => {
  res.render("flashcards/pointer", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic10 = (req, res, next) => {
  res.render("flashcards/structure", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCFlashTopic11 = (req, res, next) => {
  res.render("flashcards/file_io", {
    pageTitle: "project",
    path: "/landPage",
  });
};

/* Data Structure Flashcards */
exports.getDataFlashTopic = (req, res, next) => {
  res.render("flashcards/flash_data", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataFlashTopic1 = (req, res, next) => {
  res.render("flashcards/advanced_cpp", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataFlashTopic2 = (req, res, next) => {
  res.render("flashcards/array", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataFlashTopic3 = (req, res, next) => {
  res.render("flashcards/stack_queue", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataFlashTopic4 = (req, res, next) => {
  res.render("flashcards/inheritance", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataFlashTopic5 = (req, res, next) => {
  res.render("flashcards/linked_list", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataFlashTopic6 = (req, res, next) => {
  res.render("flashcards/tree", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataFlashTopic7 = (req, res, next) => {
  res.render("flashcards/graph", {
    pageTitle: "project",
    path: "/landPage",
  });
};

/* Exam */
exports.getMLExam = (req, res, next) => {
  res.render("exam/ml", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getCExam = (req, res, next) => {
  res.render("exam/exam_c", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getDataExam = (req, res, next) => {
  res.render("exam/data_structure", {
    pageTitle: "project",
    path: "/landPage",
  });
};