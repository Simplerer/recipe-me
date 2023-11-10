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
    maxAge: 30000000,
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


// This is the original path
// app.use(express.static(path.join(__dirname, 'public')));

// this is post build
app.use(express.static(path.join(__dirname, 'dist')));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening ${PORT}`));
});


// https://dev.to/juhanakristian/basics-of-react-server-side-rendering-with-expressjs-phd

// https://vitejs.dev/guide/ssr.html

// https://github.com/vitejs/vite-plugin-react/blob/main/playground/ssr-react/server.js