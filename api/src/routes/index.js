const express = require('express');
const router = express.Router();
const { googlePermission, validateUser } = require('../controllers')
const { passport } = require('../config/passportConfig')

router.get('/', (req, res, next) => {
  res.send('welcome to my API')
})

// router.get('/auth', googlePermission)
// router.post('/auth', validateUser)

const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/calendar',
];

router.get('/auth/google', (req, res, next) => {
  console.log(req.headers);
  next();
}, passport.authenticate('google', { scope: defaultScope }));

router.get('/auth/google/callback',
  passport.authenticate('google', { scope: defaultScope }),
  function (req, res) {
    if (req.user) {
      res.status(200)
    } else {
      res.status(400)
    }
  });

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = {
  router,
}