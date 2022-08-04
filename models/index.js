const Animal = require('./Animal');
const Farm = require('./Farm');
const User = require('./User');

User.hasMany(Farm, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Farm.belongsTo(User, {
    foreignKey: 'user_id',
});

Farm.hasMany(Animal, {
    foreignKey: 'farm_id',
    onDelete: 'CASCADE'
});

Animal.belongsTo(Farm, {
    foreignKey: 'farm_id'
});






module.exports = { Animal, Farm, User }