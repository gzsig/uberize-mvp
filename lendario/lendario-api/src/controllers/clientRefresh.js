const axios = require('axios');
const { User } = require('../models');
const moment = require('moment');

const clientRefresh = (req, res) => {
  const { accessToken, userId } = req.decoded;
  console.log(accessToken);
  axios
    .get(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
    .then(response => {
      if (response.data.email) {
        User.findOne({ _id: userId }).then(existingUser => {
          res.status(200).json({
            valid: true,
            email: `${existingUser.email}`,
            picture: `${existingUser.picture}`,
            given_name: `${existingUser.given_name}`,
            family_name: `${existingUser.family_name}`,
            username: `${existingUser.username}`,
            force_reload: moment()
              .subtract(existingUser.expiry_date)
              .format('X')
          });
          return;
        });
      } else {
        res.status(403).json({ message: `${response.data.error}` });
        return;
      }
    })
    .catch(err => {
      res.status(403).json({ message: `${err.response.data.error}` });
      return;
    });
};

module.exports = {
  clientRefresh
};
