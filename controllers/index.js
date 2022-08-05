const router = require("express").Router();
const homeRoutes = require("./homePage.js");
const profileRoutes = require("./profile.js");
const apiRoutes = require("./api");

router.use("/home", homeRoutes);
// router.use("/profile", profileRoutes);
// router.use("/farm", farmRoutes);
router.use("/api", apiRoutes);

module.exports = router;
