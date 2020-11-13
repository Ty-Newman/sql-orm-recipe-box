'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredients = sequelize.define('ingredients', {
    amount: DataTypes.NUMERIC,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff:{
      type: DataTypes.STRING,
      validation: {
        notEmpty: true,
      },
    },
    recipeId: DataTypes.INTEGER
  }, {});
  ingredients.associate = function(models) {
    // associations can be defined here
  };
  return ingredients;
};
