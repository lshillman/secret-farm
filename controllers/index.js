const router = require("express").Router();
const homeRoutes = require("./homePage");
const dashRoute = require("./dashboard");
const apiRoutes = require("./api");
const animalRoutes = require("./Animals");
const publicFarmRoutes = require("./publicFarm");

router.use("/", homeRoutes);

router.use("/dashboard", dashRoute);
router.use("/animal", animalRoutes);
router.use("/farms", publicFarmRoutes);
router.use("/api", apiRoutes);

module.exports = router;
