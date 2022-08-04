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
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    farm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Farm',
        key: 'id'
      }
    },
    food_organic: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false,
    },
    food_manufactured: {
      type: DataTypes.DECIMAL(6,2),
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

module.exports = Animal;
