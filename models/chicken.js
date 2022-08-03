const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chicken extends Model{}

Chicken.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // amount of plants a chicken can steal at a time
        capactiy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
            },
        },
        coop_id:{
            // ???
        },
        farmer_id:{
            // ??
        }
    }
);
module.exports = { Chicken }