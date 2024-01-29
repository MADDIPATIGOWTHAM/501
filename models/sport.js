'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    static associate(models) {
      // Define association with Session model
     Sport.hasMany(models.Session, { foreignKey: 'sportId', as: 'sessions' });
    }
    static async createSport(adminId, { name }) {
      try {
        const sport = await Sport.create({
          name,
          adminId,
        });
        return sport;
      } catch (error) {
        throw new Error(`Error creating sport: ${error.message}`);
      }
    }

    static async getAllSports(adminId) {
      try {
        const sports = await Sport.findAll({
          where: { adminId }
        });
        return sports;
      } catch (error) {
        throw new Error(`Error retrieving sports: ${error}`);
      }
    }
    static async getAll() {
      try {
        const sports = await Sport.findAll();
        return sports;
      } catch (error) {
        throw new Error(`Error retrieving sports: ${error.message}`);
      }
    }

    static async deleteSport(sportId) {
      try {
        // Delete the sport
        const sport = await Sport.findOne({
          where: { id: sportId },
        });
        await sport.destroy();

        return { message: 'Sport deleted successfully' };
      } catch (error) {
        throw new Error(`Error deleting sport: ${error.message}`);
      }
    }
  }

  Sport.init({
    name: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Sport',
  });

  return Sport;
};
