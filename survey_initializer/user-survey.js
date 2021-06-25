const surveyController = require("../controllers/survey.controller");
const questionController = require("../controllers/question.controller");

module.exports = {
    run : async () => {
        // Database Initializations
        const survey2 = await surveyController.createSurvey({
        title: "User Survey",
        description: "It's a survey, but for users!",
        count: 0
        });
    
        const question1 = await surveyController.createQuestion(survey2.id, {
        text: "How was your experience with the product?",
        type: "radio",
        hint: ""
        });
    
        const question2 = await surveyController.createQuestion(survey2.id, {
        text: "How has your experience been with similar products?",
        type: "radio",
        hint: ""
        });
    
        const question3 = await surveyController.createQuestion(survey2.id, {
        text: "Would you reccomend this product to a friend?",
        type: "radio",
        hint: ""
        });

        const question4 = await surveyController.createQuestion(survey2.id, {
        text: "On a scale of 1 to 10 how would you rate this product?",
        type: "text",
        hint: "10"
        });
    
        // Question 1 Answers
    
        const q1_answer1 = await questionController.createAnswer(question1.id, {
        text: "Positive",
        count: "0"
        });
    
        const q1_answer2 = await questionController.createAnswer(question1.id, {
        text: "Neutral",
        count: "0"
        });
    
        const q1_answer3 = await questionController.createAnswer(question1.id, {
        text: "Negative",
        count: "0"
        });
    
        // Question 2 Answers
    
        const q2_answer1 = await questionController.createAnswer(question2.id, {
        text: "Positive",
        count: "0"
        });
    
        const q2_answer2 = await questionController.createAnswer(question2.id, {
        text: "Neutral",
        count: "0"
        });
    
        const q2_answer3 = await questionController.createAnswer(question2.id, {
        text: "Negative",
        count: "0"
        });
    
        // Question 3 Answers
    
        const q3_answer1 = await questionController.createAnswer(question3.id, {
        text: "Yes",
        count: "0"
        });
    
        const q3_answer2 = await questionController.createAnswer(question3.id, {
        text: "No",
        count: "0"
        });
    }
}