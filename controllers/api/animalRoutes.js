const router = require('express').Router();
const {Animal} = require ('../../models');


// get all animals
router.get('/', async (req, res) => {
    try {
        const dbAnimalData = await Animal.findAll();
        if (!dbAnimalData) {
            res.status(404).json({message: "No animals found"});
            return;
        }
        res.status(200).json(dbAnimalData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// get one animal

router.get('/:id', async (req, res) => {
    try {
        const dbAnimalData = await Animal.findByPk(req.params.id);
        if (!dbAnimalData) {
            res.status(404).json({message: "No animals found"});
            return;
        }
        res.status(200).json(dbAnimalData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// post an animal

// update an animal

// delete an animal

module.exports = router;