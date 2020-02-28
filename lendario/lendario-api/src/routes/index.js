const express = require('express');
const router = express.Router();
const passport = require('passport');
const {
  upcomingEvents,
  singinSignup,
  clientRefresh,
  onboarding
} = require('../controllers');
const { authMiddleware } = require('../resources');

const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/calendar'
];

router.get('/', (req, res, next) => {
  res.send('welcome');
});
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: defaultScope,
    accessType: 'offline',
    // prompt: 'consent',
  })
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  singinSignup
);
router.post('/onboarding', authMiddleware, onboarding);
router.post('/refresh', authMiddleware, clientRefresh);
router.get('/google/cal', authMiddleware, upcomingEvents);

module.exports = {
  router
};
