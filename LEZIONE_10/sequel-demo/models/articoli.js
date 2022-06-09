'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articoli extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Articoli.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    anni: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Articoli',
  });
  return Articoli;
};