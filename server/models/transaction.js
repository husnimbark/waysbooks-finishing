'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
   
    static associate(models) {

   transaction.belongsTo(models.user,{
    as: "userTransactions",
    foreignKey: {
      name: "idUser",
    },
  });

  transaction.belongsToMany(models.book,{
    as: "bookTransactions",
    foreignKey: {
      name: "idUser",
    },
  });
}}




  transaction.init({
    idBook: DataTypes.INTEGER,
    transfer: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};