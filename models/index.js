const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: '0',

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.surveys = require("./survey.model.js")(sequelize, Sequelize);
db.questions = require("./question.model.js")(sequelize, Sequelize);
db.answers = require("./answer.model.js")(sequelize, Sequelize);

db.surveys.hasMany(db.questions, { as: "questions" });
db.questions.belongsTo(db.surveys, {
  foreignKey: "surveyId",
  as: "survey",
});

db.questions.hasMany(db.answers, { as: "answers" });
db.answers.belongsTo(db.questions, {
  foreignKey: "questionId",
  as: "question",
});

module.exports = db;