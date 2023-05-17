const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: process.env.SESS_SECRET,
  cookie: {
    maxAge: 3000000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening ${PORT}`));
});


// app.get('/', (req, res) => {

//   req.session.user = {
//     name: "Mr. Crowley",
//     occupation: "gangbang"
//   }

//   req.session.myass = 'mamma plz, eat a butt on my butt';
//   // this is now part of the session and lives here !!!
//   console.log(req.session)
//   res.send('hiya')
// })
// app.get('/lol', (req, res) => {
//   req.session.countIt = 'I want to see this somewhere';
//   // this is now part of the session and lives here !!!
//   console.log(req.session)
//   req.session.destroy(() => {
//     res.end()
//   })  
// })
// app.get('/aaa', (req, res) => {
//   console.log(req.session)
//   res.json(req.session)
// })


//   Notes   -   


        // steps -  buuild out login/logouts, create main page