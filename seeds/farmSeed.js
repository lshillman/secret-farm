const { Farm } = require('../models');

const farmData = [
    {
       name: 'Lukes Farm',
       description: 'Has chickens and cats',
       user_id: 4
    },
    {
        name: 'Matts Farm',
        description: 'Has cows',
        user_id: 3
    },
    {
        name: 'Sufis farm',
        description: 'tax haven',
        user_id: 2
    },
    {
        name: 'Gregs farm',
        description: 'Goat and squid farm',
        user_id: 1
    }
];
const farms = () => Farm.bulkCreate(farmData);

module.exports = farms;