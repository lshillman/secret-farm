const router = require('express').Router();
const animalRoutes = require('./animalRoutes');
const farmRoutes = require('./farmRoutes');


router.use('/animals', animalRoutes);
router.use('/farms', farmRoutes);

module.exports = router;