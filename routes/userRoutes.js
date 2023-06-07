const { User } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      const result = await User.find({})
      res.status(200).json({result})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });


  router.get('/:id', async (req, res) => {
    try {
      const result = await User.findById(req.params.id).populate({path: 'thought'})
      res.status(200).json({result})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });


  router.post('/', async (req, res) => {
    try {
      const newUser = await User.create(req.body)
      res.status(200).json({newUser})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });

  
module.exports = router;