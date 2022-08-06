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

        res.render('homepage',{
            loggedIn: req.session.loggedIn
        });
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;