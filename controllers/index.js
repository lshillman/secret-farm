const router = require("express").Router();

const homeRoutes = require("./homePage");
// const profileRoutes = require("./profile");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
// router.use("/profile", profileRoutes);
/* router.use("/farm", farmRoutes); */
router.use("/api", apiRoutes);

module.exports = router;
