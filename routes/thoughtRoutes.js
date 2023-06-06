const { Thoughts } = require('../models');
const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
      const result = await Thoughts.find({})
      res.status(200).json({result})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });


  router.get('/:id', async (req, res) => {
    try {
      const result = await Thoughts.findById(req.params.id)
      res.status(200).json({result})
    } catch(err){
      console.log(err)
      res.status(400).json({err} )
    }
  });


  module.exports = router