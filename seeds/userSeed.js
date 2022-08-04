const { User } = require('../models');

const userData = [
    {
        name: 'mattFarmer',
        password: 'password'
    },
    {
        name: 'lukeFarmer',
        password: 'password'
    },
    {
        name: 'sufiFarmer',
        password: 'password'
    },
    {
        name: 'gregFarmer',
        password: 'password'
    }
];

const createdUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    });

module.exports = createdUsers;