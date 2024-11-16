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

exports.getQuizzes = (req, res, next) => {
  res.render("quizzes", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getQuizzesSubject = (req, res, next) => {
  res.render("quizzes_subject", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getQuizTemplate = (req, res, next) => {
  res.render("quiz_template", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getQuiz = (req, res, next) => {
  res.render("quiz", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getQuiz1 = (req, res, next) => {
  res.render("quiz_1", {
    pageTitle: "project",
    path: "/landPage",
  });
};