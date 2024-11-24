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

exports.getDiscreteMaths = (req, res, next) => {
  res.render("discrete_math", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getProgramming = (req, res, next) => {
  res.render("programming", {
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

exports.getDataStructure = (req, res, next) => {
  res.render("data_structure", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getOOP = (req, res, next) => {
  res.render("oop", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getProbability = (req, res, next) => {
  res.render("probability", {
    pageTitle: "project",
    path: "/landPage",
  });
};

exports.getAlgorithm = (req, res, next) => {
  res.render("algorithm", {
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

exports.getML = (req, res, next) => {
  res.render("machine_learning", {
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

exports.getCV = (req, res, next) => {
  res.render("computer_vision", {
    pageTitle: "project",
    path: "/landPage",
  });
};