const router = require('express').Router();
const { Animal, Farm, User }=require('../models')

router.get('/:id', async (req, res) => {
    try {
        const dbAnimalData = await Animal.findByPk(req.params.id);
        if (!dbAnimalData) {
            res.status(404).json({message: "No animals found"});
            return;
        }
        const cleanAnimal = dbAnimalData.get({plain: true});
        res.render('animals',{
            cleanAnimal,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;