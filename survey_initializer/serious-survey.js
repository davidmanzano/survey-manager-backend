const surveyController = require("../controllers/survey.controller");
const questionController = require("../controllers/question.controller");

module.exports = {
    run : async () => {
        // Database Initializations
        const survey3 = await surveyController.createSurvey({
            title: "Serious Survey",
            description: "This one is very, very, very, very serious...seriously",
            count: 0
        });
    
        const question1 = await surveyController.createQuestion(survey3.id, {
            text: "What is your full legal name?",
            type: "text",
            hint: "Marcus Lopez Arguello"
        });
    
        const question2 = await surveyController.createQuestion(survey3.id, {
            text: "What is your home address?",
            type: "text",
            hint: "12345 Streety Lane"
        });

        const question3 = await surveyController.createQuestion(survey3.id, {
            text: "What is your credit card number?",
            type: "text",
            hint: "1234 1234 1234 1234"
        });
    
        const question4 = await surveyController.createQuestion(survey3.id, {
            text: "How much money did you make last year?",
            type: "text",
            hint: "$1,000,000"
        });
    
        const question5 = await surveyController.createQuestion(survey3.id, {
            text: "What is your SSN?",
            type: "text",
            hint: "123-45-6789"
        });
    }
}