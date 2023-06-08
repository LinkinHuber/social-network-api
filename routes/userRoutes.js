const { User } = require('../models');
const router = require('express').Router();


  router.get('/', async (req, res) => {
    try {
      const result = await User.find({});
        res.status(200).json({result});

    } catch(err){
        console.log(err);
        res.status(400).json({err} );
    };
  });


  router.get('/:id', async (req, res) => {
    try {
      const result = await User.findById(req.params.id).populate({path: 'thoughts'});
        res.status(200).json({result});
        
    } catch(err){
        console.log(err);
        res.status(400).json({err} );
    };
  });


  router.post('/', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
        res.status(200).json({newUser});

    } catch(err){
        console.log(err);
        res.status(400).json({err} );
    };
  });
    

  router.put('/:id', async (req, res) => {
    try{
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        );
      res.status(200).json({updateUser});

    } catch(err){
        console.log(err);
        res.status(400).json({err});
    };
  });


  router.delete('/:id', async (req, res) => {
    try{
      const deleteUser = await User.findByIdAndDelete(
        req.params.id,
        );
      res.status(200).json({deleteUser});

    } catch(err){
        console.log(err);
        res.status(400).json({err});
    };
  });


  router.post('/:userId/friends/:friendId', async (req, res) => {
    try {
      const addFriend = await User.findOneAndUpdate(
        {_id: req.params.userId},
        {$addToSet: {friends: req.params.friendId}},
        {new: true},
        );
      res.status(200).json({addFriend});

    } catch(err){
        console.log(err);
        res.status(400).json({err} );
    };
  });


  router.delete('/:userId/friends/:friendId', async (req, res) => {
    try {
      const deleteFriend = await User.findOneAndUpdate(
        {_id: req.params.userId},
        {$pull: {friends: req.params.friendId}},
        {new: true},
        );
      res.status(200).json({deleteFriend});

    } catch(err){
        console.log(err);
        res.status(400).json({err} );
    };
  });


module.exports = router;