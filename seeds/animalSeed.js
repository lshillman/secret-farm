const { Animal } = require("../models");

const animalData = [
  {
    farm_id: 1,
    name: "Cowboy",
    type: "cow",
    breed: "Highland Cattle",
    food_organic: 150,
    food_manufactured: 100,
    output: "meat",
  },
  {
    farm_id: 2,
    name: "Brutis",
    type: "chicken",
    breed: "Ameraucana",
    food_organic: 150,
    food_manufactured: 100,
    output: "eggs",
  },
  {
    farm_id: 3,
    name: "Wilbur",
    type: "pig",
    breed: "Babe",
    food_organic: 150,
    food_manufactured: 100,
    output: "meat",
  },
  {
    farm_id: 4,
    name: "Amy",
    type: "squid",
    food_organic: 150,
    food_manufactured: 100,
    output: "ink",
  },
  {
    farm_id: 1,
    name: "Sky",
    type: "cow",
    breed: "Milk cow",
    food_organic: 150,
    food_manufactured: 100,
    output: "milk",
  },
  {
    farm_id: 1,
    name: "doby",
    type: "cow",
    breed: "Milk cow",
    food_organic: 150,
    food_manufactured: 100,
    output: "milk",
  },
  {
    farm_id: 1,
    name: "velma",
    type: "cow",
    breed: "Milk cow",
    food_organic: 150,
    food_manufactured: 100,
    output: "milk",
  },
  {
    farm_id: 1,
    name: "raisin",
    type: "chicken",
    breed: "egg chicken",
    food_organic: 50,
    food_manufactured: 20,
    output: "egg",
  },
  {
    farm_id: 1,
    name: "grape",
    type: "chicken",
    breed: "egg chicken",
    food_organic: 50,
    food_manufactured: 20,
    output: "egg",
  },
  {
    farm_id: 1,
    name: "peel",
    type: "cow",
    breed: "egg chicken",
    food_organic: 50,
    food_manufactured: 20,
    output: "egg",
  },
  
];

const animalSeeds = () => Animal.bulkCreate(animalData);

module.exports = animalSeeds;
