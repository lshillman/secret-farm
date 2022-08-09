const router = require("express").Router();
const { Animal, Farm, User } = require("../models");

//Get all Farms
router.get("/", async (req, res) => {
  try {
    const dbFarmData = await Farm.findAll({include: {
      model: Animal,
    }});
    if (!dbFarmData) {
      res.status(404).json({ message: "No farms found" });
      return;
    }
    // console.log(dbFarmData);
    const farmData = {dbFarmData: dbFarmData};
    console.log(farmData);
    res.render('directory',{
      farmData,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
