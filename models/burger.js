'use strict';

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Burger.associate = function(models) {
    // We're saying that a Burger should belong to an Customer
    // A Burger can't be created without a Customer due to the foreign key constraint
    Burger.belongsTo(models.Customer);
  }

  return Burger;
};