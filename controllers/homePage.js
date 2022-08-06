const router = require('express').Router();
const { Animal, Farm, User } = require('../models');
// const withAuth = require('')

router.get('/', /*withAuth,*/  async (req,res) => {
    try{
       const userFarms = await fetch(`/api/user/${req.session.userId}/farms`)
        console.log(userFarms)
    }catch(err){
        res.status(500).json(err);
    }
});
// const posts = await Farm.findAll({
//     include:
// [
//     {
//     model: User,
//     attributes: ["name"]
//     },
//     {
//     model: Animal,
//     attributes: ["output"]
//     }
// ],
// });
// const Farm = posts.map((post) =>post.get({plain: true}));
// res.render('homepage',{
//     Farm,
//     loggedIn: req.session.loggedIn,
//     layouts: {dashboard},
// });
module.exports = router;