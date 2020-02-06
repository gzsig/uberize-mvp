const { getUserTokens } = require('../../config/googleConfig');
const { User } = require('../../models')

const validateUser = async (req, res, next) => {
  const { email, picture, given_name, family_name, tokens } = await getUserTokens(req.body.code)
  User.find({ email })
    .then(existingUser => {
      if (existingUser.length) {
        console.log('User already in db: ',existingUser);
      } else {
        User.create({
          email,
          picture,
          given_name,
          family_name,
          tokens
        })
          .then(newUser => {
            console.log('new user in DB: ', newUser);
          })
          .catch(err => {
            console.log('error regestering user: ', err);
          })
      }
    })
  // console.log('decoded: ', result);
  res.end
}

module.exports = {
  validateUser
}