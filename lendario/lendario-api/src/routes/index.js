const express = require('express');
const router = express.Router();
const passport = require('passport');

const gcal = require('google-calendar');

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
    const token = req.user.token;
    console.log("user: ", req.user);

    res.redirect("http://localhost:3000?token=" + token);
  }
);

router.post('/google/cal', (req, res) => {
  const { token } = req.body;
  console.log("hereeee:", token);
  const google_calendar = new gcal.GoogleCalendar(token);

  google_calendar.events.list('primary', {
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, events) => {
    // events.items.filter(event => {
    //   if(new Date(event.start.dateTime) >= new Date()){
    //     return event
    //   }
    // })
    // let result = []
    //     for (let i = 0; i < events.items.length; i++) {
    //       if (new Date(event.items[i].start.dateTime) >= new Date()) {
    //         result.push( event)
    //       }
    // }

    console.log("events ----->", events.items);
  });
  res.status(200).end
})

module.exports = {
  router
}