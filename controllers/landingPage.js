const router = require('express').Router();

router.get('/', async (req,res) => {
    try{
        res.render( req.session.logged_in, {layout: 'landing'})
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;