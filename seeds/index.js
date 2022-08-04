const sequelize = require("../config/connection");
const seedFarm = require('./farmSeed');
// const seedAnimal = require('./animalSeed');
const seedUser = require('./userSeed');

const seedAll = async () => {
    await sequelize.sync({ force: true })
    await seedFarm();
    // await seedAnimal();
    await seedUser();
    process.exit(0);
}
seedAll();