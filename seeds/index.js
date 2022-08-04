const sequelize = require("sequelize")
const seedFarm = require('./farmSeed')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    await seedFarm();
    await seedAnimal();
    await seedUser();
    process.exit(0);
}
seedAll();