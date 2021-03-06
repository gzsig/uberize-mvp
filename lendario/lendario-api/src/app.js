require('dotenv').config();
const { PORT, FRONTEND_URL, BACKEND_URL } = process.env
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const { passport } = require("./config/passport");
const { router } = require('./routes');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const MongoStore = connectMongo(session)
const { mongooseConnect } = require('./resources')


const mongoose = mongooseConnect();
const app = express();

app.use(session({
  secret: "basic-auth-secret",
  cookie: { maxAge: 60 * 60 * 24 * 1000 }, 
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    resave: true,
    saveUninitialized: false,
    ttl: 24 * 60 * 60 // 1 day
  })
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session())

app.use(cors({
  origin: FRONTEND_URL, //mexi
  methods: 'GET, POST, PATCH, DELETE',
  credentials: true,
}))


// Syncing our database and logging a message to the user upon success
app.listen(PORT, function () {
  console.log(`==> 🌎  Listening on port ${PORT}. Visit ${BACKEND_URL} in your browser.`);
});

app.use('/', router);
