'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
 
    static associate(models) {
      books.belongsTo(models.user, {
        as: "userBooks",
        foreignKey: {
          name: "idUser"
        }
      })

      // belongs to many to cart item
      books.belongsToMany(models.cart, {
        as: "cartBooks",
        foreignKey: {name:"idBook"}
      });

      // belongs to many to transaction item
      books.belongsToMany(models.transaction, {
        as: "transactionBooks",
        foreignKey: {name:"idBook"}
      });

    }
  }
  book.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    desc: DataTypes.TEXT,
    date: DataTypes.DATE,
    pdf: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    ISBN: DataTypes.INTEGER,
    pages: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};