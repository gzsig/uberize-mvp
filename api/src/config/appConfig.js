// const { root } = require('../constants');
const { router } = require('../routes');
const { mongooseConnect } = require('../resources')
const { User } = require('../models')
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const MongoStore = connectMongo(session)
// const passport = require('passport');
const { passport } = require('../config/passportConfig')
const mongoose = mongooseConnect();


const app = express();

app.use(session({
  secret: "basic-auth-secret",
  cookie: { maxAge: 60 * 60 * 24 * 1000 }, // 60 seconds
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    resave: true,
    saveUninitialized: false,
    ttl: 24 * 60 * 60 // 1 day
  })
}));

app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET, POST',
  credentials: true,
}))

// passport.serializeUser((user, done) => {
//   console.log('serializeUser', user);
//   done(null, user._id)
// })

// passport.deserializeUser((id, done) => {
//   User.findById(id)
//     .then(user => {
//       if (user) {
//         console.log(user);
//         done(null, user)
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       done(err, null)
//     })
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', (req, res, next) => {
  // console.log("REQ ---->",req);
  next()
})



app.use('/', router);

module.exports = {
  app,
}