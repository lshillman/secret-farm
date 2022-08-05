<<<<<<< HEAD
const router = require("express").Router();
const { Farm, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const posts = await Farm.findAll({
      include: User,
      attributes: { exclude: ["password"] },
    });
    const Farms = posts.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      Farms,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
=======
const router = require('express').Router();
const { Animal, Farm, User } = require('../models');

router.get('/', async (req,res) => {
    try{
        const posts = await Farm.findAll({
            include:
        [
            {
            model: User,
            attributes: ["name"]
            },
            {
            model: Animal,
            attributes: ["output"]
            }
        ],
        });
        const Farm = posts.map((post) =>post.get({plain: true}));
        res.render('homepage',{
            Farm,
            loggedIn: req.session.loggedIn
        });
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
>>>>>>> 566169f79f33f1404bb4a37964d5f3a97499dcea
