const router = require('express').Router();
const {Farm} = require ('../../models');
const {Animal} = require ('../../models');

// get a list of all (public) farms
router.get('/', async (req, res) => {
    try {
        const dbFarmData = await Farm.findAll();
        if (!dbFarmData) {
            res.status(404).json({message: "No farms found"});
            return;
        }
        res.status(200).json(dbFarmData);
    } catch(err) {
        res.status(500).json(err);
    }
});


// get a specific farm
router.get('/:id', async (req, res) => {
    try {
        const dbFarmData = await Farm.findByPk(req.params.id);
        if (!dbFarmData) {
            res.status(404).json({message: "No farm with that id"});
            return;
        }
        res.status(200).json(dbFarmData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// create a farm
router.post('/', async (req, res) => {
    try {
      const dbFarmData = await Farm.create({
        name: req.body.name,
        description: req.body.description,
        user_id: req.session.userId,
      });  
        res.status(200).json(dbFarmData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// update a farm TODO: add withAuth function
router.put('/:id', async (req, res) => {
    try {
      const dbFarmData = await Farm.update(
        {
            name: req.body.name,
            description: req.body.description,
        },
        {
            where: {
                id: req.params.id
            }
        }
        );  
        res.status(200).json(dbFarmData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


// delete a farm TODO add withAuth
router.delete('/:id', async (req, res) => {
    try {
      const dbFarmData = await Farm.destroy(
        {
            where: {
                id: req.params.id
            }
        }
        );  
        res.status(200).json(dbFarmData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});
// farm and animals ---------------------------------------------
router.get('/:id/animal', async (req, res) => {
    try {
        const dbFarmData = await Farm.findByPk(req.params.id,{
            include: {model: Animal}
        });
        if (!dbFarmData) {
            res.status(404).json({message: "No farm with that id"});
            return;
        }
        res.status(200).json(dbFarmData);
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;