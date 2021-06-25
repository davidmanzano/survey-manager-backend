const db = require("../models");
const Survey = db.surveys;
const Question = db.questions;

// Create and Save new Surveys
exports.createSurvey = (survey) => {
  return Survey.create({
    title: survey.title,
    description: survey.description,
    count: survey.count
  })
    .then((survey) => {
      console.log(">> Created survey: " + JSON.stringify(survey, null, 4));
      return survey;
    })
    .catch((err) => {
      console.log(">> Error while creating survey: ", err);
    });
};

// Create and Save new Questions
exports.createQuestion = (surveyId, question) => {
  return Question.create({
    text: question.text,
    type: question.type,
    hint: question.hint,
    surveyId: surveyId,
  })
    .then((question) => {
      console.log(">> Created question: " + JSON.stringify(question, null, 4));
      return question;
    })
    .catch((err) => {
      console.log(">> Error while creating question: ", err);
    });
};

// Get the questions for a given survey
exports.findSurveyById = (req, res) => {
  const surveyId = req.params.id;
  Survey.findByPk(surveyId, { include: ["questions"] })
    .then((survey) => {
      res.send(survey);
    })
    .catch((err) => {
      console.log(">> Error while finding survey: ", err);
    });
};

// Get all Surveys include questions
exports.findAllSurveys = (req, res) => {
  Survey.findAll({ include: ["questions"] })
    .then(survey => {
      res.send(survey);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving surveys."
      });
    });
};

// Get all Questions and Answers for a given survey id
exports.findAllQuestionsBySurvey = (req, res) => {
  const surveyId = req.params.id;
  Question.findAll({ where: {surveyId: surveyId}, include: ["answers"]})
    .then(questions => {
      res.send(questions);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving questions and answers."
    });
  });
}

// Update total number of completed surveys
exports.updateTotalSurveys = (req, res) => {
  const id = req.params.id;

  Survey.increment('count', {where: { id: id }})
  .then(() => {
    res.send({
      message: "Survey was updated successfully."
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating the Survey."
    });
  });
}
