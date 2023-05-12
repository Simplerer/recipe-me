const router = require('express').Router()
const { User, Recipe, Friends } = require('../models');
const { Op } = require('sequelize');


// --------- User Routes ------------------------- //


router.get('/user', async (_req,res) => {
  try {
    const userData = await User.findAll({
      include: [{model: Recipe}]
    })
    res.json(userData)
  } catch (e) {
    console.error(e)
    res,json(e)
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Recipe }]
    });
    res.json(userData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.post('/user', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.json(userData);
  } catch (err) {
    console.error(err);
    res.json(err);
  };
});

router.delete('/user/:id', async (req, res) => {
  try { 
    const userData = await User.destroy({
      where: { id: req.params.id } });
      res.json(userData);
      
    } catch (err) {
      console.error(err);
      res.json(err);    
  }
});


// --------- Recipe Routes ------------------------- //


router.get('/recipe', async (_req,res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: {
        model: User
      }
    })
    res.json(recipeData)
  } catch (e) {
    console.error(e)
    res.json(e)
  }
});

router.get('/recipe/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id);
    res.json(recipeData);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.post('/recipe', async (req, res) => {
  try {
    const recipeData = await Recipe.create(req.body);
    res.json(recipeData);
  } catch (err) {
    console.error(err);
    res.json(err);
  };
});

router.delete('/recipe/:id', async (req, res) => {
  try { 
    const recipeData = await Recipe.destroy({
      where: { id: req.params.id } });
      res.json(recipeData);

  } catch (err) {
    console.error(err);
    res.json(err);    
  }
});


// --------- Friendship Routes ------------------------- //

router.get('/friendship/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    const friendData = await userData.getFriend({
      include: [Recipe]
    })
    res.json(friendData);

  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.post('/friendship', async (req, res) => {
  try {
    const { userId, friendId } = req.body 

    const user = await User.findByPk(userId)
    const friend = await User.findByPk(friendId)

    user.addFriend(friend)
    friend.addFriend(user)

    res.json('Friendship established!');

  } catch (err) {
    console.error(err);
    res.json(err);
  };
});

router.delete('/friendship', async (req, res) => {
  try { 

    const {userId, friendId} = req.body

    const friendshipData = await Friends.destroy({
      where: {
        [Op.and]: [{userId: userId}, { friendId: friendId }]
       } });

      res.json(friendshipData);

  } catch (err) {
    console.error(err);
    res.json(err);    
  }
});


module.exports = router;