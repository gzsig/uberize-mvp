const express = require('express');
const router = express.Router();
const { googleLogin } = require('../controllers')


router.get('/', (req,res, next) => {
  res.send('welcome to my API')
})

router.get('/auth', googleLogin)

module.exports = {
  router,
}