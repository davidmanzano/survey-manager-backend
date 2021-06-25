const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

const nonsensicalSurvey = require("./survey_initializer/nonsensical-survey");
const userSurvey = require("./survey_initializer/user-survey");
const seriousSurvey = require("./survey_initializer/serious-survey");
const superSurvey = require("./survey_initializer/super-survey");
const weatherSurvey = require("./survey_initializer/weather-survey");

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  nonsensicalSurvey.run().then(() => {
    superSurvey.run().then(() => {
      userSurvey.run().then(() => {
        weatherSurvey.run().then(() => {
          seriousSurvey.run()
        });
      });
    });
  });
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome Survey Manager!" });
});

require("./routes/survey.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}.`);
});