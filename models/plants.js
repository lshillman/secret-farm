const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class plantBed extends Model{
    createOffSet(){
        // code to make offset
    }
}

plantBed.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // amount of plants in the bed
        plants: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'plantBed',
    }
);
module.exports = { plantBed }