const { Farm } = require('../models/Farm');

const farmData = [
    {
       name: 'Lukes Farm',
       description: 'Has chickens and cats' 
    },
    {
        name: 'Matts Farm',
        description: 'Has cows'
    },
    {
        name: 'Sufis farm',
        description: 'tax haven'
    },
    {
        name: 'Gregs farm',
        description: 'Goat and squid farm'
    }
];
const farms = () => Farm.bulkCreate(farmData);

module.exports = farms;