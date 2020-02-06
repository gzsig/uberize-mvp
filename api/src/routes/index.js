const express = require('express');
const router = express.Router();
const { googlePermission, validateUser } = require('../controllers')


router.get('/', (req, res, next) => {
  res.send('welcome to my API')
})

router.get('/auth', googlePermission)
router.post('/auth', validateUser)

module.exports = {
  router,
}