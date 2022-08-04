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
router.post('/', async (req, res) => {
    try {
      const dbAnimalData = await Animal.create({
        type: req.body.type,
        name: req.body.name,
        breed: req.body.breed,
        farm_id: req.body.farm_id,
        food_organic: req.body.food_organic,
        food_manufactured: req.body.food_manufactured
      });  
        res.status(200).json(dbAnimalData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});



// update an animal
router.put('/:id', async (req, res) => {
    try {
      const dbAnimalData = await Animal.update(
        {
            type: req.body.type,
            name: req.body.name,
            breed: req.body.breed,
            farm_id: req.body.farm_id,
            food_organic: req.body.food_organic,
            food_manufactured: req.body.food_manufactured
        },
        {
            where: {
                id: req.params.id
            }
        }
        );  
        res.status(200).json(dbAnimalData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// delete an animal
router.delete('/:id', async (req, res) => {
    try {
      const dbAnimalData = await Animal.destroy(
        {
            where: {
                id: req.params.id
            }
        }
        );  
        res.status(200).json(dbAnimalData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;