const surveyController = require("../controllers/survey.controller");
const questionController = require("../controllers/question.controller");

module.exports = {
    run : async () => {
        // Database Initialization
        const survey1 = await surveyController.createSurvey({
        title: "Nonsensical Survey",
        description: "A silly survey that makes no sense",
        count: 10
        });
    
        const question1 = await surveyController.createQuestion(survey1.id, {
            text: "Why is the sky blue?",
            type: "radio",
            hint: ""
        });
    
        const question2 = await surveyController.createQuestion(survey1.id, {
            text: "When you come to a fork in the road, and there are no options left, which way do you go?",
            type: "radio",
            hint: ""
        });
    
        const question3 = await surveyController.createQuestion(survey1.id, {
            text: "What color are the eyes of the most interesting person you know (select all that apply)?",
            type: "checkbox",
            hint: ""
        });
    
        const question4 = await surveyController.createQuestion(survey1.id, {
            text: "Examine your surroundings. How many green things do you see?",
            type: "text",
            hint: "6"
        });
    
        const question5 = await surveyController.createQuestion(survey1.id, {
            text: "What did/would you name your first pet goat?",
            type: "text",
            hint: "Goaty McGoatface"
        });
    
        // Question 1 Answers
    
        const q1_answer1 = await questionController.createAnswer(question1.id, {
            text: "It is blue because it is blue.",
            count: "5"
        });
    
        const q1_answer2 = await questionController.createAnswer(question1.id, {
            text: "Many science, such wow, very fascinate.",
            count: "2"
        });
    
        const q1_answer3 = await questionController.createAnswer(question1.id, {
            text: "What really _is_ blue?",
            count: "3"
        });
    
        // Question 2 Answers
    
        const q2_answer1 = await questionController.createAnswer(question2.id, {
            text: "left",
            count: "4"
        });
    
        const q2_answer2 = await questionController.createAnswer(question2.id, {
            text: "counter-left",
            count: "6"
        });
    
        // Question 3 Answers
    
        const q3_answer1 = await questionController.createAnswer(question3.id, {
            text: "brown",
            count: "2"
        });
    
        const q3_answer2 = await questionController.createAnswer(question3.id, {
            text: "blue",
            count: "1"
        });
    
        const q3_answer3 = await questionController.createAnswer(question3.id, {
            text: "green",
            count: "3"
        });
    
        const q3_answer4 = await questionController.createAnswer(question3.id, {
            text: "gold",
            count: "1"
        });
    
        const q3_answer5 = await questionController.createAnswer(question3.id, {
            text: "red",
            count: "1"
        });
    
        const q3_answer6 = await questionController.createAnswer(question3.id, {
            text: "black",
            count: "1"
        });
    
        const q3_answer7 = await questionController.createAnswer(question3.id, {
            text: "white",
            count: "0"
        });
    
        const q3_answer8 = await questionController.createAnswer(question3.id, {
            text: "other",
            count: "1"
        });

        // Question 4 Answers

        const q4_answer1 = await questionController.createAnswer(question4.id, {
            text: "45",
            count: "4"
        });

        const q4_answer2 = await questionController.createAnswer(question4.id, {
            text: "33",
            count: "6"
        });

        // Question 5 Answers

        const q5_answer1 = await questionController.createAnswer(question5.id, {
            text: "Qwerty",
            count: "3"
        });

        const q5_answer2 = await questionController.createAnswer(question5.id, {
            text: "Samwise",
            count: "7"
        });
    }
}