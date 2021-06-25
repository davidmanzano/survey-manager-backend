const db = require("../models");
const sequelize = require("../node_modules/sequelize")
const Question = db.questions;
const Answer = db.answers;
const { Op } = require("sequelize");

// Return false if answer text already exists, true if it is unique
function isAnswerUnique (text) {
  return Answer.count({ where: { text: text } })
    .then(count => {
      if (count != 0) {
        return false;
      }
      return true;
  });
}

// Create and Save new Answers. Used for Survey Database Initialization
exports.createAnswer = (questionId, answer) => {
  return Answer.create({
    text: answer.text,
    count: answer.count,
    questionId: questionId,
  })
    .then((answer) => {
      console.log(">> Created answer: " + JSON.stringify(answer, null, 4));
      return answer;
    })
    .catch((err) => {
      console.log(">> Error while creating answer: ", err);
    });
};

// Add and save a new answer on request
exports.addAnswer = (req, res) => {
  // Validate request
  if (!req.body.text || !req.body.questionId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  isAnswerUnique(req.body.text, req.body.questionId).then(isUnique => {
    // Create a Answer
    let count = (req.body.count) ? req.body.count : 1;
    let answer = {
      text: req.body.text,
      count: count,
      questionId : req.body.questionId
    };
    if (isUnique) {
      // Save Answer in the database
      Answer.create(answer)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Answer."
          });
        });
    } else {
      // Update existing answer, incrementing count by 1
      Answer.increment('count', {
        where: { questionId: answer.questionId, text: answer.text }})
        .then(() => {
          res.send({
            message: "Answer was updated successfully."
          });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while updating the Answer."
          });
        });
    }
  });
};

// Get all Answers for a given question id
exports.findAllAnswersByQuestion = (req, res) => {
  const questionId = req.params.id;
  Answer.findAll({ where: {questionId: questionId}})
    .then(answers => {
      res.send(answers);
  })
}

// Retrieve most common answer by given question id
exports.findMostCommonAnswer = (req, res) => {
  const questionId = req.params.id;
  Answer.findAll({ 
    where: {questionId: questionId},
    attributes: [[sequelize.fn('max', sequelize.col('count')), 'mostCommonAnswer']],
    raw: true,
  })
    .then(answers => {
      Answer.findAll({
        where: {questionId: questionId, count: answers[0].mostCommonAnswer}
      }).then(answers => {
        res.send(answers);
      })
  })
}

// Retrieve least common answer by given question id
exports.findLeastCommonAnswer = (req, res) => {
  const questionId = req.params.id;
  Answer.findAll({ 
    where: {questionId: questionId},
    attributes: [[sequelize.fn('min', sequelize.col('count')), 'leastCommonAnswer']],
    raw: true,
  })
    .then(answers => {
      Answer.findAll({
        where: {questionId: questionId, count: answers[0].leastCommonAnswer}
      }).then(answers => {
        res.send(answers);
      })
  })
}
