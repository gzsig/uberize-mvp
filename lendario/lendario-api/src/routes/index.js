const express = require('express');
const router = express.Router();
const passport = require('passport');
const gcal = require('google-calendar');
const axios = require('axios');
// let jwt = require('jsonwebtoken');
const { singinSignup, clientRefresh } = require('../controllers');
const { authMiddleware } = require('../resources');
const { User } = require('../models');

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
  passport.authenticate('google', { scope: defaultScope })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  singinSignup
);

router.post('/onboarding', (req, res) => {
  console.log(req.body);
  const { email, username } = req.body;
  User.updateOne({ email }, { $set: { username } })
    .then(existingUser => {
      console.log('success', existingUser);
      res.status(200).json({ message: existingUser });
      return;
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: err });
      return;
    });
});

router.post('/refresh', authMiddleware, clientRefresh);

router.get('/google/cal', authMiddleware, (req, res) => {
  console.log('decoded:', req.decoded);
  const { accessToken } = req.decoded;
  const google_calendar = new gcal.GoogleCalendar(accessToken);
  google_calendar.events.list(
    'primary',
    {
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime'
    },
    (err, events) => {
      console.log('events ----->', events.items);
    }
  );
  res.status(200).end;
});

module.exports = {
  router
};
