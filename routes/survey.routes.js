module.exports = app => {
    const surveys = require("../controllers/survey.controller.js");
    const questions = require("../controllers/question.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Surveys
    router.get("/", surveys.findAllSurveys);

    // Retrieve all Questions and Answers for a given survey
    router.get("/:id", surveys.findAllQuestionsBySurvey);

    // Add Answer when given  
    router.post("/addAnswer", questions.addAnswer);

    // Retrieve all Answers for a given question
    router.get("/answers/:id", questions.findAllAnswersByQuestion);

    // Update total number of completed surveys
    router.put("/updateTotalSurveys/:id", surveys.updateTotalSurveys);

    // Retrieve survey by ID
    router.get("/retrieveSurvey/:id", surveys.findSurveyById)

    // Retrieve most common answer for a given question
    router.get("/retrieveMostCommonAnswer/:id", questions.findMostCommonAnswer)

    // Retrieve most common answer for a given question
    router.get("/retrieveLeastCommonAnswer/:id", questions.findLeastCommonAnswer)
  
    app.use('/api/surveys', router);
  };