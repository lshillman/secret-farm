const { Chicken } = require('./chicken');
const { Farmer } = require('./farmer');
const { plantBed } = require('./plants');

Farmer.hasMany(Chicken,{
    foreignKey: 'farmer_id',
    onDelete: 'CASCADE'
});

Chicken.belongsTo(Farmer,{
    foreignKey: 'farmer_id',
});

// Farmer.hasMany(plantBed,{
// future save behavior to add number of plants in individual beds 
// });

module.exports = { Chicken, Farmer, plantBed };
