const router = require('express').Router();
const { Animal, User } = require('../models');

router.get('/', async (req,res) => {
    try{
        const profiles = await User.findByPk({
            
                include:
                 [
                    {
                        model: Animal,
                         attributes: ["type"]
                    }
                ],
                attributes: {exclude: 'password'}
            
            
        });
/*         const animals = profiles.map((post) =>post.get({plain: true})); */
        console.log(profiles)
        res.render('profile',{
/*             animals,
            loggedIn: req.session.loggedIn */
        });
    }catch(err){
        res.status(500).json(err);
    }
    }
)

module.exports = router;