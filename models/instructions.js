'use strict';
module.exports = (sequelize, DataTypes) => {
  const instructions = sequelize.define('instructions', {
    specification: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
    listOrder: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  instructions.associate = function(models) {
    instructions.belongsTo(models.recipe, { foreignKey: 'recipeId' });
  };
  return instructions;
};
