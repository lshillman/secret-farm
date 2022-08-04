const sequelize = require("../config/connection");
const seedFarm = require('./farmSeed');
const seedAnimal = require('./animalSeed');
const seedUser = require('./userSeed');

const seedAll = async () => {
    await sequelize.sync({ force: true })
    await seedUser();
    await seedFarm();
    await seedAnimal();
   
    process.exit(0);
}
seedAll();