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

exports.getMLQuiz = (req, res, next) => {
  res.render("quizs", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getMLQTopic1 = (req, res, next) => {
  res.render("data_mining_process", {
    pageTitle: "project",
    path: "/landPage",
  });
};