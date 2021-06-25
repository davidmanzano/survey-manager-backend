const surveyController = require("../controllers/survey.controller");
const questionController = require("../controllers/question.controller");

module.exports = {
    run : async () => {
        // Database Initialization
        const survey4 = await surveyController.createSurvey({
        title: "Super Survey",
        description: "A survey for comic book lovers and superheroes",
        count: 0
        });
    
        const question1 = await surveyController.createQuestion(survey4.id, {
            text: "Which is the best super power?",
            type: "radio",
            hint: ""
        });
    
        const question2 = await surveyController.createQuestion(survey4.id, {
            text: "If you could have any super power what would it be?",
            type: "text",
            hint: "Super Speed"
        });
    
        const question3 = await surveyController.createQuestion(survey4.id, {
            text: "Who is your favorite super hero",
            type: "text",
            hint: "Spider-Man"
        });
    
        const question4 = await surveyController.createQuestion(survey4.id, {
            text: "Which gadget would you add to your arsenal?",
            type: "radio",
            hint: ""
        });
    
        // Question 1 Answers
    
        const q1_answer1 = await questionController.createAnswer(question1.id, {
            text: "Super Strength",
            count: "0"
        });
    
        const q1_answer2 = await questionController.createAnswer(question1.id, {
            text: "Flight",
            count: "0"
        });
    
        const q1_answer3 = await questionController.createAnswer(question1.id, {
            text: "Super Speed",
            count: "0"
        });

        const q1_answer4 = await questionController.createAnswer(question1.id, {
            text: "Mind Reading",
            count: "0"
        });

        const q1_answer5 = await questionController.createAnswer(question1.id, {
            text: "Telekinesis",
            count: "0"
        });
    
        // Question 4 Answers
    
        const q4_answer1 = await questionController.createAnswer(question4.id, {
            text: "Batman's Utility Belt",
            count: "0"
        });
    
        const q4_answer2 = await questionController.createAnswer(question4.id, {
            text: "Spider-Man's Web Slingers",
            count: "0"
        });

        const q4_answer3 = await questionController.createAnswer(question4.id, {
            text: "Thor's Hammer",
            count: "0"
        });

        const q4_answer4 = await questionController.createAnswer(question4.id, {
            text: "Wonder Woman's Lasso of Truth",
            count: "0"
        });

        const q4_answer5 = await questionController.createAnswer(question4.id, {
            text: "Green Lantern's Ring",
            count: "0"
        });
    }
}