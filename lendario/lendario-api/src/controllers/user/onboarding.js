const { User } = require('../../models');

const onboarding = (req, res) => {
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
      res
        .status(500)
        .json({
          message: 'Sorry we encountered an error on our end :/',
          error: err
        });
      return;
    });
};

module.exports = {
  onboarding
};
