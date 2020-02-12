require('dotenv').config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
      passReqToCallback   : true
    },
    function (req , accessToken, refreshToken, profile, done) {
      const {_json} = profile
      const {
        given_name,
        family_name,
        picture,
        email,
      } = _json
      const userData = {
        given_name,
        family_name,
        picture,
        email,
        token: accessToken
      };
      done(null, userData);
    }
  )
);