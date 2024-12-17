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

/* Subjects's quizs */
exports.getMLQuiz = (req, res, next) => {
  res.render("quizs/quizs_ml", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQuiz1 = (req, res, next) => {
  res.render("quizs/quizs_probability", {
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


exports.getMLQTopic11 = (req, res, next) => {
  res.render("quizs/Fundamental_Concepts_Rules", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic12 = (req, res, next) => {
  res.render("quizs/RandomVariables_ProbabilityDistributions", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic13 = (req, res, next) => {
  res.render("quizs/quizs/Functions_Random_Variables", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic14 = (req, res, next) => {
  res.render("quizs/Mathematical_Expectation", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic15 = (req, res, next) => {
  res.render("quizs/Discrete_Probability_Distributions", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic16 = (req, res, next) => {
  res.render("quizs/Continuous _Probability_Distributions", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic17 = (req, res, next) => {
  res.render("quizs/Moment_Generating_Functions", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic18 = (req, res, next) => {
  res.render("quizs/Sampling_Distributions_Data_Descriptions", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic19 = (req, res, next) => {
  res.render("quizs/Estimation", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic20 = (req, res, next) => {
  res.render("quizs/Test_Hypothesis", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic21 = (req, res, next) => {
  res.render("quizs/Sets_Proofs", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic22 = (req, res, next) => {
  res.render("quizs/", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic23 = (req, res, next) => {
  res.render("quizs/", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic24 = (req, res, next) => {
  res.render("quizs/", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic25 = (req, res, next) => {
  res.render("quizs/", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic26 = (req, res, next) => {
  res.render("quizs/", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic27 = (req, res, next) => {
  res.render("quizs/", {
    pageTitle: "project",
    path: "/landPage",
  });
};
exports.getMLQTopic28 = (req, res, next) => {
  res.render("quizs/", {
    pageTitle: "project",
    path: "/landPage",
  });
};


/* Subjects's flashcards  */
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

/* Exam */
exports.getMLExam = (req, res, next) => {
  res.render("exam/ml", {
    pageTitle: "project",
    path: "/landPage",
  });
};