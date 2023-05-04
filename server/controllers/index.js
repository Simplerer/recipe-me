const router = require('express').Router()
const axios = require('axios')

// Single recipe search

router.get('/dish/:search', async (req, res) => {
  const { search } = req.params
  const data = await axios.get(`https://api.edamam.com/api/recipes/v2/${search}?type=public&q=${search}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}`)
  .then((res) => {
    
    return res.data
  })
    res.json({data}) 
})

// Here is the general recipe search

router.get('/fetch/:search', async (req, res) => {
  // const param = req.params['search']
  const { search } = req.params
  // const data = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&ingr=8&cuisineType=Italian&mealType=Dinner&random=true`)
  const data = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&random=true`)
  .then((res) => {
    
    return res.data.hits
  })
    res.json({data})
})

module.exports = router;