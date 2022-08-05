const router = require("express").Router();
const { Animal, Farm, User } = require("../models");

//Get all Farms
router.get("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
