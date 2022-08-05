const router = require('express').Router();
const { Farm, User } = require('../models');

router.get('/', async (req,res) => {
    try{
        const posts = await Farm.findAll({
            include: User,
            attributes: {exclude: ['password']}    
        });
        const Farms = posts.map((post) =>post.get({plain: true}));
        res.render('homepage',{
            Farms,
            loggedIn: req.session.loggedIn
        });
    }catch(err){
        res.status(500).json(err);
    }
});