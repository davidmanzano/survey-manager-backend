module.exports = (sequelize, DataTypes) => {
    const Survey = sequelize.define("survey", {
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      count: {
        type: DataTypes.INTEGER
      }
    });
  
    return Survey;
  };