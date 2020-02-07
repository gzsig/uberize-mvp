const { app } = require('./appConfig');
const { urlGoogle, getTokens } = require('./googleConfig');
const { passport } = require('./passportConfig')

module.exports = {
  app,
  urlGoogle,
  getTokens,
  passport
}