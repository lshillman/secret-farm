const router = require('express').Router();
const { Animal, Farm, User }=require('../models')

// Dashboard route
router.get('/', async (req,res) => {
    try{
        const posts =  await User.findByPk(
            req.session.userId, 
            {
                include: {model: Farm, include:{model:Animal}},
                attributes: {exclude: 'password'},
            },);
            
            const user = posts.get({plain: true});
            
        if(user.farms.length <= 0){
            res.render('dashboard',{
                user,
                logged_in: req.session.logged_in
                
            });
            return
        }else{
        const animals =JSON.stringify(user.farms[0].animals);
        res.render('dashboard',{
            user,
            animals,
            logged_in: req.session.logged_in
        })
    return};
    }catch(err){
        res.status(500).json(err);
        console.log(err)
    }
});

module.exports = router;