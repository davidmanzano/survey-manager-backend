module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define("answer", {
      text: {
        type: DataTypes.STRING
      },
      count: {
        type: DataTypes.INTEGER
      }
    });
  
    return Answer;
  };