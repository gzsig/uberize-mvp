const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
  res.send("welcome to my api")
});

/* GET Google Authentication API. */
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function(req, res) {
      var token = req.user.token;
      res.redirect("http://localhost:3000?token=" + token);
  }
);

module.exports = {
  router
}