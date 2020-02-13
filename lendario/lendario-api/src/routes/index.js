const express = require('express');
const router = express.Router();
const passport = require('passport');
const gcal = require('google-calendar');
let jwt = require('jsonwebtoken');
const { User } = require('../models')

const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/calendar',
];


router.get('/',
  passport.authenticate('google', { scope: defaultScope, failureRedirect: '/frown' }),
  function (req, res) {
    res.redirect('/success');
  })

router.get('/success', (req, res, next) => {
  res.send("welcome")
});


/* GET Google Authentication API. */
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: defaultScope })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  (req, res) => {
    const { email, picture, given_name, family_name, accessToken, refreshToken } = req.user
    User.findOne({ email })
      .then(existingUser => {
        if (existingUser) {
          const id = existingUser._id.toString();
          const token = jwt.sign({ userId: id, accessToken },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '356d' }
          );
          console.log("existooo");

          res.redirect(`http://localhost:3000?token=${token}`);
        } else {
          User.create({
            email,
            picture,
            given_name,
            family_name,
            accessToken,
            refreshToken,
          })
            .then(newUser => {
              const id = newUser._id.toString();
              const token = jwt.sign({ userId: id, accessToken },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '356d' }
              );
              console.log("naooooo existooo");
              res.redirect(`http://localhost:3000?token=${token}`);
            })
            .catch(err => {
              console.log('error regestering user: ', err);
              res.redirect(`http://localhost:3000?err=${err}`);
            })
        }
      })
  }
);

router.post('/google/cal', (req, res) => {
  const { token } = req.body;
  const google_calendar = new gcal.GoogleCalendar(accessToken);
  google_calendar.events.list('primary', {
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, events) => {
    console.log("events ----->", events.items);
  });
  res.status(200).end
})

module.exports = {
  router
}