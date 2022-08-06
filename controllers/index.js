const router = require("express").Router();
// const homeRoutes = require("./homePage");
// const profileRoutes = require("./profile");
const apiRoutes = require("./api");
const landingPage = require('./landingPage');

// router.use("/profile", homeRoutes);
// router.use("/profile", profileRoutes);
router.use("/", landingPage);

router.use("/api", apiRoutes);

module.exports = router;
