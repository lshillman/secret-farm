const { Animal } = require("../models");

const animalData = [
    {
        farm_id: 1,
        type: 'cow',
        food_organic: 150,
        food_manufactured: 100
    },
    {
        farm_id: 2,
        type: 'chicken',
        food_organic: 150,
        food_manufactured: 100
    },
    {
        farm_id: 3,
        type: 'pig',
        food_organic: 150,
        food_manufactured: 100
    },
    {
        farm_id: 4,
        type: 'squid',
        food_organic: 150,
        food_manufactured: 100
    },
    {
        farm_id: 1,
        type: 'cow',
        food_organic: 150,
        food_manufactured: 100
    },
];

const animalSeeds = () => Animal.bulkCreate(animalData);

module.exports =  animalSeeds ;