'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    type: DataTypes.STRING,
    url: DataTypes.STRING,
    company: DataTypes.STRING,
    company_url: DataTypes.STRING,
    location: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING(5000),
    how_to_apply: DataTypes.STRING(5000),
    company_logo: DataTypes.STRING(5000)
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};