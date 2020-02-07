const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../models')

require('dotenv').config()

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

// app.use(passport.initialize())
// app.use(passport.session())

passport.serializeUser((user, done) => {
  console.log('serializeUser', user);
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      if (user) {
        console.log(user);
        done(null, user)
      }
    })
    .catch(err => {
      console.log(err);
      done(err, null)
    })
})

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/auth/google/callback'
},
  function (accessToken, refreshToken, profile, done) {
    console.log("profile:", profile);
    User.findOne({ googleId: profile.id })
      .then(existingUser => {
        if (existingUser) {
          console.log('User already in db: ', existingUser);
          return done(null, existingUser)
        } else {
          User.create({
            googleId: profile.id,
            email: profile._json.email,
            picture: profile._json.picture,
            given_name: profile._json.given_name,
            family_name: profile._json.family_name,
          })
            .then(newUser => {
              console.log('new user in DB: ', newUser);
              return done(null, newUser)
            })
            .catch(err => {
              console.log('error regestering user: ', err);
            })
        }
      })

  }
));


module.exports = { passport }


// profile: {
//   id: '111126957374131764526',
//   displayName: 'Gabriel Zsigmond',
//   name: { familyName: 'Zsigmond', givenName: 'Gabriel' },
//   emails: [ { value: 'gaazsig@gmail.com', verified: true } ],
//   photos: [
//     {
//       value: 'https://lh3.googleusercontent.com/a-/AAuE7mCI34zeYsPQA5bxfnh42i1uFPkYpzk8D72A1AKrHg'
//     }
//   ],
//   provider: 'google',
//   _raw: '{\n' +
//     '  "sub": "111126957374131764526",\n' +
//     '  "name": "Gabriel Zsigmond",\n' +
//     '  "given_name": "Gabriel",\n' +
//     '  "family_name": "Zsigmond",\n' +
//     '  "picture": "https://lh3.googleusercontent.com/a-/AAuE7mCI34zeYsPQA5bxfnh42i1uFPkYpzk8D72A1AKrHg",\n' +
//     '  "email": "gaazsig@gmail.com",\n' +
//     '  "email_verified": true,\n' +
//     '  "locale": "en"\n' +
//     '}',
//   _json: {
//     sub: '111126957374131764526',
//     name: 'Gabriel Zsigmond',
//     given_name: 'Gabriel',
//     family_name: 'Zsigmond',
//     picture: 'https://lh3.googleusercontent.com/a-/AAuE7mCI34zeYsPQA5bxfnh42i1uFPkYpzk8D72A1AKrHg',
//     email: 'gaazsig@gmail.com',
//     email_verified: true,
//     locale: 'en'
//   }
// }
