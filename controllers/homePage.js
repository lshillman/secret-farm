const router = require("express").Router();
const { Animal, Farm, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const farmInfo = await User.findAll({
      include: [
        {
          model: Farm,
          include: { model: Animal },
        },
      ],
    });
    const farm = farmInfo.map((farmUsers) => farmUsers.get({ plain: true }));
    console.log(farm);
    res.render("homepage", {
      farm,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
