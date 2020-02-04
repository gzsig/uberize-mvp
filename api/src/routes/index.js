const express = require('express');
const router = express.Router();
const { googleLogin, googleTokens } = require('../controllers')


router.get('/', (req, res, next) => {
  res.send('welcome to my API')
})

router.get('/auth', googleLogin)
router.post('/auth', googleTokens)

module.exports = {
  router,
}