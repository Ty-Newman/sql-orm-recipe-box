'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.NUMERIC(5,2),
        allowNull: false
      },
      measurementUnitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrence: { modle: "MeasurementUnits"}
      },
      foodStuff: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refrence: { modle: "recipes"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ingredients');
  }
};
