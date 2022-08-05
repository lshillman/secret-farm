const router = require('express').Router();
const { Animal, Farm, User } = require('../models');

router.get('/', async (req,res) => {
    try{
        const posts = await Farm.findAll({
            include: User,
            attributes: {exclude: ['password']}    
        });
        const Farm = Animal.map((post) =>post.get({plain: true}));
        res.render('homepage',{
            Farm,
            loggedIn: req.session.loggedIn
        });
    }catch(err){
        res.status(500).json(err);
    }
});