'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
      user.hasOne(models.profile, {
        as: "profile",
        foreignKey: {
          name: "idUser"
        }
      });

      // has many to models chats
      user.hasMany(models.chat, {
        as: "senderMessage",
        foreignKey: {
          name: "idSender"
        }
      });
      user.hasMany(models.chat, {
        as: "recipientMessage",
        foreignKey: {
          name: "idRecipient"
        }
      });

      user.hasMany(models.book, {
        as: "books",
        foreignKey : {
          name: "idUser"
        }
      });

      // has one to cart
      user.hasOne(models.cart, {
        as: "cart",
        foreignKey: {
          name: "idUser"
        }
      });

      // has many to transaction
      user.hasMany(models.transaction, {
        as: "transaction",
        foreignKey: {
          name: "idBuyer"
        }
      });
    }
  }

  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};