exports.getLandPage = (req, res, next) => {
  res.render("main_screen", {
    pageTitle: "project",
    path: "/",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCommunity = (req, res, next) => {
  res.render("community", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getNews = (req, res, next) => {
  res.render("news", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getLogin = (req, res, next) => {
  res.render("login", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,

  });
};

exports.getSignup = (req, res, next) => {
  res.render("signup", {
    pageTitle: "project",
    isAuthenticated: req.session.isLoggedIn,
    path: "/landPage",
  });
};

exports.getGrade1 = (req, res, next) => {
  res.render("grade_1", {
    pageTitle: "project",
    isAuthenticated: req.session.isLoggedIn,
    path: "/landPage",
  });
};

exports.getGrade2 = (req, res, next) => {
  res.render("grade_2", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,

  });
};


exports.getGrade3 = (req, res, next) => {
  res.render("grade_3", {
    pageTitle: "project",
    isAuthenticated: req.session.isLoggedIn,
    path: "/landPage",
  });
};

exports.getGrade4 = (req, res, next) => {
  res.render("grade_4", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getSubject = (req, res, next) => {
  const subject = req.params.subject;
  console.log(`Rendering subject: ${subject}`);
  res.render(`subjects/${subject}`, {
    pageTitle: `${subject.replace("_", " ")}`,
    path: `/subjects/${subject}`,
    isAuthenticated: req.session.isLoggedIn,
  });
};

/* ML subject quizs */
exports.getMLQuiz = (req, res, next) => {
  res.render("quizs/quizs_ml", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPQuiz = (req, res, next) => {
  res.render("quizs/quizs_probability", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getDMQuiz = (req, res, next) => {
  res.render("quizs/quizs_Discrete_Math", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getAAQuiz = (req, res, next) => {
  res.render("quizs/quizs_Algorithm_Analysis_Design", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};







exports.getMLQTopic1 = (req, res, next) => {
  res.render("quizs/data_mining_process", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLQTopic2 = (req, res, next) => {
  res.render("quizs/data_search", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLQTopic3 = (req, res, next) => {
  res.render("quizs/tree_model", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLQTopic4 = (req, res, next) => {
  res.render("quizs/bayesian_model", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLQTopic5 = (req, res, next) => {
  res.render("quizs/ann", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLQTopic6 = (req, res, next) => {
  res.render("quizs/regression_analysis", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLQTopic7 = (req, res, next) => {
  res.render("quizs/ensemble_training", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLQTopic8 = (req, res, next) => {
  res.render("quizs/linear_regression", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLQTopic9 = (req, res, next) => {
  res.render("quizs/clustering", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLQTopic10 = (req, res, next) => {
  res.render("quizs/assosiation_analysis", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};





exports.getPQTopic1 = (req, res, next) => {
  res.render("quizs/Fundamental_Concepts_Rules", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getPQTopic2 = (req, res, next) => {
  res.render("quizs/RandomVariables_ProbabilityDistributions", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPQTopic3 = (req, res, next) => {
  res.render("quizs/quizs/Functions_Random_Variables", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPQTopic4 = (req, res, next) => {
  res.render("quizs/Mathematical_Expectation", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPQTopic5 = (req, res, next) => {
  res.render("quizs/Discrete_Probability_Distributions", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPQTopic6 = (req, res, next) => {
  res.render("quizs/Continuous _Probability_Distributions", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPQTopic7 = (req, res, next) => {
  res.render("quizs/Moment_Generating_Functions", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPQTopic8 = (req, res, next) => {
  res.render("quizs/Sampling_Distributions_Data_Descriptions", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPQTopic9 = (req, res, next) => {
  res.render("quizs/Estimation", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPQTopic10 = (req, res, next) => {
  res.render("quizs/Test_Hypothesis", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};





exports.getDMQTopic1 = (req, res, next) => {
  res.render("quizs/Sets_Proofs", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getDMQTopic2 = (req, res, next) => {
  res.render("quizs/Formal_Logic", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getDMQTopic3 = (req, res, next) => {
  res.render("quizs/Relations", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getDMQTopic4 = (req, res, next) => {
  res.render("quizs/Functions", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getDMQTopic5 = (req, res, next) => {
  res.render("quizs/Algorithm_Analysis", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getDMQTopic6 = (req, res, next) => {
  res.render("quizs/Graphs", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};


exports.getAAQTopic1 = (req, res, next) => {
  res.render("quizs/Overview_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAQTopic2 = (req, res, next) => {
  res.render("quizs/Sorting_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAQTopic3 = (req, res, next) => {
  res.render("quizs/Search_Trees", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAQTopic4 = (req, res, next) => {
  res.render("quizs/Hash_Tables", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAQTopic5 = (req, res, next) => {
  res.render("quizs/Greedy_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAQTopic6 = (req, res, next) => {
  res.render("quizs/Dynamic_Programming", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAQTopic7 = (req, res, next) => {
  res.render("quizs/Graph_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAQTopic8 = (req, res, next) => {
  res.render("quizs/Amortized_Analysis", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAQTopic9 = (req, res, next) => {
  res.render("quizs/NP-Completeness", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};




/* C subject quiz */
exports.getCQuiz = (req, res, next) => {
  res.render("quizs/quiz_c", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz1 = (req, res, next) => {
  res.render("quizs/intro_c", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz2 = (req, res, next) => {
  res.render("quizs/data_types", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz3 = (req, res, next) => {
  res.render("quizs/commands", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz4 = (req, res, next) => {
  res.render("quizs/control_statement", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz5 = (req, res, next) => {
  res.render("quizs/function", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz6 = (req, res, next) => {
  res.render("quizs/memory_class", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz7 = (req, res, next) => {
  res.render("quizs/array_string", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz8 = (req, res, next) => {
  res.render("quizs/string_processing", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz9 = (req, res, next) => {
  res.render("quizs/pointer", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz10 = (req, res, next) => {
  res.render("quizs/structure", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCQuiz11 = (req, res, next) => {
  res.render("quizs/file_io", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

/* Data Structure Quizzes */
exports.getDataQuiz = (req, res, next) => {
  res.render("quizs/quiz_data", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataQuiz1 = (req, res, next) => {
  res.render("quizs/advanced_cpp", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataQuiz2 = (req, res, next) => {
  res.render("quizs/array", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataQuiz3 = (req, res, next) => {
  res.render("quizs/stack_queue", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataQuiz4 = (req, res, next) => {
  res.render("quizs/inheritance", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataQuiz5 = (req, res, next) => {
  res.render("quizs/linked_list", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataQuiz6 = (req, res, next) => {
  res.render("quizs/tree", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataQuiz7 = (req, res, next) => {
  res.render("quizs/graph", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

/* OOP quizzes */
exports.getOOPQuiz = (req, res, next) => {
  res.render("quizs/quiz_oop", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPQuiz1 = (req, res, next) => {
  res.render("quizs/intro_kotlin", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPQuiz2 = (req, res, next) => {
  res.render("quizs/logic_construct", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPQuiz3 = (req, res, next) => {
  res.render("quizs/class_object", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPQuiz4 = (req, res, next) => {
  res.render("quizs/functional_prog", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPQuiz5 = (req, res, next) => {
  res.render("quizs/class_types", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPQuiz6 = (req, res, next) => {
  res.render("quizs/collection_types", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPQuiz7 = (req, res, next) => {
  res.render("quizs/high_classes", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPQuiz8 = (req, res, next) => {
  res.render("quizs/generics", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};



/* ML subject flashcards  */
exports.getMLFlah = (req, res, next) => {
  res.render("flashcards/flash_ml", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic1 = (req, res, next) => {
  res.render("flashcards/data_mining", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic2 = (req, res, next) => {
  res.render("flashcards/data_search", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic3 = (req, res, next) => {
  res.render("flashcards/tree_model", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic4 = (req, res, next) => {
  res.render("flashcards/bayesian_model", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic5 = (req, res, next) => {
  res.render("flashcards/ann", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic6 = (req, res, next) => {
  res.render("flashcards/regression_analysis", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic7 = (req, res, next) => {
  res.render("flashcards/ensemble_training", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic8 = (req, res, next) => {
  res.render("flashcards/linear_regression", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic9 = (req, res, next) => {
  res.render("flashcards/clustering", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getMLFlahTopic10 = (req, res, next) => {
  res.render("flashcards/assosiation_analysis", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

/* C flashcard */
exports.getCFlash = (req, res, next) => {
  res.render("flashcards/flash_c", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic1 = (req, res, next) => {
  res.render("flashcards/intro_c", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic2 = (req, res, next) => {
  res.render("flashcards/data_types", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic3 = (req, res, next) => {
  res.render("flashcards/commands", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic4 = (req, res, next) => {
  res.render("flashcards/control_statement", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic5 = (req, res, next) => {
  res.render("flashcards/function", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic5 = (req, res, next) => {
  res.render("flashcards/function", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic6 = (req, res, next) => {
  res.render("flashcards/memory_class", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic7 = (req, res, next) => {
  res.render("flashcards/array_string", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic8 = (req, res, next) => {
  res.render("flashcards/string_processing", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic9 = (req, res, next) => {
  res.render("flashcards/pointer", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic10 = (req, res, next) => {
  res.render("flashcards/structure", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCFlashTopic11 = (req, res, next) => {
  res.render("flashcards/file_io", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

/* Data Structure Flashcards */
exports.getDataFlashTopic = (req, res, next) => {
  res.render("flashcards/flash_data", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataFlashTopic1 = (req, res, next) => {
  res.render("flashcards/advanced_cpp", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataFlashTopic2 = (req, res, next) => {
  res.render("flashcards/array", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataFlashTopic3 = (req, res, next) => {
  res.render("flashcards/stack_queue", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataFlashTopic4 = (req, res, next) => {
  res.render("flashcards/inheritance", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataFlashTopic5 = (req, res, next) => {
  res.render("flashcards/linked_list", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataFlashTopic6 = (req, res, next) => {
  res.render("flashcards/tree", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataFlashTopic7 = (req, res, next) => {
  res.render("flashcards/graph", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

/* OOP flashcard */
exports.getOOPFlashTopic = (req, res, next) => {
  res.render("flashcards/flash_oop", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPFlashTopic1 = (req, res, next) => {
  res.render("flashcards/intro_kotlin", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPFlashTopic2 = (req, res, next) => {
  res.render("flashcards/logic_construct", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPFlashTopic3 = (req, res, next) => {
  res.render("flashcards/class_object", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic4 = (req, res, next) => {
  res.render("flashcards/functional_prog", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic5 = (req, res, next) => {
  res.render("flashcards/class_types", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic6 = (req, res, next) => {
  res.render("flashcards/collection_types", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic7 = (req, res, next) => {
  res.render("flashcards/high_classes", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic8 = (req, res, next) => {
  res.render("flashcards/generics", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

/* OOP flashcard */
exports.getOOPFlashTopic = (req, res, next) => {
  res.render("flashcards/flash_oop", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPFlashTopic1 = (req, res, next) => {
  res.render("flashcards/intro_kotlin", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPFlashTopic2 = (req, res, next) => {
  res.render("flashcards/logic_construct", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPFlashTopic3 = (req, res, next) => {
  res.render("flashcards/class_object", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic4 = (req, res, next) => {
  res.render("flashcards/functional_prog", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic5 = (req, res, next) => {
  res.render("flashcards/class_types", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic6 = (req, res, next) => {
  res.render("flashcards/collection_types", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic7 = (req, res, next) => {
  res.render("flashcards/high_classes", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getOOPFlashTopic8 = (req, res, next) => {
  res.render("flashcards/generics", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic = (req, res, next) => {
  res.render("flashcards/flash_Algorithm_Analysis_Design", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic1 = (req, res, next) => {
  res.render("flashcards/Overview_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic2 = (req, res, next) => {
  res.render("flashcards/Sorting_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic3 = (req, res, next) => {
  res.render("flashcards/Search_Trees", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic4 = (req, res, next) => {
  res.render("flashcards/Hash_Tables", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic5 = (req, res, next) => {
  res.render("flashcards/Greedy_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic6 = (req, res, next) => {
  res.render("flashcards/Dynamic_Programming", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic7 = (req, res, next) => {
  res.render("flashcards/Graph_Algorithms", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic8 = (req, res, next) => {
  res.render("flashcards/Amortized_Analysis", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getAAFlashTopic9 = (req, res, next) => {
  res.render("flashcards/NP-Completeness", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};


exports.getPFlashTopic = (req, res, next) => {
  res.render("flashcards/flash_probability", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getPFlashTopic1 = (req, res, next) => {
  res.render("flashcards/Fundamental_Concepts_Rules", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPFlashTopic2 = (req, res, next) => {
  res.render("flashcards/RandomVariables_ProbabilityDistributions", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPFlashTopic3 = (req, res, next) => {
  res.render("flashcards/Functions_Random_Variables", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPFlashTopic4 = (req, res, next) => {
  res.render("flashcards/Mathematical_Expectation", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPFlashTopic5 = (req, res, next) => {
  res.render("flashcards/Discrete_Probability_Distributions", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPFlashTopic6 = (req, res, next) => {
  res.render("flashcards/Continuous _Probability_Distributions", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPFlashTopic7 = (req, res, next) => {
  res.render("flashcards/Moment_Generating_Functions", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPFlashTopic8 = (req, res, next) => {
  res.render("flashcards/Sampling_Distributions_Data_Descriptions", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPFlashTopic9 = (req, res, next) => {
  res.render("flashcards/Estimation", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getPFlashTopic10 = (req, res, next) => {
  res.render("flashcards/Test_Hypothesis", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getDMFlashTopic = (req, res, next) => {
  res.render("flashcards/flash_Discrete_Math", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDMFlashTopic1 = (req, res, next) => {
  res.render("flashcards/Sets_Proofs", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getDMFlashTopic2 = (req, res, next) => {
  res.render("flashcards/Formal_Logic", {
    pageTitle: "project",
    path: "/landPage",
  });
};exports.getDMFlashTopic3 = (req, res, next) => {
  res.render("flashcards/Relations", {
    pageTitle: "project",
    path: "/landPage",
  });
};exports.getDMFlashTopic4 = (req, res, next) => {
  res.render("flashcards/Functions", {
    pageTitle: "project",
    path: "/landPage",
  });
};exports.getDMFlashTopic5 = (req, res, next) => {
  res.render("flashcards/Algorithm_Analysis", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getDMFlashTopic6 = (req, res, next) => {
  res.render("flashcards/Graphs", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};










/* Exam */
exports.getMLExam = (req, res, next) => {
  res.render("exam/ml", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCExam = (req, res, next) => {
  res.render("exam/exam_c", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDataExam = (req, res, next) => {
  res.render("exam/data_structure", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getDMExam = (req, res, next) => {
  res.render("exam/Discrete_Math", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};
exports.getPExam = (req, res, next) => {
  res.render("exam/probability", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getAAExam = (req, res, next) => {
  res.render("exam/Algorithm_Analysis_Design", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPExam = (req, res, next) => {
  res.render("exam/exam_oop", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getOOPExam = (req, res, next) => {
  res.render("exam/exam_oop", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

/* Articles */
exports.getArticle1 = (req, res, next) => {
  res.render("articles/article1", {
    pageTitle: "project",
    path: "/landpages",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getArticle2 = (req, res, next) => {
  res.render("articles/article2", {
    pageTitle: "project",
    path: "/landpages",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getArticle3 = (req, res, next) => {
  res.render("articles/article3", {
    pageTitle: "project",
    path: "/landpages",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getArticle4 = (req, res, next) => {
  res.render("articles/article4", {
    pageTitle: "project",
    path: "/landpages",
    isAuthenticated: req.session.isLoggedIn,
  });
};