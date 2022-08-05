const router = require('express').Router();
const animalRoutes = require('./animalRoutes');
const farmRoutes = require('./farmRoutes');
const userRoute = require('./user');


router.use('/animals', animalRoutes);
router.use('/farms', farmRoutes);
router.use('/user', userRoute);

module.exports = router;