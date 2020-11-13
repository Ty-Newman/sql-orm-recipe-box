'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    title: {
     type: DataTypes.STRING,
     validate: {
       notEmpty: true,
     }
    }
  }, {});
  recipe.associate = function(models) {
    recipe.hasMany(models.instructions, { foreignKey: 'recipeId' });
  };
  return recipe;
};
