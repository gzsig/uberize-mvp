const { root } = require('../constants');
const { router } = require('../routes');
const { mongooseConnect } = require('../resources')

const express = require('express');
const bodyParser = require('body-parser');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');

mongooseConnect();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

module.exports = {
  app,
}