'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {

    static associate(models) {

      profile.belongsTo(models.user,{
        as: "user",
        foreignKey: {
          name: "idUser"
        }
      })
    }
  }
  profile.init({
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatar: DataTypes.STRING,
    location: DataTypes.STRING,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'profile',
  });
  return profile;
};