const { urlGoogle } = require('../../config/googleConfig')
const googlePermission = (req, res, next) => {
  const url = urlGoogle()
  res.status(200).json(url)
}

module.exports = {
  googlePermission
}