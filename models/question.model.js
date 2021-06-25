module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("question", {
      text: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      hint: {
        type: DataTypes.STRING
      }
    });
  
    return Question;
  };