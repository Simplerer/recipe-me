const path = require('path');
const express = require('express');

// const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: process.env.SESS_SECRET,
//   cookie: {
//     maxAge: 300000,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// https://enable-cors.org/server_expressjs.html
//  This is a reference to the CORS Express.JS information

const cors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://127.0.0.1:5173");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(cors);

// app.use(require('./controllers/'));

app.get('/try', async (req, res) => {
  res.json({papa: 'rainy', mama: 'thunder', baby: 'lightening'}) 
})

const axios = require('axios')

app.get('/fetch/:search', async (req, res) => {
  const param = req.params['search']
  const data = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${param}&app_id=a0a65abe&app_key=92e94dbd904f4be5c7afef9fdd0f8415&ingr=8&cuisineType=Italian&mealType=Dinner&random=true`)
  .then((res) => {
    
    return res.data.hits
  })
    res.json({data})
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening ${PORT}`));
});