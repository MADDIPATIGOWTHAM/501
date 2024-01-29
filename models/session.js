'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    static associate(models) {
      // Define association with Sport model
      Session.belongsTo(models.Sport, { foreignKey: 'sportId', as: 'sport' });
    }
    static async getAll() {
      try {
        const sessions = await Session.findAll();
        return sessions;
      } catch (error) {
        throw new Error(`Error retrieving sports: ${error.message}`);
      }
    }

    static async createSession(params) {
      try {
        const session = await Session.create(params);
        return session;
      } catch (error) {
        throw new Error(`Error creating session: ${error.message}`);
      }
    };
  }

  Session.init({
    sportId: DataTypes.STRING,
    creator: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    venue: DataTypes.STRING,
    team_size: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Session',
  });

  return Session;
};
