const router = require('express').Router();
const {User, Farm, Animal} = require('../../models');

// Get all users------------------------------------------------------
router.get('/', async(req,res) => {
    try{
        const allUser = await User.findAll(
            {
                attributes: {exclude: 'password'},
            },
        );
        res.status(200).json(allUser);
    }catch(err){
        res.status(500).json(err)
    }
});

// Get one user------------------------------------------------------
router.get('/:id', async(req,res) => {
    try{
        const allUser = await User.findByPk(
            req.params.id,
            {
                include: {model: Farm},
                attributes: {exclude: 'password'},
            },
            
        );
        res.status(200).json(allUser);
    }catch(err){
        res.status(500).json(err)
    }
});
// Create New User------------------------------------------------------
router.post('/', async (req,res) => {
    try{
        const newUser = await User.create({
            name: req.body.name,
            password: req.body.password
        });
        const cleanedUser = newUser.get({plain: true});
        req.session.save(() =>{
            req.session.logged_in = true,
            req.session.name = cleanedUser.name,
            req.session.userId = cleanedUser.id,
            res.status(200).json(newUser);
        });
    }catch(err){
        res.status(500).json(err);
    }
});
// Login    ------------------------------------------------------
router.post('/login', async (req,res) => {
    try{
        const userData = await User.findOne({
            where:{
                name: req.body.name,
            }
        });
        if(!userData){
            res.status(400).json({
                message: 'Incorrect Username or Password'
            });
            return;
        }
        const cleanedUser = userData.get({plain: true});
        const checkedPass = userData.checkPassword(req.body.password);

        if(!checkedPass){
            res.status(400).json({
                message: 'Incorrect Username or Password'
            });
            return;
        }
        req.session.save(() =>{
            req.session.logged_in = true,
            req.session.name = cleanedUser.name,
            req.session.userId = cleanedUser.id,
            res.status(200).json(userData);
        });
        console.log(req.session)
    }catch(err){
        res.status(500).json(err);
    }
});
// Logout    ------------------------------------------------------
router.post('/logout', (req,res) =>{
    if(req.session.logged_in){
        req.session.destroy(() =>{
            res.status(204).end();
        });
    }else{
        res.status(404).end();
    }
});
// Find user all farms and animals
router.get('/:id/farms', async(req,res) => {
    try{
        const allUser = await User.findByPk(
            req.params.id,
            {
                include: {model: Farm, include:{model:Animal}},
                attributes: {exclude: 'password'},
            },
            
        );
        res.status(200).json(allUser);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;