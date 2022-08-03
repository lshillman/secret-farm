const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chicken extends Model{
    createOffSet(){
        // code to make offset
    }
}

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
        farmer_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Farmer',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Chicken',
    }
);
module.exports = { Chicken }