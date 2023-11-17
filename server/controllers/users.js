const router = require('express').Router()
const { User, Recipe, Friends } = require('../models');
const { Op } = require('sequelize');


// --------- User Routes ------------------------- //


// get all users
router.get('/user', async (_req,res) => {
  try {
    const userData = await User.findAll({
      include: [{model: Recipe}]
    })
    res.json(userData)
  } catch (e) {
    console.error(e)
    res.json(e)
  }
});

// get one user with id
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

// Not needed, using session route to create user and start session 

// router.post('/user', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);
//     res.json(userData);
//   } catch (err) {
//     console.error(err);
//     res.json(err);
//   };
// });

// delete user
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
    console.log('\n\n ERRORROROR \n\n')
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

// for deleting batches of recipes

// router.delete('/delete-multiple', async (req, res) => {
//   try {
//     const { ids } = req.body; // Assuming you have an array of IDs in the request body

//     // Use Sequelize's destroy method with the where option to delete multiple items
//     const result = await YourModel.destroy({
//       where: {
//         id: {
//           [Op.in]: ids, // Use the Op.in operator to specify multiple IDs
//         },
//       },
//     });

//     if (result > 0) {
//       // If one or more records were deleted
//       res.status(200).json({ message: 'Items deleted successfully' });
//     } else {
//       // If no records were deleted (IDs not found)
//       res.status(404).json({ message: 'No items found for deletion' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


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