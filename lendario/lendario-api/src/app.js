// Requiring necessary packages
const express = require("express");
const bodyParser = require("body-parser");
// Requiring passport as we've configured it
const passport = require("passport");
// Setting up port 
require('dotenv').config();
const { PORT } = process.env
// Creating express app and configuring middleware needed for authentication
const { router } = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static("client/build"));
app.use(passport.initialize());
require("./config/passport");
// Syncing our database and logging a message to the user upon success
app.listen(PORT, function () {
  console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});

app.use('/', router);
