require('dotenv').config();
const { FRONTEND_URL } = process.env;
let jwt = require('jsonwebtoken');
const { User } = require('../../models');

const singinSignup = (req, res) => {
  const {
    email,
    picture,
    given_name,
    family_name,
    accessToken,
    refreshToken,
    expiry_date
  } = req.user;
  User.findOne({ email }).then(existingUser => {
    if (existingUser) {
      const id = existingUser._id.toString();
      const token = jwt.sign(
        { userId: id, accessToken },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '356d' }
      );
      console.log('existooo');
      res.redirect(`${FRONTEND_URL}?token=${token}`); //mexi
    } else {
      User.create({
        email,
        picture,
        given_name,
        family_name,
        accessToken,
        refreshToken,
        expiry_date
      })
        .then(newUser => {
          const id = newUser._id.toString();
          const token = jwt.sign(
            { userId: id, accessToken },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '356d' }
          );
          console.log('naooooo existooo');
          res.redirect(`${FRONTEND_URL}?token=${token}`); //mexi
        })
        .catch(err => {
          console.log('error regestering user: ', err);
          res.redirect(`${FRONTEND_URL}?err=${err}`); //mexi
        });
    }
  });
};

module.exports = {
  singinSignup
};
