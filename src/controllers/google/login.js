const { urlGoogle } = require('../../config/googleConfig')
const googleLogin = (req, res, next) => {
  const url = urlGoogle()
  res.redirect(url)
}

module.exports = {
  googleLogin
}