const router = require("express").Router();
const homeRoutes = require("./homePage");
const dashRoute = require("./dashboard");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/", dashRoute);
router.use("/api", apiRoutes);

module.exports = router;
