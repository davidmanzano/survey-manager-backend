const surveyController = require("../controllers/survey.controller");
const questionController = require("../controllers/question.controller");

module.exports = {
    run : async () => {
        // Database Initialization
        const survey5 = await surveyController.createSurvey({
        title: "Weather Survey",
        description: "A survey curated by the National Weather Service",
        count: 0
        });
    
        const question1 = await surveyController.createQuestion(survey5.id, {
            text: "Do you live in an area where it snows?",
            type: "radio",
            hint: ""
        });
    
        const question2 = await surveyController.createQuestion(survey5.id, {
            text: "Are you a fan of the rain?",
            type: "radio",
            hint: ""
        });
    
        const question3 = await surveyController.createQuestion(survey5.id, {
            text: "What weather have you experienced in the last two weeks (select all that apply)?",
            type: "checkbox",
            hint: ""
        });
    
        const question4 = await surveyController.createQuestion(survey5.id, {
            text: "What weather mobile app do you use most often?",
            type: "text",
            hint: "iPhone Weather App"
        });
    
        const question5 = await surveyController.createQuestion(survey5.id, {
            text: "Where were you the last time it hailed?",
            type: "text",
            hint: "The Grocery Store"
        });
    
        // Question 1 Answers
    
        const q1_answer1 = await questionController.createAnswer(question1.id, {
            text: "Yes",
            count: "0"
        });
    
        const q1_answer2 = await questionController.createAnswer(question1.id, {
            text: "No",
            count: "0"
        });
    
        // Question 2 Answers
    
        const q2_answer1 = await questionController.createAnswer(question2.id, {
            text: "Yes",
            count: "0"
        });
    
        const q2_answer2 = await questionController.createAnswer(question2.id, {
            text: "No",
            count: "0"
        });
    
        // Question 3 Answers
    
        const q3_answer1 = await questionController.createAnswer(question3.id, {
            text: "Rain",
            count: "0"
        });
    
        const q3_answer2 = await questionController.createAnswer(question3.id, {
            text: "Sleet",
            count: "0"
        });
    
        const q3_answer3 = await questionController.createAnswer(question3.id, {
            text: "Snow",
            count: "0"
        });
    
        const q3_answer4 = await questionController.createAnswer(question3.id, {
            text: "Heat Wave",
            count: "0"
        });
    
        const q3_answer5 = await questionController.createAnswer(question3.id, {
            text: "Tornado",
            count: "0"
        });
    
        const q3_answer6 = await questionController.createAnswer(question3.id, {
            text: "Lightning",
            count: "0"
        });
    
        const q3_answer7 = await questionController.createAnswer(question3.id, {
            text: "Hurricane",
            count: "0"
        });
    
        const q3_answer8 = await questionController.createAnswer(question3.id, {
            text: "other",
            count: "0"
        });
    }
}