const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Animal extends Model {}

Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    farm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    food_organic: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    food_manufactured: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "animal",
  }
);
module.exports = { Animal };
