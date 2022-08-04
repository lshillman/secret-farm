const { Animal } = require("../models");

const animalData = [
    {
        farm_id: 1,
        name: 'Cowboy',
        type: 'cow',
        breed: 'Highland Cattle',
        food_organic: 150,
        food_manufactured: 100
    },
    {
        farm_id: 2,
        name: 'Brutis',
        type: 'chicken',
        breed: 'Ameraucana',
        food_organic: 150,
        food_manufactured: 100
    },
    {
        farm_id: 3,
        name: 'Wilbur',
        type: 'pig',
        breed: 'Babe',
        food_organic: 150,
        food_manufactured: 100
    },
    {
        farm_id: 4,
        name: 'Amy',
        type: 'squid',
        food_organic: 150,
        food_manufactured: 100
    },
    {
        farm_id: 1,
        name: 'Sky',
        type: 'cow',
        breed: 'Milk cow',
        food_organic: 150,
        food_manufactured: 100
    },
];

const animalSeeds = () => Animal.bulkCreate(animalData);

module.exports =  animalSeeds ;