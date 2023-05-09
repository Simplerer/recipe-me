const router = require('express').Router()
const { User, Recipe, Friend } = require('../models/');


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



module.exports = router;



// router.get('/', async (req, res) => {
//   try {
//     const categoryData = await Category.findAll({
//       include: [{
//         model: Product,
//         attributes: [
//           'product_name',
//           'price',
//           'stock'
//         ]
//       }]
//     });
//     res.json(categoryData);

//   } catch (err) {
//     console.error(err);
//     res.json(err);
//   }
// });