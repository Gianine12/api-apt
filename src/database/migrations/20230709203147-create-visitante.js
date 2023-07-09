'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('visitante', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      
      bloco: {
        type: Sequelize.STRING,
        allowNull: false
      },

      apartamento: {
        type: Sequelize.STRING,
        allowNull: false
      },

      tipo_visitante: {
        type: Sequelize.STRING,
        allowNull: false
      },

      documento: {
        type: Sequelize.STRING,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('visitante');
  }
};
