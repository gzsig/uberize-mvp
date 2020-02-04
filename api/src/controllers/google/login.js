const { urlGoogle } = require('../../config/googleConfig')
const googleLogin = (req, res, next) => {
  const url = urlGoogle()
  res.status(200).json(url)
}

module.exports = {
  googleLogin
}