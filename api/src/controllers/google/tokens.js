const { getTokens } = require('../../config/googleConfig');

const googleTokens = (req, res, next) => {
  console.log(req.body.code);
  console.log(getTokens);
  getTokens(req.body.code)
  res.end
}

module.exports = {
  googleTokens
}