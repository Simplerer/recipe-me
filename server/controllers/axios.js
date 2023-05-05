const router = require('express').Router();
const axios = require('axios');


// Single recipe search

router.get('/dish/:search', async (req, res) => {
  const { search } = req.params
  const data = await axios.get(`https://api.edamam.com/api/recipes/v2/${search}?type=public&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`)
  .then((res) => {
    
    return res.data
  })
    res.json({data}) 
});

// Here is the general recipe search

router.post('/dish', async (req, res) => {
  const query = req.body?.query || '';
  const ingAmount = req.body?.ingAmount || '';
  const cuisineType = req.body?.cuisineType || '';
  const mealType = req.body?.mealType || '';
  let ingr;
  let cuisine;
  let meal;

  ingAmount == '' ? ingr = '' : ingr = '&ingr=';
  cuisineType == '' ? cuisine = '' : cuisine = '&cuisineType=';
  mealType == '' ? meal = '' : meal = '&mealType=';

  const data = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}${ingr}${ingAmount}${cuisine}${cuisineType}${meal}${mealType}&random=true`)
  .then((res) => {
    return res.data.hits
  })
    res.json({data})
});

module.exports = router;